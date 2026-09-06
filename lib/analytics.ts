export type AnalyticsEvent='cta_click'|'request_start'|'request_complete'|'expert_start'|'expert_complete'|'lead_created'|'expert_created'
export async function track(event:AnalyticsEvent, properties:Record<string,unknown>={}) { console.log(JSON.stringify({type:'analytics',event,properties,at:new Date().toISOString()})) }
