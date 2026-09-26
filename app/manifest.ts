import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DataNizer',
    short_name: 'DataNizer',
    description: 'خدمات قیمت‌نامه، قیمت‌گذاری Excel و به‌روزرسانی لیست قیمت.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f5f5ef',
    theme_color: '#10110f',
    lang: 'fa-IR',
    dir: 'rtl',
    icons: [{ src: '/icon', sizes: '64x64', type: 'image/png' }],
  }
}
