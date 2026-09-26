import type { MetadataRoute } from 'next'
export default function sitemap():MetadataRoute.Sitemap{
  const base=process.env.NEXT_PUBLIC_APP_URL||'https://datanizer.ir'
  const paths=[
    {path:'/',priority:1,frequency:'weekly' as const},{path:'/price-list',priority:.95,frequency:'weekly' as const},{path:'/excel-pricing',priority:.9,frequency:'monthly' as const},{path:'/update-price-list',priority:.9,frequency:'weekly' as const},{path:'/request',priority:.9,frequency:'monthly' as const},
    {path:'/guide/price-list-with-excel',priority:.8,frequency:'monthly' as const},{path:'/guide/supplier-price-update',priority:.8,frequency:'monthly' as const},{path:'/guide/excel-product-pricing',priority:.8,frequency:'monthly' as const},{path:'/guide/merge-price-files',priority:.8,frequency:'monthly' as const},{path:'/guide/auto-parts-price-list',priority:.8,frequency:'monthly' as const},
    {path:'/datanizer',priority:.55,frequency:'monthly' as const},{path:'/about',priority:.35,frequency:'yearly' as const}
  ]
  const now=new Date();return paths.map(({path,priority,frequency})=>({url:base+path,lastModified:now,changeFrequency:frequency,priority}))
}
