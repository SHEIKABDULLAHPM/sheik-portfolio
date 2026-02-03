'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const main = document.getElementById('main-content');
    if (main) {
      main.focus({ preventScroll: true });
    }

    return undefined;
  }, [pathname]);

  return null;
};

export default ScrollManager;
