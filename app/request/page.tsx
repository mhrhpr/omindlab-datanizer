'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shell } from '@/components/Shell'

const services = ['قیمت‌نامه و قیمت‌گذاری', 'به‌روزرسانی لیست قیمت', 'اصلاح و اتوماسیون Excel', 'گزارش سود و فروش']
const fileTypes = ['Excel', 'CSV', 'خروجی حسابداری', 'Google Sheets', 'مطمئن نیستم']

export default function Request() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState('')
  const [f, setF] = useState<any>({ service: 'قیمت‌نامه و قیمت‌گذاری', dataSources: ['Excel'], consent: false })

  const set = (key: string, value: any) => setF((current: any) => ({ ...current, [key]: value }))
  const next = () => setStep((value) => Math.min(1, value + 1))
  const back = () => setStep((value) => Math.max(0, value - 1))

  async function submit() {
    setBusy(true)
    setMsg('')
    try {
      const q = new URLSearchParams(location.search)
      const problem = [
        'سرویس موردنظر: ' + f.service,
        'فرمت/منبع فایل: ' + (f.dataSources || []).join(', '),
        'شرح سفارش: ' + (f.problemDescription || ''),
      ].join('\\n')

      const payload = {
        name: f.name,
        email: f.email,
        phone: f.phone || '',
        companyName: f.companyName,
        companySize: f.companySize || 'SME',
        industry: f.industry || '',
        problemDescription: problem,
        currentWorkflow: f.currentWorkflow || '',
        desiredOutcome: f.desiredOutcome || '',
        dataSources: f.dataSources || [],
        frequency: f.frequency || '',
        budgetRange: f.budgetRange || '',
        contactMethod: f.contactMethod || 'Phone',
        consent: !!f.consent,
        source: q.get('utm_source') || 'website-price-list',
        utmSource: q.get('utm_source') || '',
        utmMedium: q.get('utm_medium') || '',
        utmCampaign: q.get('utm_campaign') || '',
        utmContent: q.get('utm_content') || '',
        utmTerm: q.get('utm_term') || '',
        referrer: document.referrer,
        landingPage: location.href,
      }
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'ارسال درخواست ناموفق بود.')
      router.push('/success/' + result.referenceCode)
    } catch (error: any) {
      setMsg(error?.message || 'خطایی رخ داد. دوباره تلاش کنید.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <Shell>
      <main className="form-shell">
        <div className="container request-layout">
          <div className="request-copy">
            <div className="eyebrow">START A REQUEST</div>
            <h1>فایل و نیازت را بگو؛ باقی کار با ما.</h1>
            <p>این فرم عمداً کوتاه شده است. بعد از ثبت، برای دریافت فایل نمونه و اعلام scope دقیق با شما هماهنگ می‌کنیم.</p>
            <div className="request-points"><span>✓ مناسب Excel و CSV</span><span>✓ بدون نیاز به نصب نرم‌افزار</span><span>✓ قیمت بعد از بررسی فایل مشخص می‌شود</span></div>
          </div>

          <div className="form-card">
            <div className="progress"><i className={step >= 0 ? 'active' : ''} /><i className={step >= 1 ? 'active' : ''} /></div>

            {step === 0 && <section className="step">
              <h2>اطلاعات تماس</h2>
              <p className="step-intro">برای پیگیری سفارش همین اطلاعات کافی است.</p>
              <div className="two">
                <Field label="نام و نام خانوادگی" value={f.name || ''} onChange={(v: string) => set('name', v)} required />
                <Field label="ایمیل" type="email" value={f.email || ''} onChange={(v: string) => set('email', v)} required />
                <Field label="نام کسب‌وکار" value={f.companyName || ''} onChange={(v: string) => set('companyName', v)} required />
                <Field label="شماره تماس" value={f.phone || ''} onChange={(v: string) => set('phone', v)} />
              </div>
              <Field label="حوزه فعالیت"><input className="input" value={f.industry || ''} onChange={(e) => set('industry', e.target.value)} placeholder="مثلاً قطعات خودرو، ابزار، مصالح..." /></Field>
            </section>}

            {step === 1 && <section className="step">
              <h2>سفارش شما</h2>
              <p className="step-intro">نیازی نیست اصطلاح فنی بدانید؛ با زبان خودتان توضیح دهید.</p>
              <Field label="سرویس موردنظر"><div className="choices">{services.map((item) => <Choice key={item} name="service" val={item} checked={f.service === item} on={(v: string) => set('service', v)} />)}</div></Field>
              <Field label="فایل شما از کجا می‌آید؟"><div className="choices">{fileTypes.map((item) => <Choice key={item} name="source" val={item} checked={(f.dataSources || []).includes(item)} multi on={(v: string) => set('dataSources', (f.dataSources || []).includes(v) ? f.dataSources.filter((x: string) => x !== v) : [...(f.dataSources || []), v])} />)}</div></Field>
              <Field label="شرح کوتاه سفارش" required><textarea className="textarea" value={f.problemDescription || ''} onChange={(e) => set('problemDescription', e.target.value)} placeholder="مثلاً ۸۰۰ قلم کالا دارم و هر هفته فایل قیمت تأمین‌کننده عوض می‌شود..." /></Field>
              <Field label="تعداد تقریبی اقلام"><div className="choices">{['تا 100', '100–500', '500–2000', '2000+', 'مطمئن نیستم'].map((item) => <Choice key={item} name="size" val={item} checked={f.companySize === item} on={(v: string) => set('companySize', v)} />)}</div></Field>
              <label className="check"><input type="checkbox" checked={!!f.consent} onChange={(e) => set('consent', e.target.checked)} /><span>با ذخیره اطلاعات این درخواست و تماس برای هماهنگی سفارش موافقم.</span></label>
              {msg && <div className="notice">{msg}</div>}
            </section>}

            <div className="form-actions">
              {step > 0 ? <button className="btn btn-secondary" onClick={back}>قبلی</button> : <span />}
              {step === 0 ? <button className="btn btn-primary" onClick={next}>ادامه</button> : <button className="btn btn-primary" onClick={submit} disabled={busy}>{busy ? 'در حال ارسال...' : 'ثبت درخواست'}</button>}
            </div>
          </div>
        </div>
      </main>
    </Shell>
  )
}

function Field({ label, children, value, onChange, type = 'text', required = false }: any) {
  return <div className="field"><label>{label}{required ? ' *' : ''}</label>{children ?? <input className="input" type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} />}</div>
}

function Choice({ name, val, checked, on, multi = false }: any) {
  const id = name + '-' + val.replace(/\\s+/g, '-').replace(/[^\\u0600-\\u06FF\\w-]/g, '')
  return <div className="choice"><input id={id} type={multi ? 'checkbox' : 'radio'} name={name} checked={checked} onChange={() => on(val)} /><label htmlFor={id}>{val}</label></div>
}
