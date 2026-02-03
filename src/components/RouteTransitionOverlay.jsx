"use client";

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const TRANSITION_DURATION = 600;

const RouteTransitionOverlay = () => {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMounted || prefersReducedMotion) {
      return undefined;
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setIsVisible(true);
    timeoutRef.current = window.setTimeout(() => setIsVisible(false), TRANSITION_DURATION);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname, prefersReducedMotion, isMounted]);

  if (!isMounted || prefersReducedMotion) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key={pathname}
          className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 origin-top bg-gradient-to-b"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.span
            className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-gradient-to-t "
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default RouteTransitionOverlay;
