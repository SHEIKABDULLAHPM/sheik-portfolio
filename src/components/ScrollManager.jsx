import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const location = useLocation();

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
  }, [location.pathname, location.search]);

  return null;
};

export default ScrollManager;
