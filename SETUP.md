# Ganitopia — Complete Setup Guide

## 🎯 What This Is

A full-stack Next.js 15 educational platform for Class 9 students covering Mathematics (14 chapters) and Science (13 NCERT 2026 chapters), with Firebase Authentication, Firestore database, Razorpay payment gateway, student dashboard, and an admin analytics dashboard. Deployed on Cloudflare Workers.

---

## Prerequisites

- Node.js 20+
- npm 10+
- Cloudflare account (Workers **Paid** plan recommended — bundle may exceed 3 MB free limit)
- Firebase project (Blaze plan for production)
- Razorpay account

---

## Step 1: Install Dependencies

```bash
npm install
```

---

## Step 2: Firebase Setup

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it `ganitopia`
3. Enable **Authentication** → Sign-in method → **Email/Password** → Enable
4. Create **Firestore Database** in production mode
5. Deploy security rules: `firebase deploy --only firestore:rules`
6. Deploy indexes: `firebase deploy --only firestore:indexes`

### Get Firebase Config

7. Project Settings → General → Your apps → **Web app** → Copy config
8. Add to `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### Get Admin SDK Credentials

9. Project Settings → Service accounts → **Generate new private key** → Download JSON
10. Add to `.env.local`:

```
FIREBASE_ADMIN_PROJECT_ID=your-project-id
FIREBASE_ADMIN_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY\n-----END PRIVATE KEY-----\n"
```

> **Important:** In `.env.local`, the private key newlines must be `\n` (literal backslash-n), not actual newlines.

---

## Step 3: Bootstrap Admin Account (Run Once)

```bash
npx ts-node --project tsconfig.scripts.json scripts/setup-admin.ts
```

This creates:
- Admin user: `sagarvjoshi@gmail.com` with initial password `1236`
- Custom claim: `{ admin: true }`
- Default payment settings in Firestore

> ⚠️ **Security:** The initial password `1236` is temporary. You will be forced to change it on first login.

---

## Step 4: Razorpay Setup

1. Sign up at [https://razorpay.com](https://razorpay.com)
2. Dashboard → Settings → **API Keys** → Generate Test Key
3. Add to `.env.local`:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_XXXXXXXXXX
RAZORPAY_KEY_SECRET=your_secret_key
```

### Webhook Setup (for production)

4. Razorpay Dashboard → Webhooks → **Add new webhook**
5. URL: `https://ganitopia.<your-subdomain>.workers.dev/api/webhooks/razorpay` (or your custom domain)
6. Events: `payment.captured`, `payment.failed`
7. Copy webhook secret → add to `.env.local`:

```
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

---

## Step 5: Cloudflare Setup (Workers Builds / GitHub Integration)

This project uses **Cloudflare Workers** with Static Assets via `@opennextjs/cloudflare`.

### Option A: Connect GitHub to Cloudflare Workers Builds (Recommended)

1. Push your repository to GitHub.
2. In Cloudflare Dashboard, go to **Compute (Workers & Pages)** → **Create** → **Workers** → **Connect to Git** (Workers Builds).
3. Select your repository (`ganitopia-app`).
4. Set Build configuration:
   - **Framework preset**: None
   - **Build command**: `npm run build:worker`
   - **Deploy command**: `npx @opennextjs/cloudflare deploy` (or leave default)
   - **Root directory**: `/`
5. Create R2 bucket for ISR cache:
   - Go to Cloudflare Dashboard → **R2** → **Create bucket** → Name it `ganitopia-cache`.
6. Add Environment Variables in Cloudflare:
   - In your Worker Settings → **Variables and Secrets**:
     - `NODE_VERSION`: `22` (Required for Wrangler v4 and OpenNext)
     - Add all variables listed in the Environment Variables table below.

### Option B: Local CLI Deployment

1. Install Wrangler and login:
```bash
npm install -g wrangler
wrangler login
```

2. Create R2 bucket (for ISR cache):
```bash
wrangler r2 bucket create ganitopia-cache
```

3. Build and deploy:
```bash
npm run deploy
```

---

## Step 6: Local Development

```bash
npm run dev
```

Opens on [http://localhost:3000](http://localhost:3000)

**Test logins:**
- Admin: `sagarvjoshi@gmail.com` / `1236` → `/login`
- Student: Register at `/register` → `/dashboard`

---

## Step 7: Build and Deploy to Cloudflare Workers

```bash
npm run deploy
```

This runs:
1. `next build` — SSG/ISR pre-renders all Math and Science pages
2. `next-sitemap` — generates sitemap.xml and robots.txt
3. `opennextjs-cloudflare build` — transforms Next.js output for Cloudflare Workers runtime
4. `opennextjs-cloudflare deploy` — uploads assets and deploys worker to Cloudflare Workers

Your app will be live at `https://ganitopia.<your-subdomain>.workers.dev` (or your custom domain).

