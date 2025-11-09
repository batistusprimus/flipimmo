'use client';

import { ReactNode, useEffect, useMemo, useRef } from 'react';
import { GrowthBookProvider } from '@growthbook/growthbook-react';
import { usePathname, useSearchParams } from 'next/navigation';

import { initMixpanel, trackPageView } from '@/lib/analytics/mixpanel';
import { trackPixelPageView } from '@/lib/analytics/pixel';
import { getGrowthBook } from '@/lib/analytics/growthbook';

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const growthbook = useMemo(() => getGrowthBook(), []);
  const search = searchParams?.toString() ?? '';
  const hasTrackedPixel = useRef(false);

  useEffect(() => {
    if (!growthbook) return;

    const environment = process.env.NODE_ENV === 'production' ? 'production' : 'dev';
    growthbook.setAttributes({
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      path: pathname ?? '/',
      environment,
    });
  }, [growthbook, pathname]);

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    if (!pathname) return;
    const pathWithQuery = search ? `${pathname}?${search}` : pathname;

    trackPageView(pathWithQuery);
    if (hasTrackedPixel.current) {
      trackPixelPageView();
    } else {
      hasTrackedPixel.current = true;
    }
  }, [pathname, search]);

  if (growthbook) {
    return <GrowthBookProvider growthbook={growthbook}>{children}</GrowthBookProvider>;
  }

  return <>{children}</>;
}


