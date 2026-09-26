import type { Metadata } from 'next'
import Link from 'next/link'
import { Shell } from '@/components/Shell'
import { ContactChannels } from '@/components/ContactChannels'

export const metadata: Metadata = {
  title: 'به‌روزرسانی لیست قیمت و قیمت‌نامه',
  description: 'فایل قیمت جدید تأمین‌کننده را با لیست قبلی تطبیق دهید، اقلام جدید و تغییرات قیمت را پیدا کنید و قیمت‌نامه نهایی را آماده کنید.',
  keywords: ['آپدیت لیست قیمت','به‌روزرسانی قیمت نامه','تطبیق لیست قیمت','تغییر قیمت محصولات'],
  alternates: { canonical: '/update-price-list' },
  openGraph: { title: 'به‌روزرسانی لیست قیمت | DataNizer', description: 'فایل قیمت جدید را بفرستید؛ تطبیق و خروجی نهایی را آماده می‌کنیم.', url: '/update-price-list', type: 'website' },
}
export default function UpdatePriceListPage(){
 const schema={'@context':'https://schema.org','@type':'Service',name:'به‌روزرسانی لیست قیمت و قیمت‌نامه',provider:{'@type':'Organization',name:'DataNizer'},serviceType:'Price list update service',areaServed:{'@type':'Country',name:'Iran'},url:'https://datanizer.ir/update-price-list'}
 return <Shell><main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <section className="service-hero compact"><div className="container narrow-copy"><div className="eyebrow">PRICE LIST UPDATE</div><h1>قیمت جدید آمده؛ <span>فایل قدیمی‌ات را دوباره از صفر نساز.</span></h1><p>لیست جدید را با ساختار قبلی تطبیق می‌دهیم تا تغییر قیمت‌ها، اقلام جدید و موارد حذف‌شده سریع‌تر مشخص شوند.</p><div className="hero-actions"><Link className="btn btn-primary btn-xl" href="/request?service=price-list">ثبت درخواست <span>↗</span></Link><ContactChannels compact/></div></div></section>
  <section className="section"><div className="container"><div className="section-intro"><div className="eyebrow">WHAT CHANGES</div><h2>چه چیزهایی را می‌توانیم پیدا کنیم؟</h2></div><div className="mini-grid"><article><span>01</span><h3>کالاهای جدید</h3><p>اقلامی که در فایل جدید اضافه شده‌اند جدا می‌شوند.</p></article><article><span>02</span><h3>تغییر قیمت</h3><p>تغییرات قیمت خرید یا فروش نسبت به فایل قبلی مشخص می‌شود.</p></article><article><span>03</span><h3>اقلام حذف‌شده</h3><p>مواردی که دیگر در فایل تأمین‌کننده نیستند قابل شناسایی‌اند.</p></article></div></div></section>
  <section className="section section-light"><div className="container split-section"><div><div className="eyebrow">REPEAT WORKFLOW</div><h2>برای سفارش‌های هفتگی و ماهانه مناسب است.</h2></div><div className="service-copy"><p className="lead">اگر هر هفته یا ماه یک فایل جدید می‌گیرید، هدف فقط یک خروجی نیست؛ هدف این است که دفعه بعد همان کار را سریع‌تر و با خطای کمتر انجام دهید.</p><ul><li>ساخت قالب ثابت برای فایل شما</li><li>تطبیق خودکار یا نیمه‌خودکار اقلام</li><li>گزارش تغییرات قیمت</li><li>خروجی نهایی برای فروش و ارسال</li></ul></div></div></section>
  <section className="cta-section"><div className="container cta-card"><div><div className="eyebrow light">RECURRING ORDERS</div><h2>اگر فایل قیمتت مرتب عوض می‌شود، سفارش تکرارشونده بساز.</h2><p>اول یک نمونه را انجام می‌دهیم؛ بعد workflow ثابت را برای دفعات بعد نگه می‌داریم.</p></div><Link className="btn btn-accent btn-xl" href="/request?service=price-list">شروع سفارش <span>↗</span></Link></div></section>
 </main></Shell>
}
