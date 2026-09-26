import './globals.css'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { getSeoPage } from '@/lib/seo'

const sameAs=[process.env.NEXT_PUBLIC_CONTACT_TELEGRAM,process.env.NEXT_PUBLIC_CONTACT_BALE,process.env.NEXT_PUBLIC_CONTACT_RUBIKA,process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM,process.env.NEXT_PUBLIC_CONTACT_LINKEDIN,process.env.NEXT_PUBLIC_CONTACT_WHATSAPP].filter(Boolean) as string[]

export async function generateMetadata(): Promise<Metadata> {
  const seo=await getSeoPage('home')
  const base=process.env.NEXT_PUBLIC_APP_URL||'https://datanizer.ir'
  return {
    metadataBase:new URL(base),applicationName:'DataNizer',
    title:{default:seo.title,template:'%s | DataNizer'},description:seo.description,keywords:seo.keywords,
    alternates:{canonical:seo.canonical},robots:seo.robots,
    verification:process.env.GOOGLE_SITE_VERIFICATION?{google:process.env.GOOGLE_SITE_VERIFICATION}:undefined,
    openGraph:{type:'website',locale:'fa_IR',siteName:'DataNizer',title:seo.title,description:seo.description,url:seo.canonical,images:[{url:'/opengraph-image'}]},
    twitter:{card:'summary_large_image',title:seo.title,description:seo.description,images:['/opengraph-image']}
  }
}
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#10110f',colorScheme:'light'}
export default function RootLayout({children}:{children:React.ReactNode}){
  const base=process.env.NEXT_PUBLIC_APP_URL||'https://datanizer.ir'
  const jsonLd={'@context':'https://schema.org','@graph':[
    {'@type':'Organization',name:'DataNizer',url:base,description:'خدمات قیمت‌نامه، قیمت‌گذاری و اتوماسیون فایل برای کسب‌وکارها.',sameAs,areaServed:{'@type':'Country',name:'Iran'},contactPoint:{'@type':'ContactPoint',contactType:'sales',email:process.env.NEXT_PUBLIC_CONTACT_EMAIL||undefined,telephone:process.env.NEXT_PUBLIC_CONTACT_PHONE||undefined,availableLanguage:['fa','en']}},
    {'@type':'WebSite',name:'DataNizer',url:base,inLanguage:'fa-IR'}
  ]}
  return <html lang="fa-IR" dir="rtl"><body>{children}<Script id="site-schema" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/></body></html>
}
