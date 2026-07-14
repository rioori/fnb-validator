import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block URL variants that duplicate primary content — they were showing up in GSC
        // as separate URLs, splitting authority and triggering "Crawled - currently not indexed".
        disallow: [
          '/*?view=',        // /fnb?view=trends, ?view=checklist, ?view=ai-chat, etc — all duplicate /fnb
          '/*?utm_source=',  // analytics UTM variants should not be indexed
          '/*?utm_medium=',
          '/*?utm_campaign=',
          '/*?mode=quick',   // wizard mode param — canonical is /fnb
          '/*?start=1',      // deep-link param — canonical is /fnb
          '/*?model=',       // pre-fill param — canonical is /fnb
          '/*?city=',        // pre-fill param — canonical is /fnb
          '/embed/',         // embeddable widgets — should not be indexed as standalone pages
          '/api/',           // API routes
        ],
      },
    ],
    sitemap: 'https://www.validator.vn/sitemap.xml',
  };
}
