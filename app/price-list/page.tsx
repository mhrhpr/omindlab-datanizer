import type { Metadata } from 'next'
import Link from 'next/link'
import { Shell } from '@/components/Shell'

export const metadata: Metadata = {
  title: 'ساخت و به‌روزرسانی قیمت‌نامه Excel',
  description: 'فایل قیمت تأمین‌کننده را بفرستید؛ DataNizer قیمت‌ها را مرتب، قیمت فروش را محاسبه و قیمت‌نامه Excel یا PDF آماده می‌کند.',
  keywords: ['ساخت قیمت نامه اکسل','لیست قیمت اکسل','به‌روزرسانی قیمت نامه','قیمت نامه فروش'],
  alternates: { canonical: '/price-list' },
  openGraph: { title: 'ساخت و به‌روزرسانی قیمت‌نامه Excel | DataNizer', description: 'از فایل خام تأمین‌کننده تا قیمت‌نامه آماده فروش.', url: '/price-list', type: 'website' },
}

const faq = [
  ['قیمت‌نامه را با فایل قدیمی هم می‌توانید بسازید؟', 'بله. اگر فایل قدیمی و فایل قیمت جدید را دارید، می‌توانیم ساختار آن‌ها را تطبیق دهیم و خروجی یکپارچه بسازیم.'],
  ['قیمت فروش بر چه اساسی حساب می‌شود؟', 'منطق قیمت‌گذاری از شما گرفته می‌شود؛ مثلاً درصد سود روی قیمت خرید یا قواعد متفاوت برای گروه‌های مختلف کالا.'],
  ['خروجی برای چاپ و ارسال هم آماده می‌شود؟', 'بله. می‌توان خروجی را برای Excel، PDF یا فرمت مناسب ارسال آماده کرد.'],
]

export default function PriceListPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', name: 'ساخت و به‌روزرسانی قیمت‌نامه Excel', provider: { '@type': 'Organization', name: 'DataNizer' }, serviceType: 'Excel price list processing and pricing', areaServed: { '@type': 'Country', name: 'Iran' }, url: 'https://datanizer.ir/price-list' },
      { '@type': 'FAQPage', mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) },
    ],
  }
  return (
    <Shell>
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className="service-hero"><div className="container service-hero-grid"><div><div className="eyebrow">SERVICE / PRICE LIST</div><h1>از فایل قیمت تأمین‌کننده تا <span>قیمت‌نامه آماده فروش.</span></h1><p>فایل Excel یا CSV را می‌فرستید؛ ما اقلام را مرتب می‌کنیم، قیمت فروش را طبق منطق شما حساب می‌کنیم و خروجی استاندارد تحویل می‌دهیم.</p><div className="hero-actions"><Link className="btn btn-primary btn-xl" href="/request?service=price-list">ثبت سفارش اولیه <span>↗</span></Link><Link className="btn btn-ghost" href="/#faq">سؤالات متداول</Link></div></div><div className="service-result-card"><span className="result-label">INPUT → OUTPUT</span><div><small>فایل خام</small><strong>Supplier.xlsx</strong></div><i>↓</i><div className="result-accent"><small>خروجی نهایی</small><strong>PriceList.xlsx + PDF</strong></div></div></div></section>
        <section className="section"><div className="container split-section"><div><div className="eyebrow">WHAT WE DO</div><h2>یک کار مشخص را سریع حل می‌کنیم.</h2></div><div className="service-copy"><p className="lead">اگر قیمت خرید از چند تأمین‌کننده می‌آید یا هر هفته باید فایل‌ها را اصلاح کنید، مسئله شما بیشتر از «اکسل» است؛ مسئله، workflow تکراری است.</p><ul><li>یکسان‌سازی نام و کد کالا</li><li>ادغام و تطبیق چند فایل</li><li>محاسبه قیمت فروش و حاشیه سود</li><li>خروجی Excel و PDF آماده استفاده</li></ul></div></div></section>
        <section className="section section-light"><div className="container"><div className="section-intro"><div className="eyebrow">WHO NEEDS IT</div><h2>وقتی قیمت‌ها زیاد تغییر می‌کنند، ارزشش بیشتر می‌شود.</h2></div><div className="mini-grid"><article><span>01</span><h3>قطعات خودرو</h3><p>اقلام زیاد، چند تأمین‌کننده و تغییرات مکرر قیمت.</p></article><article><span>02</span><h3>ابزار و تجهیزات</h3><p>قیمت‌های خرید مختلف و نیاز به قیمت‌نامه قابل ارسال.</p></article><article><span>03</span><h3>مصالح و تجهیزات</h3><p>به‌روزرسانی سریع قیمت و خروجی برای فروش یا استعلام.</p></article></div></div></section>
        <section className="section"><div className="container narrow-copy"><div className="eyebrow">FAQ</div><h2>قبل از سفارش</h2><div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
        <section className="cta-section"><div className="container cta-card"><div><div className="eyebrow light">START WITH ONE FILE</div><h2>فایل نمونه را آماده دارید؟</h2><p>ثبت درخواست اولیه کمتر از چند دقیقه زمان می‌برد.</p></div><Link className="btn btn-accent btn-xl" href="/request?service=price-list">ارسال درخواست <span>↗</span></Link></div></section>
      </main>
    </Shell>
  )
}
