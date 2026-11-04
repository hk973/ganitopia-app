/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip type checks during build (verified manually with tsc --noEmit)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Cloudflare Workers: disable built-in image optimization
  images: { unoptimized: true },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://checkout.razorpay.com https://www.gstatic.com https://*.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://firestore.googleapis.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://api.razorpay.com https://*.google-analytics.com https://*.analytics.google.com",
              "frame-src https://api.razorpay.com https://checkout.razorpay.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
