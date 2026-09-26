import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Shell } from '@/components/Shell'

type Guide = {
  slug: string
  title: string
  description: string
  intro: string
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
}

const guides: Guide[] = [
  {
    slug: 'price-list-with-excel',
    title: 'ساخت قیمت‌نامه با Excel؛ از فایل خرید تا قیمت فروش',
    description: 'راهنمای عملی ساخت قیمت‌نامه با Excel، یکسان‌سازی کالاها، محاسبه قیمت فروش و آماده‌سازی خروجی برای فروش.',
    intro: 'اگر لیست خرید و قیمت فروش شما در چند فایل جداگانه است، مسئله اصلی فقط مرتب کردن Excel نیست؛ باید یک workflow ثابت داشته باشید که با تغییر قیمت‌ها دوباره قابل استفاده باشد.',
    sections: [
      { heading: 'از کجا شروع کنیم؟', paragraphs: ['ابتدا ستون‌های اصلی را مشخص کنید: کد کالا، نام کالا، واحد، قیمت خرید، موجودی و در صورت نیاز برند یا گروه کالا. هرچه ساختار ورودی ثابت‌تر باشد، خطا در آپدیت‌های بعدی کمتر می‌شود.'], bullets: ['یک کد یکتا برای تطبیق کالاها', 'نام استاندارد برای نمایش فروش', 'قیمت خرید به‌عنوان مبنای محاسبه', 'قاعده مشخص برای درصد سود'] },
      { heading: 'قیمت فروش را چطور حساب کنیم؟', paragraphs: ['ساده‌ترین مدل، اعمال درصد سود روی قیمت خرید است؛ اما در کسب‌وکارهای واقعی ممکن است برای گروه‌های مختلف کالا درصدهای متفاوت داشته باشید. بهتر است این قواعد در یک جدول جداگانه نگهداری شوند تا فرمول‌ها قابل کنترل بمانند.'] },
      { heading: 'خروجی نهایی چه شکلی باشد؟', paragraphs: ['برای کار روزمره، یک فایل Excel قابل ویرایش و یک خروجی PDF یا فایل آماده ارسال مفید است. مهم‌تر از ظاهر، ثبات نام کالا و قابل تکرار بودن فرآیند آپدیت است.'] },
    ],
  },
  {
    slug: 'supplier-price-update',
    title: 'چطور لیست قیمت تأمین‌کننده را سریع به‌روزرسانی کنیم؟',
    description: 'روش مقایسه فایل قیمت جدید و قدیم، شناسایی تغییرات، کالاهای جدید و حذف‌شده و آماده‌سازی قیمت‌نامه.',
    intro: 'وقتی تأمین‌کننده هر هفته فایل جدید می‌فرستد، ساختن قیمت‌نامه از صفر یک کار تکراری و پرخطاست. راه‌حل، ساخت یک قالب ثابت و منطق تطبیق است.',
    sections: [
      { heading: 'سه نوع تغییر مهم', paragraphs: ['در هر فایل جدید معمولاً سه اتفاق رخ می‌دهد: کالا اضافه شده، کالا حذف شده یا قیمت کالای موجود تغییر کرده است. همین سه دسته باید در گزارش تغییرات واضح باشند.'] },
      { heading: 'تطبیق با چه چیزی انجام شود؟', paragraphs: ['کد کالا بهترین کلید است. اگر کد وجود ندارد، می‌توان ترکیبی از نام، برند و مشخصات را برای تطبیق استفاده کرد؛ اما موارد مبهم باید برای بازبینی انسانی جدا شوند.'], bullets: ['کالاهای جدید', 'قیمت‌های تغییرکرده', 'کالاهای حذف‌شده', 'ردیف‌های مشکوک یا بدون تطبیق'] },
      { heading: 'بعد از تطبیق', paragraphs: ['قیمت‌های جدید را روی قالب ثابت قیمت‌نامه اعمال کنید و تغییرات را در یک گزارش کوتاه نگه دارید. این کار باعث می‌شود هر بار بدانید دقیقاً چه چیزی تغییر کرده است.'] },
    ],
  },
  {
    slug: 'excel-product-pricing',
    title: 'قیمت‌گذاری محصولات با Excel و درصد سود',
    description: 'راهنمای طراحی فایل Excel برای محاسبه قیمت فروش، حاشیه سود و کنترل تغییرات قیمت خرید.',
    intro: 'در تورم و نوسان قیمت، یک فایل قیمت‌گذاری خوب باید قابل به‌روزرسانی باشد؛ نه اینکه هر بار فرمول‌ها را دستی تغییر دهید.',
    sections: [
      { heading: 'قیمت خرید با قیمت فروش یکی نیست', paragraphs: ['اگر قیمت خرید امروز بالا رفته است، نگاه کردن به سود اسمیِ فروش گذشته کافی نیست. فایل باید امکان مقایسه قیمت خرید فعلی، قیمت فروش و حاشیه سود را بدهد.'] },
      { heading: 'قاعده سود را جدا نگه دارید', paragraphs: ['برای هر گروه کالا یک Rule جدا تعریف کنید. این Rule می‌تواند درصد سود، حداقل سود یا ترکیبی از هر دو باشد. جدا نگه داشتن Rule از داده کالا باعث می‌شود تغییر سیاست قیمت‌گذاری ساده باشد.'] },
      { heading: 'قبل از انتشار قیمت‌نامه', paragraphs: ['کالاهای بدون قیمت خرید، قیمت‌های غیرعادی، صفر یا منفی و مواردی که نامشان با فایل قبلی تطبیق ندارد را جدا کنید. کنترل کیفیت قبل از انتشار، ارزان‌تر از اصلاح اشتباه بعد از فروش است.'] },
    ],
  },
  {
    slug: 'merge-price-files',
    title: 'ادغام چند فایل قیمت و Excel بدون به‌هم‌ریختگی',
    description: 'روش استانداردسازی چند فایل Excel و CSV با ساختارهای متفاوت برای ساخت یک لیست قیمت واحد.',
    intro: 'مشکل رایج شرکت‌ها این است که هر تأمین‌کننده فایل را با ساختار خودش می‌فرستد. قبل از ادغام باید یک مدل داده مشترک تعریف شود.',
    sections: [
      { heading: 'مدل مشترک بسازید', paragraphs: ['ستون‌های مقصد را قبل از ادغام تعیین کنید و برای هر فایل مشخص کنید کدام ستون به کدام فیلد می‌رود. این همان Data Mapping ساده‌ای است که جلوی آشفتگی را می‌گیرد.'] },
      { heading: 'مواردی که باید پاک شوند', paragraphs: ['فاصله‌های اضافی، اختلاف شکل اعداد، واحدهای متفاوت، نام‌گذاری متفاوت برندها و ردیف‌های تکراری از مهم‌ترین منابع خطا هستند.'] },
      { heading: 'خروجی واحد', paragraphs: ['پس از استانداردسازی، یک فایل Master داشته باشید و قیمت‌نامه فروش را از همان مدل تولید کنید. به این ترتیب فایل‌های ورودی هرقدر هم متفاوت باشند، خروجی کسب‌وکار ثابت می‌ماند.'] },
    ],
  },
  {
    slug: 'auto-parts-price-list',
    title: 'قیمت‌نامه قطعات خودرو با Excel؛ راهکار برای SKUهای زیاد',
    description: 'راهنمای مدیریت قیمت‌نامه قطعات خودرو، تطبیق SKU، تغییر قیمت تأمین‌کننده و آماده‌سازی لیست فروش.',
    intro: 'قطعات خودرو معمولاً اقلام زیاد، چند تأمین‌کننده و تغییر قیمت مکرر دارند؛ به همین دلیل یک workflow ثابتِ قیمت‌نامه ارزش زیادی ایجاد می‌کند.',
    sections: [
      { heading: 'کلید تطبیق را جدی بگیرید', paragraphs: ['کد فنی، برند و مشخصه قطعه باید تا حد امکان جداگانه نگهداری شوند. نام آزاد به‌تنهایی برای تطبیق هزاران قطعه قابل اتکا نیست.'] },
      { heading: 'قیمت را به زمان وصل کنید', paragraphs: ['حداقل تاریخ دریافت فایل و تاریخ به‌روزرسانی را نگه دارید. این کار بعداً برای فهمیدن تغییرات قیمت و پاسخ به اختلاف‌های فروش مفید است.'] },
      { heading: 'قیمت‌نامه مشتری‌پسند', paragraphs: ['کاربر نهایی نباید تمام جزئیات تأمین‌کننده را ببیند. خروجی فروش را با ستون‌های ضروری مثل نام، کد، برند و قیمت نهایی بسازید.'] },
    ],
  },
]

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = guides.find((item) => item.slug === slug)
  if (!guide) return {}
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: '/guide/' + guide.slug },
    openGraph: { title: guide.title, description: guide.description, url: '/guide/' + guide.slug, type: 'article' },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides.find((item) => item.slug === slug)
  if (!guide) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    author: { '@type': 'Organization', name: 'DataNizer' },
    publisher: { '@type': 'Organization', name: 'DataNizer' },
    mainEntityOfPage: 'https://datanizer.ir/guide/' + guide.slug,
  }

  return (
    <Shell>
      <main className="guide-page">
        <div className="container guide-wrap">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
          <nav className="breadcrumbs" aria-label="breadcrumb"><Link href="/">DataNizer</Link><span>›</span><span>راهنما</span><span>›</span><strong>{guide.title}</strong></nav>
          <div className="eyebrow">GUIDE / DATANIZER</div>
          <h1>{guide.title}</h1>
          <p className="guide-intro">{guide.intro}</p>
          <div className="guide-body">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
              </section>
            ))}
          </div>
          <div className="guide-cta">
            <div><div className="eyebrow light">NEED THE WORK DONE?</div><h2>فایل را بفرست تا از روی نمونه شروع کنیم.</h2></div>
            <Link className="btn btn-accent btn-xl" href="/request?service=price-list">ثبت درخواست <span>↗</span></Link>
          </div>
        </div>
      </main>
    </Shell>
  )
}
