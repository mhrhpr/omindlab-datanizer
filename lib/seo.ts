export type SeoPageKey = 'home' | 'datanizer' | 'request' | 'about' | 'experts' | 'price-list' | 'excel-pricing' | 'update-price-list'

const defaults: Record<SeoPageKey, { title: string; description: string; keywords: string[]; canonical: string }> = {
  home: { title: 'قیمت‌نامه Excel و قیمت‌گذاری محصولات | DataNizer', description: 'فایل قیمت Excel یا CSV خود را بفرستید؛ DataNizer آن را پاک‌سازی، قیمت‌گذاری و به قیمت‌نامه آماده فروش تبدیل می‌کند.', keywords: ['قیمت نامه اکسل','قیمت‌گذاری اکسل','به‌روزرسانی لیست قیمت','ساخت قیمت نامه','قیمت فروش محصولات','اتوماسیون اکسل'], canonical: '/' },
  datanizer: { title: 'DataNizer | خدمات داده و اتوماسیون برای کسب‌وکار', description: 'DataNizer خدمات داده، اتوماسیون Excel، گزارش‌گیری و سیستم‌سازی فرآیندهای تکراری کسب‌وکار را ارائه می‌دهد.', keywords: ['DataNizer','اتوماسیون Excel','گزارش‌گیری','داده کسب‌وکار','اتوماسیون فرآیند'], canonical: '/datanizer' },
  request: { title: 'ثبت سفارش قیمت‌نامه و قیمت‌گذاری | DataNizer', description: 'فایل و نیاز خود را در چند مرحله کوتاه ارسال کنید تا scope و هزینه اجرای آن مشخص شود.', keywords: ['سفارش قیمت نامه','قیمت‌گذاری اکسل','خدمات اکسل','به‌روزرسانی قیمت'], canonical: '/request' },
  about: { title: 'درباره DataNizer | داده و اتوماسیون', description: 'DataNizer یک سرویس کاربردی برای تبدیل فایل‌ها و کارهای تکراری داده به خروجی‌های قابل استفاده کسب‌وکار است.', keywords: ['DataNizer','داده','اتوماسیون'], canonical: '/about' },
  experts: { title: 'همکاری با DataNizer | شبکه متخصصان', description: 'شبکه متخصصان داده، BI، اتوماسیون و توسعه محصول DataNizer.', keywords: ['متخصص داده','Power BI','Data Engineer'], canonical: '/experts/join' },
  'price-list': { title: 'ساخت و به‌روزرسانی قیمت‌نامه Excel | DataNizer', description: 'فایل قیمت تأمین‌کننده را بفرستید؛ قیمت‌ها را مرتب، قیمت فروش را محاسبه و قیمت‌نامه Excel یا PDF آماده می‌کنیم.', keywords: ['ساخت قیمت نامه اکسل','قیمت نامه فروش','لیست قیمت اکسل','به‌روزرسانی قیمت‌نامه'], canonical: '/price-list' },
  'excel-pricing': { title: 'قیمت‌گذاری محصولات با Excel | قیمت خرید، فروش و سود', description: 'قیمت خرید، درصد سود و قیمت فروش محصولات را از روی فایل Excel یا CSV به یک قیمت‌نامه استاندارد تبدیل کنید.', keywords: ['قیمت‌گذاری محصولات با اکسل','قیمت فروش با اکسل','محاسبه سود اکسل'], canonical: '/excel-pricing' },
  'update-price-list': { title: 'به‌روزرسانی لیست قیمت و قیمت‌نامه | Excel و CSV', description: 'اگر فایل قیمت تأمین‌کننده مرتباً تغییر می‌کند، DataNizer به‌روزرسانی، تطبیق و خروجی قیمت‌نامه را سریع‌تر می‌کند.', keywords: ['آپدیت لیست قیمت','به‌روزرسانی قیمت نامه','تطبیق لیست قیمت','تغییر قیمت محصولات'], canonical: '/update-price-list' },
}

export async function getSeoPage(key: SeoPageKey) {
  const fallback = defaults[key]
  try {
    if (!process.env.DATABASE_URL) return { ...fallback, robots: 'index,follow', ogImage: '/opengraph-image' }
    const { prisma } = await import('@/lib/prisma')
    const row = await prisma.seoPage.findUnique({ where: { key } })
    return {
      title: row?.title || fallback.title,
      description: row?.description || fallback.description,
      keywords: row?.keywords ? (row.keywords as string[]) : fallback.keywords,
      canonical: row?.canonical || fallback.canonical,
      robots: row?.robots || 'index,follow',
      ogImage: row?.ogImage || '/opengraph-image',
    }
  } catch {
    return { ...fallback, robots: 'index,follow', ogImage: '/opengraph-image' }
  }
}

export { defaults }
