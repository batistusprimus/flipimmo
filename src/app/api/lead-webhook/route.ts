import { NextRequest, NextResponse } from 'next/server'

const DEFAULT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/7ivqWaWGJdNIRJkNzJbd/webhook-trigger/dfc2a08a-c16c-4d82-8f2a-29d822ce07aa'
const EXPERT_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/7ivqWaWGJdNIRJkNzJbd/webhook-trigger/d4ba13c7-754d-471e-a150-92f501a51b43'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const formName = (body?.form_name ?? '') as string
    const targetUrl = formName === 'Parler à un expert - QualifForm' ? EXPERT_WEBHOOK_URL : DEFAULT_WEBHOOK_URL

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


