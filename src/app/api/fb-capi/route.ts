import { NextRequest, NextResponse } from 'next/server';

const FALLBACK_PIXEL_ID = '1881006839146788';

const PIXEL_ID = process.env.FB_PIXEL_ID ?? process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? FALLBACK_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

export async function POST(req: NextRequest) {
  if (!ACCESS_TOKEN) {
    return NextResponse.json(
      { error: 'FB_ACCESS_TOKEN non configuré.' },
      { status: 500 },
    );
  }

  try {
    const body = await req.json();
    const payload = {
      data: [
        {
          event_name: body?.event_name,
          event_time: body?.event_time ?? Math.floor(Date.now() / 1000),
          event_id: body?.event_id,
          action_source: body?.action_source ?? 'website',
          event_source_url: body?.event_source_url,
          user_data: body?.user_data ?? {},
          custom_data: body?.custom_data ?? {},
        },
      ],
    };

    const fbResponse = await fetch(`https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const responseBody = await fbResponse.json();

    if (!fbResponse.ok) {
      console.error('[fb-capi] Facebook error', responseBody);
      return NextResponse.json(responseBody, { status: 400 });
    }

    return NextResponse.json(responseBody, { status: 200 });
  } catch (error) {
    console.error('[fb-capi] Unexpected error', error);
    return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 });
  }
}


