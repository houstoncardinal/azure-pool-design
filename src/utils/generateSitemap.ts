import { writeFileSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://www.blutouchpools.com'; // Updated domain

const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'weekly' },
  { path: '/services', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'weekly' },
  { path: '/get-quote', priority: '0.9', changefreq: 'weekly' },
  { path: '/portfolio', priority: '0.9', changefreq: 'weekly' },
  // Portfolio Projects
  { path: '/portfolio/jones-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/phillips-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/blount-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/brown-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/robinson-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/rucker-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/jennings-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/tems-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/myers-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/serene-escape-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/modern-retreat-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/coastal-oasis-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/rodriguez-family-project', priority: '0.7', changefreq: 'monthly' },
  { path: '/portfolio/white-family-project', priority: '0.7', changefreq: 'monthly' },
  // Services
  { path: '/custom-pools-spas', priority: '0.9', changefreq: 'weekly' },
  { path: '/upgrades-repairs', priority: '0.8', changefreq: 'weekly' },
  { path: '/pool-servicing', priority: '0.8', changefreq: 'weekly' },
  { path: '/modern-pool-designs', priority: '0.8', changefreq: 'weekly' },
  { path: '/hot-tub-integration', priority: '0.8', changefreq: 'weekly' },
  { path: '/professional-installation', priority: '0.8', changefreq: 'weekly' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
};

export default generateSitemap; 