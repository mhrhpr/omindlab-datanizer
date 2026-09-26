import type { Metadata } from 'next'
import Link from 'next/link'
import { ContactChannels } from '@/components/ContactChannels'

export const metadata: Metadata = {
  title: 'درخواست ثبت شد | DataNizer',
  robots: { index: false, follow: false },
}

export default async function Success({ params }: { params: Promise<{ referenceCode: string }> }) {
  const { referenceCode } = await params

  return (
    <main className="success-page">
      <div className="success-card">
        <div className="success-icon" aria-hidden="true">✓</div>
        <div className="eyebrow">REQUEST RECEIVED</div>
        <h1>درخواستت ثبت شد.</h1>
        <p>کد پیگیری شما:</p>
        <strong className="success-ref">{referenceCode}</strong>
        <p className="success-copy">برای ارسال فایل یا توضیح بیشتر، هرکدام از کانال‌های ارتباطی فعال را انتخاب کن. کد پیگیری را هم همراه پیام بفرست.</p>
        <ContactChannels />
        <div className="success-actions">
          <Link className="btn btn-primary" href="/">بازگشت به سایت</Link>
          <Link className="btn btn-secondary" href="/price-list">دیدن خدمت قیمت‌نامه</Link>
        </div>
      </div>
    </main>
  )
}
