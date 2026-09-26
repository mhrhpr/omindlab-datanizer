import { NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validation'
import { prisma } from '@/lib/prisma'
import { referenceCode } from '@/lib/reference'
import { generateDiagnosis } from '@/lib/diagnosis'
import { track } from '@/lib/analytics'
import { sendEmail } from '@/lib/email'
import { notifyAdmins } from '@/lib/notifications'

export async function POST(req: Request) {
  try {
    const input = leadSchema.parse(await req.json())
    const code = referenceCode()
    const source = input.source ?? 'direct'
    const lead = await prisma.lead.create({ data: {
      referenceCode: code, name: input.name, email: input.email, phone: input.phone, companyName: input.companyName, companySize: input.companySize ?? '',
      industry: input.industry, problemDescription: input.problemDescription, currentWorkflow: input.currentWorkflow, desiredOutcome: input.desiredOutcome,
      painLevel: input.painLevel, frequency: input.frequency, budgetRange: input.budgetRange, contactMethod: input.contactMethod, status: 'New', source,
      utmSource: input.utmSource, utmMedium: input.utmMedium, utmCampaign: input.utmCampaign, utmContent: input.utmContent, utmTerm: input.utmTerm,
      referrer: input.referrer, landingPage: input.landingPage, events: { create: { eventType: 'Submitted', metadata: { dataSources: input.dataSources } } },
    }})
    const diagnosis = await generateDiagnosis({ ...input })
    await prisma.leadDiagnosis.create({ data: {
      leadId: lead.id, problemCategory: diagnosis.problem_category, problemSummary: diagnosis.problem_summary, solutionTypes: diagnosis.likely_solution_types,
      estimatedComplexity: diagnosis.estimated_complexity, urgency: diagnosis.urgency, likelyServices: diagnosis.likely_services, missingInformation: diagnosis.missing_information,
      suggestedQuestions: diagnosis.suggested_questions, leadQuality: diagnosis.lead_quality, recommendedNextAction: diagnosis.recommended_next_action, rawAiOutput: diagnosis,
    }})
    await track('lead_created', { leadId: lead.id, source })
    await notifyAdmins({ referenceCode: code, name: input.name, email: input.email, phone: input.phone, companyName: input.companyName, industry: input.industry, contactMethod: input.contactMethod, problemDescription: input.problemDescription, landingPage: input.landingPage }).catch(error => console.error('admin notification hub failed', error))
    if (input.email) {
      try { await sendEmail({ to: input.email, subject: 'DataNizer — request ' + code + ' received', html: '<div dir="rtl"><p>درخواست شما ثبت شد.</p><p>کد پیگیری: <strong>' + code + '</strong></p></div>' }) }
      catch (error) { console.error('lead confirmation email failed', error) }
    }
    return NextResponse.json({ referenceCode: code })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error?.issues?.[0]?.message || 'Could not submit request' }, { status: 400 })
  }
}
