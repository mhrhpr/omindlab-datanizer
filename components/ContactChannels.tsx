'use client'

type Channel={key:string;label:string;href?:string;tone:string}
const channels:Channel[]=[
  {key:'whatsapp',label:'WhatsApp',href:process.env.NEXT_PUBLIC_CONTACT_WHATSAPP,tone:'wa'},
  {key:'telegram',label:'Telegram',href:process.env.NEXT_PUBLIC_CONTACT_TELEGRAM,tone:'tg'},
  {key:'bale',label:'بله',href:process.env.NEXT_PUBLIC_CONTACT_BALE,tone:'bale'},
  {key:'rubika',label:'روبیکا',href:process.env.NEXT_PUBLIC_CONTACT_RUBIKA,tone:'rubika'},
  {key:'instagram',label:'Instagram',href:process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM,tone:'ig'},
  {key:'linkedin',label:'LinkedIn',href:process.env.NEXT_PUBLIC_CONTACT_LINKEDIN,tone:'in'},
  {key:'email',label:'ایمیل',href:process.env.NEXT_PUBLIC_CONTACT_EMAIL?'mailto:'+process.env.NEXT_PUBLIC_CONTACT_EMAIL:undefined,tone:'email'},
]
export function ContactChannels({compact=false}:{compact?:boolean}){
  const visible=channels.filter(item=>item.href); if(!visible.length)return null
  return <div className={compact?'contact-channels compact':'contact-channels'}><div className="contact-title">{compact?'ارسال مستقیم':'هرجا راحت‌تری بفرست'}</div><div className="contact-grid">{visible.map(channel=><a key={channel.key} className={'contact-chip '+channel.tone} href={channel.href} target={channel.key==='email'?undefined:'_blank'} rel={channel.key==='email'?undefined:'noopener noreferrer'}><span className="contact-dot" aria-hidden="true"/>{channel.label}</a>)}</div></div>
}
