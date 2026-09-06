import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'
const prisma=new PrismaClient()
async function main(){
  const email=process.env.ADMIN_EMAIL||'admin@example.com'; const password=process.env.ADMIN_PASSWORD||'change-me'; const hash=createHash('sha256').update(password).digest('hex')
  await prisma.user.upsert({where:{email},update:{passwordHash:hash},create:{email,passwordHash:hash,role:'admin'}})
  const pages=[
    ['home','OMINDLAB | Data، اتوماسیون و AI برای کسب‌وکار','OmindLab با Data، اتوماسیون و AI به کسب‌وکارها کمک می‌کند گزارش‌گیری، داشبورد و فرآیندهای دستی خود را ساده و قابل‌اتکا کنند.',['گزارش‌گیری خودکار','اتوماسیون گزارشات','داشبورد مدیریتی','اتوماسیون Excel','Power BI برای کسب‌وکار','هوش تجاری'],'/'],
    ['datanizer','DataNizer | گزارش‌گیری و اتوماسیون داده برای کسب‌وکار','DataNizer خدمت محصولی OmindLab برای اتوماسیون گزارش‌گیری، داشبورد مدیریتی، تجمیع داده و فرآیندهای تکراری کسب‌وکار است.',['گزارش‌گیری خودکار','اتوماسیون گزارشات','داشبورد مدیریتی','اتوماسیون Excel','DataNizer'],'/datanizer'],
    ['request','درخواست DataNizer | مشکل داده و گزارش‌گیری خود را تعریف کنید','مشکل گزارش‌گیری، داده یا فرآیند خود را توضیح دهید.',['اتوماسیون گزارشات','مشاوره داده','گزارش‌گیری مدیریتی'],'/request'],
    ['about','درباره OmindLab | Data × Automation × AI','داستان OmindLab و مسیر ساخت سیستم‌های داده، اتوماسیون و AI برای حل مسائل واقعی کسب‌وکار.',['OmindLab','Data Analytics','Automation','AI'],'/about'],
    ['experts','شبکه متخصصان DataNizer | همکاری در پروژه‌های داده و AI','برای همکاری در پروژه‌های Data، BI، Automation و AI به شبکه متخصصان DataNizer بپیوندید.',['متخصص داده','Power BI','Data Engineer','AI Engineer','فریلنسری داده'],'/experts/join']
  ]
  for(const [key,title,description,keywords,canonical] of pages) await prisma.seoPage.upsert({where:{key:String(key)},update:{title:String(title),description:String(description),keywords,canonical:String(canonical)},create:{key:String(key),title:String(title),description:String(description),keywords,canonical:String(canonical)}})
}
main().finally(()=>prisma.$disconnect())
