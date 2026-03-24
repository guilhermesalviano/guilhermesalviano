import { baseUrl } from 'app/sitemap'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: "/",
        disallow: ["/countdown", "/time-to-a-year"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
