import Link from 'next/link'
import { Shell } from '@/components/Shell'

const deliverables = [
  { n: '01', title: 'پاک‌سازی و یکسان‌سازی', text: 'نام کالا، کد، واحد، قیمت و ردیف‌های تکراری را مرتب می‌کنیم.' },
  { n: '02', title: 'محاسبه قیمت فروش', text: 'قیمت خرید و منطق سود شما را به قیمت فروش قابل استفاده تبدیل می‌کنیم.' },
  { n: '03', title: 'قیمت‌نامه آماده', text: 'خروجی Excel و PDF آماده استفاده، چاپ یا ارسال برای مشتری تحویل می‌گیرید.' },
  { n: '04', title: 'آپدیت‌های بعدی', text: 'برای فایل‌های تکراری، به‌روزرسانی دوره‌ای را به یک سرویس ساده تبدیل می‌کنیم.' },
]
const industries = ['قطعات خودرو و لوازم یدکی', 'ابزار و تجهیزات صنعتی', 'مصالح و تجهیزات ساختمانی']
const faqs = [
  ['چه فایل‌هایی را می‌توانم بفرستم؟', 'Excel و CSV مناسب‌ترین فرمت‌ها هستند. اگر فایل شما از نرم‌افزار حسابداری یا سیستم دیگری خروجی می‌شود، بعد از بررسی فایل درباره فرمت مناسب به شما می‌گوییم.'],
  ['آیا لازم است Excel بلد باشم؟', 'نه. شما فایل خام و نتیجه‌ای را که می‌خواهید توضیح می‌دهید؛ پردازش و آماده‌سازی خروجی با ماست.'],
  ['قیمت سفارش چطور مشخص می‌شود؟', 'قیمت بر اساس حجم فایل، تعداد اقلام و منطق موردنیاز تعیین می‌شود. قبل از شروع، scope و قیمت برای شما مشخص خواهد شد.'],
  ['چقدر زمان می‌برد؟', 'هدف سرویس تحویل سریع است. زمان دقیق بعد از دیدن حجم و پیچیدگی فایل اعلام می‌شود.'],
  ['آیا فقط یک بار می‌توانم سفارش بدهم؟', 'بله. اما اگر هر هفته یا هر ماه فایل قیمت جدید دارید، همان workflow را می‌توانیم به سرویس تکرارشونده تبدیل کنیم.'],
]

