/**
 * Admin Bootstrap Script
 * Run once: npx ts-node --project tsconfig.scripts.json scripts/setup-admin.ts
 *
 * Creates the initial admin user and default payment settings in Firestore.
 * Requires FIREBASE_ADMIN_PROJECT_ID, FIREBASE_ADMIN_CLIENT_EMAIL, FIREBASE_ADMIN_PRIVATE_KEY in env.
 */

import * as path from 'path';

// Load .env.local manually since dotenv may not be available
const fs = require('fs');
const envFile = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envFile)) {
  const envContent = fs.readFileSync(envFile, 'utf8');
  envContent.split('\n').forEach((line: string) => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '');
  });
}

import { getAdminAuth, getAdminDb } from '../lib/firebase/admin';

async function setupAdmin() {
  console.log('🚀 Ganitopia Admin Bootstrap');
  console.log('================================');

  const adminAuth = getAdminAuth();
  const adminDb = getAdminDb();

  // Create admin user
  let user;
  try {
    user = await adminAuth.createUser({
      email: 'sagarvjoshi@gmail.com',
      password: '1236',
      displayName: 'Sagar V. Joshi',
      emailVerified: true,
    });
    console.log('✅ Admin user created:', user.uid);
  } catch (e: any) {
    if (e.code === 'auth/email-already-exists') {
      user = await adminAuth.getUserByEmail('sagarvjoshi@gmail.com');
      console.log('ℹ️  Admin user already exists:', user.uid);
    } else {
      console.error('❌ Failed to create admin user:', e.message);
      throw e;
    }
  }

  // Set admin custom claim
  await adminAuth.setCustomUserClaims(user.uid, { admin: true });
  console.log('✅ Custom claim set: { admin: true }');

  // Store admin config in Firestore
  await adminDb.collection('adminConfig').doc('main').set({
    adminUid: user.uid,
    adminName: 'Sagar V. Joshi',
    adminEmail: 'sagarvjoshi@gmail.com',
    requirePasswordChange: true,
    createdAt: new Date().toISOString(),
  }, { merge: true });
  console.log('✅ Admin config stored in Firestore');

  // Initialize default payment settings
  await adminDb.collection('paymentSettings').doc('main').set({
    mathPrice: 99900,        // ₹999 in paise
    sciencePrice: 99900,     // ₹999 in paise
    bundlePrice: 169900,     // ₹1699 in paise
    discountPct: 0,
    offerLabel: '',
    offerExpiry: null,
    freeLessonsPerChapter: 0,
    mode: 'live',
    currency: 'INR',
    updatedAt: new Date().toISOString(),
  }, { merge: true });
  console.log('✅ Default payment settings initialized');

  console.log('');
  console.log('🎉 Bootstrap complete!');
  console.log('');
  console.log('   Admin Email: sagarvjoshi@gmail.com');
  console.log('   Initial Password: 1236');
  console.log('   ⚠️  IMPORTANT: Change this password on first login!');
  console.log('');
  console.log('Next steps:');
  console.log('  1. Add your Firebase config to .env.local');
  console.log('  2. Add your Razorpay test keys to .env.local');
  console.log('  3. Run: npm run dev');
  console.log('  4. Visit: http://localhost:3000/admin-login');
}

setupAdmin().catch((err) => {
  console.error('Bootstrap failed:', err);
  process.exit(1);
});
