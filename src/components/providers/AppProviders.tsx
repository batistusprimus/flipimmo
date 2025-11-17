'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { initMixpanel, trackPageView } from '@/lib/analytics/mixpanel';
import { trackPixelPageView } from '@/lib/analytics/pixel';

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString() ?? '';
  const hasTrackedPixel = useRef(false);

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

  return <>{children}</>;
}


