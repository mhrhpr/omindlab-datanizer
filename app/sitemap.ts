import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL || 'https://datanizer.ir'
  const paths = [
    { path: '/', priority: 1, frequency: 'weekly' as const },
    { path: '/price-list', priority: 0.95, frequency: 'weekly' as const },
    { path: '/excel-pricing', priority: 0.9, frequency: 'monthly' as const },
    { path: '/update-price-list', priority: 0.9, frequency: 'weekly' as const },
    { path: '/request', priority: 0.85, frequency: 'monthly' as const },
    { path: '/datanizer', priority: 0.65, frequency: 'monthly' as const },
    { path: '/about', priority: 0.4, frequency: 'yearly' as const },
  ]
  const now = new Date()
  return paths.map(({ path, priority, frequency }) => ({ url: base + path, lastModified: now, changeFrequency: frequency, priority }))
}
