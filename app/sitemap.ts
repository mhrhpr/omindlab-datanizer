import type {MetadataRoute} from 'next'

export default function sitemap():MetadataRoute.Sitemap{
  const base=process.env.NEXT_PUBLIC_APP_URL||'http://localhost:3000'
  const paths=['/','/about','/datanizer','/request','/experts/join']
  return paths.map(path=>({url:base+path,lastModified:new Date(),changeFrequency:path==='/'?'weekly':'monthly',priority:path==='/'?1:path==='/datanizer'?0.95:0.7}))
}
