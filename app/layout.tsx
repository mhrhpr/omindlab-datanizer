import './globals.css'
import Script from 'next/script'
import type { Metadata } from 'next'
import { getSeoPage } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoPage('home')
  const base = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  return {
    metadataBase: new URL(base),
    title: { default: seo.title, template: '%s | OMINDLAB' },
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: seo.canonical },
    robots: seo.robots,
    openGraph: {
      type: 'website',
      locale: 'fa_IR',
      siteName: 'OMINDLAB',
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      images: [{ url: seo.ogImage }],
    },
    twitter: { card: 'summary_large_image', title: seo.title, description: seo.description, images: [seo.ogImage] },
  }
}

export default function RootLayout({children}:{children:React.ReactNode}){
  const base = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  const jsonLd = {
    '@context':'https://schema.org',
    '@graph':[
      { '@type':'Person', name:'Omid', url:base, jobTitle:'Data & AI Engineer', worksFor:{'@type':'Organization',name:'OMINDLAB',url:base} },
      { '@type':'Organization', name:'OMINDLAB', url:base, description:'Data, automation and AI systems for business.' },
      { '@type':'WebSite', name:'OMINDLAB', url:base, inLanguage:'fa-IR' },
    ]
  }
  return <html lang="fa" dir="rtl"><body>{children}<Script id="omindlab-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} /></body></html>
}
