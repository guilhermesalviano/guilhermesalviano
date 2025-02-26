import { baseUrl } from 'app/sitemap'

export async function GET() {
  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>Portfolio by Guilherme Salviano</title>
        <link>${baseUrl}</link>
        <description>* about Guilherme Salviano</description>
        <item>
          <title>Projects | Guilherme Salviano</title>
          <link>${baseUrl}/projects</link>
          <description>My works.</description>
          <pubDate>${new Date().toISOString().split('T')[0]}</pubDate>
        </item>
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
