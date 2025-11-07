import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/7ivqWaWGJdNIRJkNzJbd/webhook-trigger/dfc2a08a-c16c-4d82-8f2a-29d822ce07aa'
const EXPERT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/7ivqWaWGJdNIRJkNzJbd/webhook-trigger/d4ba13c7-754d-471e-a150-92f501a51b43'
const CONTACT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/7ivqWaWGJdNIRJkNzJbd/webhook-trigger/aad813cd-df0e-437f-a053-d254729948a5'
const FORMATION_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/7ivqWaWGJdNIRJkNzJbd/webhook-trigger/bc270629-481c-4c18-96ce-07c627eebb4c'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const formName = (body?.form_name ?? '') as string
    let targetUrl = DEFAULT_WEBHOOK_URL
    if (formName === 'Parler à un expert - QualifForm') targetUrl = EXPERT_WEBHOOK_URL
    if (formName === 'ContactForm') targetUrl = CONTACT_WEBHOOK_URL
    if (formName === 'SimpleDownloadForm') targetUrl = FORMATION_WEBHOOK_URL
    // Leadbot/LeadCapture (landing) payload routing (no form_name)
    // Route vers FORMATION si le slug/id correspond à notre bot FlipImmo
    if (!formName) {
      const slug = (body?.slug_name ?? '') as string
      const leadBotId = body?.lead_bot?.id as number | undefined
      if (slug === 'flipimmo' || leadBotId === 23379) {
        targetUrl = FORMATION_WEBHOOK_URL
      }
    }

    // Log minimal pour debug (sans PII détaillée)
    console.log('[lead-webhook] incoming', {
      formName,
      slug: body?.slug_name,
      leadBotId: body?.lead_bot?.id,
      targetUrl,
    })

    const resp = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const text = await resp.text()
    return NextResponse.json({ status: resp.status, ok: resp.ok, body: text })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'unknown error' }, { status: 500 })
  }
}


