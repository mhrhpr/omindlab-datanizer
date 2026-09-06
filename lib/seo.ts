import { prisma } from '@/lib/prisma'

export type SeoPageKey = 'home' | 'datanizer' | 'request' | 'about' | 'experts'

const defaults: Record<SeoPageKey, { title: string; description: string; keywords: string[]; canonical: string }> = {
  home: {
    title: 'OMINDLAB | Data، اتوماسیون و AI برای کسب‌وکار',
    description: 'OmindLab با Data، اتوماسیون و AI به کسب‌وکارها کمک می‌کند گزارش‌گیری، داشبورد و فرآیندهای دستی خود را ساده و قابل‌اتکا کنند.',
    keywords: ['گزارش‌گیری خودکار','اتوماسیون گزارشات','داشبورد مدیریتی','اتوماسیون Excel','Power BI برای کسب‌وکار','هوش تجاری'],
    canonical: '/',
  },
  datanizer: {
    title: 'DataNizer | گزارش‌گیری و اتوماسیون داده برای کسب‌وکار',
    description: 'DataNizer خدمت محصولی OmindLab برای اتوماسیون گزارش‌گیری، داشبورد مدیریتی، تجمیع داده و فرآیندهای تکراری کسب‌وکار است.',
    keywords: ['گزارش‌گیری خودکار','اتوماسیون گزارشات','داشبورد مدیریتی','اتوماسیون Excel','DataNizer'],
    canonical: '/datanizer',
  },
  request: {
    title: 'درخواست DataNizer | مشکل داده و گزارش‌گیری خود را تعریف کنید',
    description: 'مشکل گزارش‌گیری، داده یا فرآیند خود را توضیح دهید. DataNizer بهترین مسیر برای بررسی و اتوماسیون را پیشنهاد می‌دهد.',
    keywords: ['اتوماسیون گزارشات','مشاوره داده','گزارش‌گیری مدیریتی'],
    canonical: '/request',
  },
  about: {
    title: 'درباره OmindLab | Data × Automation × AI',
    description: 'داستان OmindLab و مسیر ساخت سیستم‌های داده، اتوماسیون و AI برای حل مسائل واقعی کسب‌وکار.',
    keywords: ['OmindLab','Data Analytics','Automation','AI'],
    canonical: '/about',
  },
  experts: {
    title: 'شبکه متخصصان DataNizer | همکاری در پروژه‌های داده و AI',
    description: 'برای همکاری در پروژه‌های Data، BI، Automation و AI به شبکه متخصصان DataNizer بپیوندید.',
    keywords: ['متخصص داده','Power BI','Data Engineer','AI Engineer','فریلنسری داده'],
    canonical: '/experts/join',
  },
}

export async function getSeoPage(key: SeoPageKey) {
  const fallback = defaults[key]
  try {
    const row = await prisma.seoPage.findUnique({ where: { key } })
    return {
      title: row?.title || fallback.title,
      description: row?.description || fallback.description,
      keywords: row?.keywords ? (row.keywords as string[]) : fallback.keywords,
      canonical: row?.canonical || fallback.canonical,
      robots: row?.robots || 'index,follow',
      ogImage: row?.ogImage || '/og-default.png',
    }
  } catch {
    return { ...fallback, robots: 'index,follow', ogImage: '/og-default.png' }
  }
}

export { defaults }
