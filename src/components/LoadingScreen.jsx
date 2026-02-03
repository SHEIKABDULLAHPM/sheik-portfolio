"use client";

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import useLoadingProgress from '../hooks/useLoadingProgress.js';

const DISPLAY_NAME = "Sheik's Portfolio";

const usePrefersReducedMotion = () => {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setPrefers(event.matches);
    setPrefers(query.matches);

    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', handleChange);
      return () => query.removeEventListener('change', handleChange);
    }

    query.addListener(handleChange);
    return () => query.removeListener(handleChange);
  }, []);

  return prefers;
};

const LoadingScreen = ({
  isVisible = true,
  duration = 5200,
  autoClose = true,
  allowEscape = true,
  onClose,
  overlayClassName = '',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const circleId = useId();
  const gradientId = `${circleId}-gradient`;
  const { progress, isComplete, isActive, start, cancel } = useLoadingProgress({
    duration,
    autoStart: isVisible,
  });
  const [visible, setVisible] = useState(isVisible);
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [stageState, setStageState] = useState('idle');
  const overlayRef = useRef(null);
  const focusTargetsRef = useRef([]);
  const previouslyFocusedRef = useRef(null);

  const progressValue = Number.isFinite(progress) ? Math.min(100, Math.max(0, Math.round(progress))) : 0;
  const progressFraction = progressValue / 100;
  const circleRadius = 140;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - progressFraction * circleCircumference;

  const introStyles = {
    opacity: 0.4 + 0.6 * progressFraction,
    transform: `translateY(${(1 - progressFraction) * -5}px)`,
    letterSpacing: 'clamp(0.12rem, 1.25vw, 0.35rem)',
  };

  const brandStyles = {
    opacity: 0.85 + 0.15 * progressFraction,
    letterSpacing: 'clamp(0.18rem, 1.8vw, 0.4rem)',
    transform: `scale(${(0.95 + 0.05 * progressFraction).toFixed(3)})`,
  };

  const beginExit = useCallback(() => {
    setStageState((prev) => (prev === 'exit' ? prev : 'exit'));
  }, []);

  const syncFocusTargets = useCallback(() => {
    if (typeof document === 'undefined' || !overlayRef.current) {
      focusTargetsRef.current = [];
      return;
    }
    focusTargetsRef.current = Array.from(
      overlayRef.current.querySelectorAll('[data-loader-focusable="true"]'),
    );
  }, []);

  const focusFirstTarget = useCallback(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }
    const target = focusTargetsRef.current[0] || overlayRef.current;
    if (target) {
      window.requestAnimationFrame(() => {
        target.focus({ preventScroll: true });
      });
    }
  }, []);

  useEffect(() => {
    if (!visible || typeof document === 'undefined') {
      return undefined;
    }

    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    syncFocusTargets();
    focusFirstTarget();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && allowEscape) {
        beginExit();
        setVisible(false);
        if (typeof window !== 'undefined') {
          window.setTimeout(() => setShouldRender(false), 800);
        }
        onClose?.();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      if (focusTargetsRef.current.length === 0) {
        event.preventDefault();
        overlayRef.current?.focus({ preventScroll: true });
        return;
      }

      const first = focusTargetsRef.current[0];
      const last = focusTargetsRef.current[focusTargetsRef.current.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last?.focus({ preventScroll: true });
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first?.focus({ preventScroll: true });
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedRef.current?.focus?.({ preventScroll: true });
    };
  }, [allowEscape, beginExit, focusFirstTarget, onClose, syncFocusTargets, visible]);

  useEffect(() => {
    if (isVisible && !isActive && !isComplete) {
      start();
    }
    if (!isVisible) {
      cancel();
    }
  }, [isVisible, isActive, isComplete, start, cancel]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    if (isVisible) {
      setStageState('idle');
      setShouldRender(true);
      window.requestAnimationFrame(() => setVisible(true));
      return undefined;
    }

    beginExit();
    setVisible(false);
    const timeout = window.setTimeout(() => setShouldRender(false), 800);
    return () => window.clearTimeout(timeout);
  }, [isVisible, beginExit]);

  useEffect(() => {
    if (!autoClose || !shouldRender || !visible || !isComplete || typeof window === 'undefined') {
      return undefined;
    }

    beginExit();
    const fadeTimer = window.setTimeout(() => setVisible(false), 400);
    const cleanup = window.setTimeout(() => {
      setShouldRender(false);
      onClose?.();
    }, 1200);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(cleanup);
    };
  }, [autoClose, shouldRender, visible, isComplete, onClose, beginExit]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      tabIndex={-1}
      className={`fixed inset-0 z-[999] flex min-h-screen w-full items-center justify-center overflow-hidden transition-all duration-700 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      } ${overlayClassName}`}
      role="status"
      aria-live="polite"
      aria-modal="true"
      aria-label={`Loading ${DISPLAY_NAME} portfolio - ${progressValue}% complete`}
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #050812 50%, #0d1424 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle at 20% 30%, rgba(99, 102, 241, ${0.08 + 0.07 * progressFraction}) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(56, 189, 248, ${0.06 + 0.06 * progressFraction}) 0%, transparent 50%)`,
        }}
      />

      <div
        className={`relative flex flex-col items-center justify-center transition-all duration-1000 ${
          stageState === 'exit' ? 'scale-105 opacity-0 blur-2xl' : 'scale-100 opacity-100 blur-0'
        } ${prefersReducedMotion ? '' : 'animate-soft-slide'}`}
        data-motion={prefersReducedMotion ? 'reduced' : 'active'}
      >
        <div
          className="relative flex items-center justify-center"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressValue}
        >
          <svg
            className="relative"
            viewBox="0 0 320 320"
            width="320"
            height="320"
            aria-hidden="true"
            style={{
              filter: `drop-shadow(0 0 ${20 + 15 * progressFraction}px rgba(99, 102, 241, ${0.3 + 0.2 * progressFraction}))`,
            }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
              </linearGradient>
            </defs>
            <circle
              cx="160"
              cy="160"
              r={circleRadius}
              fill="none"
              stroke="rgba(148, 163, 184, 0.12)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx="160"
              cy="160"
              r={circleRadius}
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transform: 'rotate(-90deg)',
                transformOrigin: '50% 50%',
                transition: prefersReducedMotion
                  ? 'none'
                  : 'stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1), stroke-width 1.2s ease-in-out',
              }}
            />
          </svg>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
            style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}
          >
            <div
              className="loader-focus-target flex flex-col items-center focus:outline-none focus-visible:outline-none"
              tabIndex={0}
              data-loader-focusable="true"
              aria-label={`Loading ${DISPLAY_NAME} portfolio, ${progressValue} percent complete`}
            >
              <span
                className="mb-1 text-xs font-semibold uppercase text-slate-100/95"
                style={{
                  fontSize: 'clamp(0.65rem, 1.4vw, 0.85rem)',
                  ...introStyles,
                }}
                aria-hidden="true"
              >
                Welcome to
              </span>
              <span
                className="font-bold uppercase text-white"
                style={{
                  fontSize: 'clamp(1rem, 3vw, 2rem)',
                  textShadow: `0 0 ${30 + 20 * progressFraction}px rgba(99, 102, 241, ${0.45 + 0.3 * progressFraction}),
                    0 0 ${50 + 30 * progressFraction}px rgba(56, 189, 248, ${0.25 + 0.25 * progressFraction})`,
                  ...brandStyles,
                }}
                aria-hidden="true"
              >
                {DISPLAY_NAME}
              </span>
              <span
                className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-100"
                style={{
                  fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
                  opacity: 0.5 + 0.4 * progressFraction,
                }}
              >
                {progressValue}% ready
              </span>
            </div>
          </div>
        </div>
      </div>

      <span className="sr-only">Loading {DISPLAY_NAME} portfolio. {progressValue}% complete.</span>
    </div>
  );
};

export default LoadingScreen;