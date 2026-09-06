import { NextRequest, NextResponse } from 'next/server'
import { runDailySeoAgent } from '@/lib/seo-agent'

export const runtime='nodejs'
export const maxDuration=60

export async function GET(req:NextRequest){
  const secret=process.env.CRON_SECRET
  const auth=req.headers.get('authorization')
  if(secret && auth!==`Bearer ${secret}`) return NextResponse.json({error:'Unauthorized'},{status:401})
  try{return NextResponse.json(await runDailySeoAgent())}catch(error){console.error('SEO agent failed',error);return NextResponse.json({error:'SEO agent failed'},{status:500})}
}
