import Link from 'next/link'
import { Shell } from '@/components/Shell'

const services = [
  {n:'01', title:'گزارش‌گیری خودکار', desc:'گزارش‌های هفتگی و ماهانه را از کار دستی خارج می‌کنیم و به یک جریان قابل اتکا تبدیل می‌کنیم.'},
  {n:'02', title:'داشبورد مدیریتی', desc:'KPIهای مهم کسب‌وکار را در یک نمای شفاف و تصمیم‌محور جمع می‌کنیم.'},
  {n:'03', title:'اتوماسیون Excel', desc:'فایل‌های تکراری، محاسبات و خروجی‌هایی که هر ماه دوباره ساخته می‌شوند را خودکار می‌کنیم.'},
  {n:'04', title:'تجمیع داده', desc:'داده‌های پراکنده از Excel، CSV، Sheets و سیستم‌های مختلف را کنار هم می‌آوریم.'},
  {n:'05', title:'سیستم‌های KPI', desc:'شاخص‌ها را از حالت گزارش تزئینی به ابزار واقعی برای مدیریت تبدیل می‌کنیم.'},
  {n:'06', title:'اتوماسیون کسب‌وکار', desc:'فرآیندهای تکراری را ساده می‌کنیم؛ از Workflowهای کوچک تا سیستم‌های داده و AI.'},
]

const work = [
  {tag:'PRODUCT', title:'DataNizer', desc:'گزارش‌گیری و اتوماسیون داده به‌عنوان خدمت.', href:'/datanizer'},
  {tag:'CASE STUDY', title:'HR Intelligence', desc:'از داده نیروی انسانی تا داشبورد و تصمیم مدیریتی.'},
  {tag:'AUTOMATION', title:'ClinicFlow', desc:'یک Workflow عملیاتی کوچک که از یک نیاز واقعی متولد شد.'},
  {tag:'R&D', title:'Mobility Intelligence', desc:'داده، API و تحلیل برای حمل‌ونقل و لجستیک.'},
]

export default function Home(){
  return <Shell>
    <main>
      <section className="hero">
        <div className="container hero-wrap">
          <div className="hero-kicker"><span className="signal-dot"/> OMINDLAB / FOUNDED BY OMID</div>
          <div className="hero-grid">
            <div>
              <h1>من با <em>داده</em> شروع می‌کنم؛<br/>با <em>سیستم</em> تمامش می‌کنم.</h1>
              <p className="hero-copy">OmindLab یک استودیوی مستقل برای ساخت راه‌حل‌های Data، Automation و AI است. مسئله‌ی کسب‌وکار را می‌گیریم و آن را به گزارش، داشبورد، workflow یا محصول قابل استفاده تبدیل می‌کنیم.</p>
              <div className="actions"><Link className="btn btn-dark" href="/datanizer">DataNizer را ببینید <span>↗</span></Link><Link className="btn btn-light" href="/request">مشکل‌تان را تعریف کنید</Link></div>
              <div className="micro-proof"><span>بدون نیاز به دانش فنی</span><span>·</span><span>راه‌حل متناسب با مسئله</span></div>
            </div>
            <div className="hero-panel">
              <div className="panel-top"><span>OMINDLAB / SYSTEM VIEW</span><span>01—04</span></div>
              <div className="system-flow">
                <div className="system-node muted-node"><small>INPUT</small><strong>Messy data</strong><span>Excel · CSV · ERP · Sheets</span></div>
                <div className="connector"><i/></div>
                <div className="system-node active-node"><small>PROCESS</small><strong>DataNizer</strong><span>Audit · Model · Automate</span></div>
                <div className="connector"><i/></div>
                <div className="system-node result-node"><small>OUTCOME</small><strong>Useful decisions</strong><span>Report · KPI · Workflow</span></div>
              </div>
              <div className="panel-footer"><span>Human-led. System-built.</span><span>↳</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-rule" id="story">
        <div className="container two-col">
          <div className="section-label">01 / THE IDEA</div>
          <div>
            <h2>از «تحلیل داده» به «ساختن سیستم».</h2>
            <p className="lead">مسیر OmindLab از گزارش‌گیری و BI شروع شد؛ بعد به automation، API، data systems و در نهایت AI رسید. امروز تمرکز روی یک سؤال ساده است: <strong>کدام بخش از کار کسب‌وکار را می‌توان بهتر، سریع‌تر و قابل‌اعتمادتر کرد؟</strong></p>
            <div className="story-line"><span>Data Analyst</span><span>→</span><span>BI</span><span>→</span><span>Automation</span><span>→</span><span>AI Systems</span></div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="split-heading"><div><div className="section-label light">02 / NOW BUILDING</div><h2>یک مسئله واقعی<br/>بهتر از یک SaaS بزرگ است.</h2></div><p>به‌جای ساختن ابزار برای همه‌چیز، با یک مسئله شروع می‌کنیم، راه‌حل را می‌سازیم و از پروژه‌های واقعی یاد می‌گیریم.</p></div>
          <div className="datanizer-feature">
            <div><div className="pill">PRODUCT / SERVICE</div><h3>DataNizer</h3><p>گزارش‌های دستی، داده‌های پراکنده و workflowهای تکراری را به سیستم‌های ساده و قابل اتکا تبدیل می‌کند.</p><Link className="text-link" href="/datanizer">Explore DataNizer <span>↗</span></Link></div>
            <div className="mini-journey"><div><b>01</b><span>Problem</span></div><div><b>02</b><span>Audit</span></div><div><b>03</b><span>Build</span></div><div><b>04</b><span>Outcome</span></div></div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head"><div><div className="section-label">03 / SERVICES</div><h2>خدمت‌هایی که از مسئله شروع می‌شوند.</h2></div><p>مشتری تکنولوژی نمی‌خرد؛ زمان، دقت و visibility می‌خرد.</p></div>
          <div className="service-grid">{services.map(s=><article className="service-card" key={s.n}><div className="service-n">{s.n}</div><h3>{s.title}</h3><p>{s.desc}</p><span className="service-arrow">↗</span></article>)}</div>
        </div>
      </section>

      <section className="section section-rule" id="work">
        <div className="container">
          <div className="section-head"><div><div className="section-label">04 / SELECTED WORK</div><h2>کارهایی که مسیر را نشان می‌دهند.</h2></div><p>هر پروژه یک آزمایش است برای نزدیک‌تر شدن به سیستم‌های بهتر.</p></div>
          <div className="work-list">{work.map((w,i)=><Link className="work-row" href={w.href || '#'} key={w.title}><span className="work-index">0{i+1}</span><span className="work-main"><small>{w.tag}</small><strong>{w.title}</strong></span><span className="work-desc">{w.desc}</span><span className="work-arrow">↗</span></Link>)}</div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-box"><div><div className="section-label">05 / START HERE</div><h2>یک مشکل گزارش‌گیری، داده یا فرآیند دارید؟</h2><p>لازم نیست راه‌حل را بدانید. مسئله را توضیح دهید؛ از آنجا شروع می‌کنیم.</p></div><Link className="btn btn-dark btn-large" href="/request">مشکل‌تان را تعریف کنید <span>↗</span></Link></div>
      </section>
    </main>
  </Shell>
}
