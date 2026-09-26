import Link from 'next/link'

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Link href="/" className="brand" aria-label="DataNizer">
            <span className="brand-mark">D</span>
            <span><strong>DataNizer</strong><small>قیمت‌نامه × داده × اتوماسیون</small></span>
          </Link>
          <nav className="navlinks" aria-label="Main navigation">
            <Link href="/price-list">قیمت‌نامه</Link>
            <Link href="/excel-pricing">قیمت‌گذاری Excel</Link>
            <Link href="/update-price-list">آپدیت لیست قیمت</Link>
            <Link href="/#faq">سؤالات</Link>
          </nav>
          <Link className="nav-cta" href="/request?service=price-list">ارسال فایل <span>↗</span></Link>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="container footer-grid">
          <div><div className="footer-brand">DataNizer</div><p>خدمات سریع قیمت‌نامه، قیمت‌گذاری و اتوماسیون فایل برای کسب‌وکارهای ایرانی.</p></div>
          <div className="footer-links">
            <Link href="/price-list">قیمت‌نامه</Link>
            <Link href="/excel-pricing">قیمت‌گذاری Excel</Link>
            <Link href="/update-price-list">به‌روزرسانی لیست قیمت</Link>
            <Link href="/request?service=price-list">ثبت درخواست</Link>
          </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} DataNizer</span><span>Built for fast business operations.</span></div>
      </footer>
    </>
  )
}
