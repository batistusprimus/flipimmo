'use client';

const DEFAULT_LEADPROSPER_ENDPOINT = 'https://api.leadprosper.io/direct_post';

export type LeadProsperPayload = Record<string, unknown>;

type LeadProsperConfig = {
  campaignId: string;
  supplierId: string;
  key: string;
  action?: string;
};

type SendToLeadProsperOptions = {
  endpoint?: string;
  headers?: Record<string, string>;
  subId1?: string;
  subId2?: string;
  configOverride?: Partial<LeadProsperConfig>;
};

function resolveConfig(overrides?: Partial<LeadProsperConfig>): LeadProsperConfig | null {
  const campaignId =
    overrides?.campaignId ?? process.env.NEXT_PUBLIC_LEADPROSPER_CAMPAIGN_ID ?? '31136';
  const supplierId =
    overrides?.supplierId ?? process.env.NEXT_PUBLIC_LEADPROSPER_SUPPLIER_ID ?? '96866';
  const key = overrides?.key ?? process.env.NEXT_PUBLIC_LEADPROSPER_KEY ?? 'rlvmfzrmxbl3w6';
  const action =
    overrides?.action ?? process.env.NEXT_PUBLIC_LEADPROSPER_ACTION ?? undefined;

  if (!campaignId || !supplierId || !key) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[leadprosper] Configuration manquante. Submission ignorée.');
    }
    return null;
  }

  return { campaignId, supplierId, key, action };
}

export async function sendToLeadProsper(
  payload: LeadProsperPayload,
  options: SendToLeadProsperOptions = {},
): Promise<Response | undefined> {
  const config = resolveConfig(options.configOverride);
  if (!config) {
    return undefined;
  }

  const body: Record<string, unknown> = {
    lp_campaign_id: config.campaignId,
    lp_supplier_id: config.supplierId,
    lp_key: config.key,
  };

  if (config.action) {
    body.lp_action = config.action;
  }

  if (options.subId1) {
    body.lp_subid1 = options.subId1;
  }

  if (options.subId2) {
    body.lp_subid2 = options.subId2;
  }

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined) {
      body[key] = value;
    }
  });

  const response = await fetch(options.endpoint ?? DEFAULT_LEADPROSPER_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(body),
  });

  return response;
}



