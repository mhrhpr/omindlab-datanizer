import type { Metadata } from 'next'
import { getSeoPage } from '@/lib/seo'
export async function generateMetadata(): Promise<Metadata> { const seo = await getSeoPage('experts'); return { title: seo.title, description: seo.description, keywords: seo.keywords, alternates: { canonical: seo.canonical }, robots: seo.robots, openGraph: { title: seo.title, description: seo.description, url: seo.canonical, images: [seo.ogImage] } } }
export default function Layout({children}:{children:React.ReactNode}){return children}
