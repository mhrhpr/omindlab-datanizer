'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Shell } from '@/components/Shell'
import { ContactChannels } from '@/components/ContactChannels'

const services=['قیمت‌نامه و قیمت‌گذاری','به‌روزرسانی لیست قیمت','اصلاح و اتوماسیون Excel','گزارش سود و فروش']
const fileTypes=['Excel','CSV','خروجی حسابداری','Google Sheets','مطمئن نیستم']
const channels=['تلفن','WhatsApp','Telegram','بله','روبیکا','ایمیل']

export default function Request(){
  const router=useRouter(); const searchParams=useSearchParams()
  const [busy,setBusy]=useState(false); const [msg,setMsg]=useState('')
  const [f,setF]=useState<any>({service:'قیمت‌نامه و قیمت‌گذاری',dataSources:['Excel'],contactMethod:'WhatsApp',consent:false})
  const set=(key:string,value:any)=>setF((c:any)=>({...c,[key]:value}))
  async function submit(){
    setBusy(true); setMsg('')
    try{
      const payload={
        name:f.name,email:f.email||'',phone:f.phone||'',companyName:f.companyName,companySize:f.companySize||'SME',industry:f.industry||'',
        problemDescription:['سرویس: '+f.service,'منبع فایل: '+(f.dataSources||[]).join(', '),'تعداد تقریبی اقلام: '+(f.companySize||'نامشخص'),'',''+(f.problemDescription||'')].join('\\n'),
        dataSources:f.dataSources||[],desiredOutcome:'',contactMethod:f.contactMethod||'',consent:!!f.consent,source:'website-price-list',
        utmSource:searchParams.get('utm_source')||'',utmMedium:searchParams.get('utm_medium')||'',utmCampaign:searchParams.get('utm_campaign')||'',utmContent:searchParams.get('utm_content')||'',utmTerm:searchParams.get('utm_term')||'',referrer:document.referrer,landingPage:location.href
      }
      const response=await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
      const result=await response.json(); if(!response.ok) throw new Error(result.error||'ارسال درخواست ناموفق بود.')
      router.push('/success/'+result.referenceCode)
    }catch(error:any){setMsg(error?.message||'خطایی رخ داد. دوباره تلاش کنید.')}finally{setBusy(false)}
  }
  return <Shell><main className="form-shell"><div className="container request-layout">
    <div className="request-copy"><div className="eyebrow">FAST ORDER</div><h1>فقط همان چیزهایی که برای شروع لازم است.</h1><p>فرم کوتاه است. اگر فایل بزرگ یا توضیح بیشتری داری، بعد از ثبت می‌توانی آن را از WhatsApp، Telegram، بله، روبیکا یا ایمیل بفرستی.</p><div className="request-points"><span>✓ یک فایل برای شروع کافی است</span><span>✓ بدون نصب نرم‌افزار</span><span>✓ مناسب Excel و CSV</span></div><ContactChannels compact/></div>
    <div className="form-card"><div className="form-topline"><span>۱ دقیقه</span><span>یک مرحله</span></div><section className="step"><h2>ثبت درخواست</h2><p className="step-intro">نام، راه تماس و توضیح کوتاه مسئله کافی است.</p>
      <div className="two"><Field label="نام و نام خانوادگی" value={f.name||''} onChange={(v:string)=>set('name',v)} required/><Field label="نام کسب‌وکار" value={f.companyName||''} onChange={(v:string)=>set('companyName',v)} required/><Field label="شماره تماس" value={f.phone||''} onChange={(v:string)=>set('phone',v)}/><Field label="ایمیل" type="email" value={f.email||''} onChange={(v:string)=>set('email',v)}/></div>
      <Field label="حوزه فعالیت"><input className="input" value={f.industry||''} onChange={e=>set('industry',e.target.value)} placeholder="مثلاً قطعات خودرو، ابزار، مصالح..."/></Field>
      <Field label="سرویس موردنظر"><div className="choices">{services.map(item=><Choice key={item} name="service" val={item} checked={f.service===item} on={(v:string)=>set('service',v)}/>)}</div></Field>
      <Field label="فایل شما از کجا می‌آید؟"><div className="choices">{fileTypes.map(item=><Choice key={item} name="source" val={item} checked={(f.dataSources||[]).includes(item)} multi on={(v:string)=>set('dataSources',(f.dataSources||[]).includes(v)?f.dataSources.filter((x:string)=>x!==v):[...(f.dataSources||[]),v])}/>)}</div></Field>
      <Field label="کانال ترجیحی برای پیگیری"><div className="choices">{channels.map(item=><Choice key={item} name="channel" val={item} checked={f.contactMethod===item} on={(v:string)=>set('contactMethod',v)}/>)}</div></Field>
      <Field label="شرح کوتاه سفارش" required><textarea className="textarea" value={f.problemDescription||''} onChange={e=>set('problemDescription',e.target.value)} placeholder="مثلاً ۸۰۰ قلم کالا دارم و هر هفته فایل قیمت تأمین‌کننده عوض می‌شود..."/></Field>
      <Field label="تعداد تقریبی اقلام"><div className="choices">{['تا 100','100–500','500–2000','2000+','مطمئن نیستم'].map(item=><Choice key={item} name="size" val={item} checked={f.companySize===item} on={(v:string)=>set('companySize',v)}/>)}</div></Field>
      <label className="check"><input type="checkbox" checked={!!f.consent} onChange={e=>set('consent',e.target.checked)}/><span>با ذخیره اطلاعات این درخواست و تماس برای هماهنگی سفارش موافقم.</span></label>
      {msg&&<div className="notice">{msg}</div>}
      <div className="form-actions single"><button className="btn btn-primary btn-xl" onClick={submit} disabled={busy}>{busy?'در حال ثبت...':'ثبت درخواست و دریافت کد پیگیری ↗'}</button></div>
    </section></div>
  </div></main></Shell>
}

function Field({label,children,value,onChange,type='text',required=false}:any){return <div className="field"><label>{label}{required?' *':''}</label>{children??<input className="input" type={type} value={value} onChange={e=>onChange(e.target.value)} required={required}/>}</div>}
function Choice({name,val,checked,on,multi=false}:any){const id=name+'-'+val.replace(/\\s+/g,'-').replace(/[^\\u0600-\\u06FF\\w-]/g,'');return <div className="choice"><input id={id} type={multi?'checkbox':'radio'} name={name} checked={checked} onChange={()=>on(val)}/><label htmlFor={id}>{val}</label></div>}
