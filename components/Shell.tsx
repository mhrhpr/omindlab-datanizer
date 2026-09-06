import Link from 'next/link'

export function Shell({children}:{children:React.ReactNode}){
  return <>
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">O</span>
          <span><strong>OMINDLAB</strong><small>Data × Automation × AI</small></span>
        </Link>
        <nav className="navlinks">
          <Link href="/datanizer">DataNizer</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#story">Story</Link>
          <Link href="/experts/join">Expert network</Link>
        </nav>
        <Link className="nav-cta" href="/request">شروع یک پروژه <span>↗</span></Link>
      </div>
    </header>
    {children}
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div><div className="footer-brand">OMINDLAB</div><p>ساخت سیستم‌های داده، اتوماسیون و AI برای مسئله‌های واقعی کسب‌وکار.</p></div>
          <div className="footer-links">
            <Link href="/datanizer">DataNizer</Link>
            <Link href="/request">درخواست پروژه</Link>
            <Link href="/experts/join">شبکه متخصصان</Link>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} OmindLab</span><span>Built for real business problems.</span></div>
      </div>
    </footer>
  </>
}
