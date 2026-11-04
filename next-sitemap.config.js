/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ganitopia.pages.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin', '/dashboard', '/api'] },
    ],
    additionalSitemaps: [],
  },
  exclude: [
    '/admin',
    '/admin/*',
    '/dashboard',
    '/dashboard/*',
    '/api/*',
    '/login',
    '/register',
    '/admin-login',
  ],
  changefreq: 'monthly',
  priority: 0.7,
  transform: async (config, path) => {
    let priority = 0.6;
    let changefreq = 'monthly';

    if (path === '/') { priority = 1.0; changefreq = 'weekly'; }
    else if (path === '/math' || path === '/science') { priority = 0.9; changefreq = 'monthly'; }
    else if (path === '/pricing') { priority = 0.8; changefreq = 'weekly'; }
    else if (path.match(/^\/(math|science)\/\d+\/[a-z]/)) { priority = 0.8; }
    else if (path.match(/^\/(math|science)\/\d+$/)) { priority = 0.7; }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
