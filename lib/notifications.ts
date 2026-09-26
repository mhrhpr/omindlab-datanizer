import { sendEmail } from '@/lib/email'

export type LeadNotification = {
  referenceCode: string
  name: string
  email?: string
  phone?: string
  companyName: string
  industry?: string
  contactMethod?: string
  problemDescription: string
  landingPage?: string
}

function buildText(lead: LeadNotification) {
  return [
    '🚨 درخواست جدید DataNizer',
    'کد: ' + lead.referenceCode,
    'نام: ' + lead.name,
    'کسب‌وکار: ' + lead.companyName,
    lead.industry ? 'صنعت: ' + lead.industry : '',
    lead.phone ? 'تلفن: ' + lead.phone : '',
    lead.email ? 'ایمیل: ' + lead.email : '',
    lead.contactMethod ? 'کانال ترجیحی: ' + lead.contactMethod : '',
    '',
    'درخواست:',
    lead.problemDescription,
    '',
    lead.landingPage ? 'صفحه: ' + lead.landingPage : '',
  ].filter(Boolean).join('\\n')
}

async function postJson(url: string, body: unknown) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store',
  })
  if (!response.ok) throw new Error('Notification failed: ' + response.status)
  return response.json().catch(() => ({}))
}

async function sendTelegram(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) return { channel: 'telegram', skipped: true }
  await postJson('https://api.telegram.org/bot' + token + '/sendMessage', { chat_id: chatId, text })
  return { channel: 'telegram', skipped: false }
}

async function sendBale(text: string) {
  const token = process.env.BALE_BOT_TOKEN
  const chatId = process.env.BALE_CHAT_ID
  if (!token || !chatId) return { channel: 'bale', skipped: true }
  await postJson('https://tapi.bale.ai/bot' + token + '/sendMessage', { chat_id: chatId, text })
  return { channel: 'bale', skipped: false }
}

async function sendRubika(text: string) {
  const token = process.env.RUBIKA_BOT_TOKEN
  const chatId = process.env.RUBIKA_CHAT_ID
  if (!token || !chatId) return { channel: 'rubika', skipped: true }
  const base = (process.env.RUBIKA_API_BASE_URL || 'https://botapi.rubika.ir/v1').replace(/\\/$/, '')
  await postJson(base + '/' + token + '/sendMessage', { chat_id: chatId, text })
  return { channel: 'rubika', skipped: false }
}

async function sendWhatsApp(text: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
  const recipient = process.env.WHATSAPP_RECIPIENT_PHONE
  if (!token || !phoneNumberId || !recipient) return { channel: 'whatsapp', skipped: true }

  const version = process.env.WHATSAPP_API_VERSION || 'v23.0'
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME
  const language = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'fa'

  const body = templateName
    ? {
        messaging_product: 'whatsapp',
        to: recipient,
        type: 'template',
        template: { name: templateName, language: { code: language } },
      }
    : {
        messaging_product: 'whatsapp',
        to: recipient,
        type: 'text',
        text: { preview_url: false, body: text },
      }

  await postJson('https://graph.facebook.com/' + version + '/' + phoneNumberId + '/messages', body)
  return { channel: 'whatsapp', skipped: false, mode: templateName ? 'template' : 'text' }
}

async function sendAdminEmail(text: string, lead: LeadNotification) {
  const to = process.env.ADMIN_NOTIFICATION_EMAIL
  if (!to) return { channel: 'email', skipped: true }
  const html = text.replace(/\\n/g, '<br/>')
  await sendEmail({
    to,
    subject: 'DataNizer | درخواست جدید ' + lead.referenceCode,
    html: '<div dir="rtl" style="font-family:Arial,sans-serif">' + html + '</div>',
  })
  return { channel: 'email', skipped: false }
}

export async function notifyAdmins(lead: LeadNotification) {
  const text = buildText(lead)
  const results = await Promise.allSettled([
    sendAdminEmail(text, lead),
    sendTelegram(text),
    sendBale(text),
    sendRubika(text),
    sendWhatsApp(text),
  ])

  return results.map((result) =>
    result.status === 'fulfilled'
      ? result.value
      : { channel: 'unknown', skipped: false, error: result.reason instanceof Error ? result.reason.message : String(result.reason) },
  )
}
