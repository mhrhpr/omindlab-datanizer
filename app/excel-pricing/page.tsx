import type { Metadata } from 'next'
import Link from 'next/link'
import { Shell } from '@/components/Shell'
import { ContactChannels } from '@/components/ContactChannels'

export const metadata: Metadata = {
  title: 'قیمت‌گذاری محصولات با Excel',
  description: 'قیمت خرید، درصد سود و قیمت فروش را از روی فایل Excel یا CSV به یک قیمت‌نامه استاندارد و آماده فروش تبدیل کنید.',
  keywords: ['قیمت‌گذاری محصولات با اکسل','قیمت فروش با اکسل','محاسبه سود اکسل'],
  alternates: { canonical: '/excel-pricing' },
  openGraph: { title: 'قیمت‌گذاری محصولات با Excel | DataNizer', description: 'قیمت خرید، فروش و حاشیه سود را از روی فایل شما آماده می‌کنیم.', url: '/excel-pricing', type: 'website' },
}
export default function ExcelPricingPage(){
 const schema={'@context':'https://schema.org','@type':'Service',name:'قیمت‌گذاری محصولات با Excel',provider:{'@type':'Organization',name:'DataNizer'},serviceType:'Excel product pricing',areaServed:{'@type':'Country',name:'Iran'},url:'https://datanizer.ir/excel-pricing'}
 return <Shell><main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
  <section className="service-hero compact"><div className="container narrow-copy"><div className="eyebrow">EXCEL PRICING</div><h1>قیمت خرید داری؛ <span>قیمت فروش آماده می‌خواهی.</span></h1><p>منطق قیمت‌گذاری شما را روی داده اعمال می‌کنیم تا قیمت فروش، سود و خروجی نهایی از همان فایل قابل استفاده باشد.</p><div className="hero-actions"><Link className="btn btn-primary btn-xl" href="/request?service=price-list">ثبت درخواست <span>↗</span></Link><ContactChannels compact/></div></div></section>
  <section className="section"><div className="container"><div className="section-intro"><div className="eyebrow">PRICING WORKFLOW</div><h2>قیمت‌گذاری در Excel، بدون فرمول‌کاری هر بار از صفر.</h2></div><div className="timeline"><article><span>01</span><h3>قیمت خرید</h3><p>قیمت خرید فعلی یا جدید تأمین‌کننده را از فایل شما استخراج می‌کنیم.</p></article><article><span>02</span><h3>قاعده سود</h3><p>درصد سود یا قواعد قیمت‌گذاری گروه‌های مختلف را اعمال می‌کنیم.</p></article><article><span>03</span><h3>قیمت فروش</h3><p>قیمت فروش محاسبه و خروجی یکسان و قابل استفاده آماده می‌شود.</p></article><article><span>04</span><h3>به‌روزرسانی</h3><p>ساختار فایل برای دفعات بعدی نگه داشته می‌شود تا سفارش تکراری سریع‌تر شود.</p></article></div></div></section>
  <section className="section section-light"><div className="container split-section"><div><div className="eyebrow">USE CASES</div><h2>برای قیمت‌هایی که زیاد تغییر می‌کنند.</h2></div><div className="service-copy"><p className="lead">وقتی قیمت خرید مرتب تغییر می‌کند، نگه‌داشتن چند فایل و چند فرمول دستی احتمال خطا را بالا می‌برد.</p><ul><li>قیمت‌گذاری چندصد یا چند هزار قلم کالا</li><li>قیمت فروش بر اساس درصد سود</li><li>قیمت‌گذاری متفاوت برای گروه‌های مختلف</li><li>ساخت فایل نهایی برای ارسال به مشتری</li></ul></div></div></section>
  <section className="cta-section"><div className="container cta-card"><div><div className="eyebrow light">NO SOFTWARE CHANGE</div><h2>Excel فعلی‌ات را کنار نگذار.</h2><p>از همان فایل‌ها شروع می‌کنیم و workflow را بهتر می‌کنیم.</p></div><Link className="btn btn-accent btn-xl" href="/request?service=price-list">شروع با یک فایل <span>↗</span></Link></div></section>
 </main></Shell>
}
