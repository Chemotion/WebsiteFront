'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
      const restoreAuto = () => {
        window.history.scrollRestoration = 'auto';
      };
      window.addEventListener('beforeunload', restoreAuto);
      return () => window.removeEventListener('beforeunload', restoreAuto);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    if (!window.location.hash) {
      root.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      root.style.scrollBehavior = prev;
    }
  }, [pathname]);

  return null;
}