---

## Step 8: Custom Domain

1. Cloudflare Dashboard → Workers & Pages → ganitopia → Custom domains
2. Add your domain and follow DNS instructions
3. Update `NEXT_PUBLIC_SITE_URL` in Cloudflare env vars

---

## Step 9: Switch to Live Payments

1. Complete Razorpay KYC
2. Update env vars:
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_XXXXXXXXXX`
   - `RAZORPAY_KEY_SECRET=live_secret_key`
3. Update Razorpay webhook URL to your production domain
4. In Admin Dashboard → Pricing, set mode to `live`

---

## Project Structure Summary

```
ganitopia-app/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage (SSG)
│   ├── math/               # Math module (SSG)
│   ├── science/            # Science module (SSG)
│   ├── pricing/            # Pricing page (ISR)
│   ├── login/              # Student login
│   ├── register/           # Student registration
│   ├── admin-login/        # Admin login
│   ├── dashboard/          # Student dashboard (SSR)
│   ├── admin/              # Admin dashboard (SSR)
│   └── api/                # API routes (server-side)
├── components/             # React components
├── data/math/              # 14 Math chapters (TypeScript data)
├── data/science/           # 13 Science chapters (TypeScript data)
├── lib/                    # Utilities and Firebase helpers
├── scripts/                # One-time setup scripts
├── firestore.rules         # Security rules
├── wrangler.jsonc          # Cloudflare configuration
└── middleware.ts           # Route protection
```

---

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | ✅ | Firebase Web API key |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | ✅ | Firebase Auth domain |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | ✅ | Firebase Project ID |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | ✅ | Firebase Storage bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | ✅ | Firebase Messaging ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | ✅ | Firebase App ID |
| `FIREBASE_ADMIN_PROJECT_ID` | ✅ | Firebase Admin Project ID |
| `FIREBASE_ADMIN_CLIENT_EMAIL` | ✅ | Firebase Admin service account email |
| `FIREBASE_ADMIN_PRIVATE_KEY` | ✅ | Firebase Admin private key (with \\n) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | ✅ | Razorpay Key ID (public) |
| `RAZORPAY_KEY_SECRET` | ✅ | Razorpay Key Secret (server-only!) |
| `RAZORPAY_WEBHOOK_SECRET` | ✅ | Razorpay webhook secret |
| `NEXT_PUBLIC_SITE_URL` | ✅ | Your deployed URL |

---

## Troubleshooting

### Build fails with TypeScript errors
```bash
npx tsc --noEmit
```

### Firebase Admin not connecting
- Check that `FIREBASE_ADMIN_PRIVATE_KEY` has `\\n` (not actual newlines) in `.env.local`
- Verify the service account email matches exactly

### Razorpay payment not working
- Ensure `NEXT_PUBLIC_RAZORPAY_KEY_ID` starts with `rzp_test_` for test mode
- Check browser console for Razorpay script loading errors

### Worker size too large
- Upgrade to Cloudflare Workers Paid plan ($5/month) for 10 MB limit