export default function Home() {
  return (
    <Shell>
      <main>
        <section className="sales-hero">
          <div className="container sales-hero-grid">
            <div className="sales-copy">
              <div className="eyebrow">DATANIZER / QUICKOPS</div>
              <h1>فایل قیمتت را بفرست؛<br /><span>قیمت‌نامه آماده فروش</span> تحویل بگیر.</h1>
              <p className="hero-sub">فایل قیمت تأمین‌کننده، Excel یا CSV شما را تمیز، یکسان و قابل استفاده می‌کنیم؛ قیمت فروش و حاشیه سود را هم طبق منطق شما آماده می‌کنیم.</p>
              <div className="hero-actions">
                <Link className="btn btn-primary btn-xl" href="/request?service=price-list">فایل و درخواست را ارسال کن <span>↗</span></Link>
                <Link className="btn btn-ghost" href="#how">نحوه کار</Link>
              </div>
              <div className="trust-row"><span>بدون نصب نرم‌افزار</span><span>•</span><span>Excel / CSV</span><span>•</span><span>شروع با یک فایل</span></div>
            </div>
            <div className="price-card" aria-label="نمونه خروجی قیمت‌نامه">
              <div className="price-card-top"><span>PRICE LIST / LIVE</span><span>01</span></div>
              <div className="price-card-title">قیمت‌نامه فروش</div>
              <div className="price-table">
                <div className="price-row header"><span>کالا</span><span>خرید</span><span>فروش</span></div>
                <div className="price-row"><span>فیلتر روغن</span><strong>۸۹۰</strong><b>۱,۰۹۰</b></div>
                <div className="price-row"><span>لنت ترمز</span><strong>۱,۸۰۰</strong><b>۲,۲۹۰</b></div>
                <div className="price-row"><span>شمع موتور</span><strong>۶۲۰</strong><b>۷۹۰</b></div>
                <div className="price-row"><span>تسمه تایم</span><strong>۲,۹۰۰</strong><b>۳,۵۹۰</b></div>
              </div>
              <div className="price-note">خروجی نهایی: Excel + PDF / قیمت خرید + قیمت فروش + حاشیه سود</div>
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container proof-grid">
            <div><strong>یک فایل</strong><span>برای شروع کافی است</span></div>
            <div><strong>خروجی آماده</strong><span>برای فروش، چاپ یا ارسال</span></div>
            <div><strong>قابل تکرار</strong><span>برای آپدیت‌های بعدی</span></div>
            <div><strong>بدون ERP</strong><span>بدون تغییر نرم‌افزار فعلی</span></div>
          </div>
        </section>

        <section className="section" id="deliver">
          <div className="container">
            <div className="section-intro"><div className="eyebrow">WHAT YOU GET</div><h2>از فایل خام تا قیمت‌نامه قابل استفاده.</h2><p>تمرکز ما روی یک خروجی واضح است؛ نه آموزش نرم‌افزار و نه جلسه‌های طولانی.</p></div>
            <div className="deliver-grid">{deliverables.map((item) => <article className="deliver-card" key={item.n}><span className="card-number">{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section dark-section" id="how">
          <div className="container">
            <div className="dark-heading">
              <div><div className="eyebrow light">HOW IT WORKS</div><h2>سه قدم، نه یک پروژه بزرگ.</h2></div>
              <p>کار را با همان فایل‌هایی که الان دارید شروع می‌کنیم.</p>
            </div>
            <div className="steps-grid">
              <article><span>01</span><h3>فایل را بفرست</h3><p>Excel، CSV یا نمونه فایل فعلی‌تان را ارسال کنید و بگویید خروجی را برای چه کاری می‌خواهید.</p></article>
              <article><span>02</span><h3>خروجی را تأیید کن</h3><p>فرمت و منطق قیمت‌گذاری را مشخص می‌کنیم تا خروجی دقیقاً با کار شما هماهنگ باشد.</p></article>
              <article><span>03</span><h3>تحویل بگیر</h3><p>قیمت‌نامه آماده استفاده را تحویل می‌گیرید و در سفارش‌های بعدی workflow سریع‌تر می‌شود.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="for-whom">
          <div className="container split-section">
            <div><div className="eyebrow">BEST FIT</div><h2>برای کسب‌وکارهایی که قیمتشان مدام عوض می‌شود.</h2></div>
            <div><p className="lead">بیشترین ارزش زمانی ایجاد می‌شود که کالاهای زیاد، چند تأمین‌کننده یا به‌روزرسانی‌های مکرر داشته باشید.</p><div className="industry-list">{industries.map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></div>
          </div>
        </section>

        <section className="section section-light" id="faq">
          <div className="container faq-wrap">
            <div><div className="eyebrow">FAQ</div><h2>سؤال‌های قبل از سفارش.</h2></div>
            <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-card">
            <div><div className="eyebrow light">START WITH ONE FILE</div><h2>فایل را بفرست؛ از همان نمونه شروع می‌کنیم.</h2><p>لازم نیست از قبل بدانید چه فرمول یا چه نرم‌افزاری لازم است.</p></div>
            <Link className="btn btn-accent btn-xl" href="/request?service=price-list">ثبت درخواست <span>↗</span></Link>
          </div>
        </section>

        <section className="seo-copy">
          <div className="container">
            <h2>خدمات ساخت و به‌روزرسانی قیمت‌نامه با Excel</h2>
            <p>اگر قیمت‌های خرید شما از چند فایل مختلف می‌آیند یا هر بار قبل از فروش باید قیمت‌ها را دستی اصلاح کنید، DataNizer می‌تواند این کار را به یک خروجی استاندارد تبدیل کند. خدمات شامل پاک‌سازی فایل، تطبیق اقلام، محاسبه قیمت فروش و آماده‌سازی قیمت‌نامه Excel یا PDF است. برای سفارش‌های تکرارشونده، ساختار فایل شما به‌صورت ثابت نگه داشته می‌شود تا به‌روزرسانی‌های بعدی سریع‌تر انجام شوند.</p>
            <p>این سرویس برای فروشگاه‌ها و شرکت‌های دارای کالای متنوع، پخش‌کنندگان، فروشندگان قطعات خودرو، ابزار و تجهیزات صنعتی و مصالح کاربرد دارد. هدف، حذف کار دستی و رساندن شما از «فایل خام تأمین‌کننده» به «قیمت‌نامه قابل استفاده» است.</p>
          </div>
        </section>
      </main>
    </Shell>
  )
}
