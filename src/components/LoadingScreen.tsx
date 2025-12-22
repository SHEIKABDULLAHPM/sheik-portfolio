import { useCallback, useEffect, useState } from 'react';
import useLoadingProgress from '../hooks/useLoadingProgress.js';

type LoadingScreenProps = {
  isVisible?: boolean;
  duration?: number;
  autoClose?: boolean;
  allowEscape?: boolean;
  onClose?: () => void;
  overlayClassName?: string;
};

const DISPLAY_NAME = 'Sheik';
type StageState = 'idle' | 'exit';

const usePrefersReducedMotion = () => {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => setPrefers(event.matches);
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
  duration = 3200,
  autoClose = true,
  allowEscape = true,
  onClose,
  overlayClassName = '',
}: LoadingScreenProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { progress, isComplete, isActive, start, cancel, complete } = useLoadingProgress({
    duration,
    autoStart: isVisible,
  });
  const [visible, setVisible] = useState(isVisible);
  const [shouldRender, setShouldRender] = useState(isVisible);
  const [stageState, setStageState] = useState<StageState>('idle');
  const progressValue = Number.isFinite(progress) ? Math.min(100, Math.max(0, Math.round(progress))) : 0;
  const progressLabel = `${progressValue.toString().padStart(2, '0')}%`;

  const beginExit = useCallback(() => {
    setStageState((prev) => (prev === 'exit' ? prev : 'exit'));
  }, []);

  useEffect(() => {
    if (isVisible && !isActive && !isComplete) {
      start();
    }
    if (!isVisible) {
      cancel();
    }
  }, [isVisible, isActive, isComplete, start, cancel]);

  useEffect(() => {
    if (isVisible) {
      setStageState('idle');
      setShouldRender(true);
      requestAnimationFrame(() => setVisible(true));
      return undefined;
    }
    beginExit();
    setVisible(false);
    const timeout = window.setTimeout(() => setShouldRender(false), 420);
    return () => window.clearTimeout(timeout);
  }, [isVisible, beginExit]);

  useEffect(() => {
    if (!allowEscape || !visible) {
      return undefined;
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        beginExit();
        complete();
        setVisible(false);
        window.setTimeout(() => setShouldRender(false), 320);
        onClose?.();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [allowEscape, visible, beginExit, complete, onClose]);

  useEffect(() => {
    if (!autoClose || !shouldRender || !visible || !isComplete) {
      return undefined;
    }
    beginExit();
    const fadeTimer = window.setTimeout(() => setVisible(false), 200);
    const cleanup = window.setTimeout(() => {
      setShouldRender(false);
      onClose?.();
    }, 520);
    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(cleanup);
    };
  }, [autoClose, shouldRender, visible, isComplete, onClose, beginExit]);

  if (!shouldRender) {
    return null;
  }

  const stageClassName = `sheik-stage ${prefersReducedMotion ? 'sheik-stage--still' : ''} ${stageState === 'exit' ? 'sheik-stage--exit' : ''}`;

  return (
    <div
      className={`fixed inset-0 z-[999] flex min-h-screen w-full items-center justify-center bg-[#01030c] px-4 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      } ${overlayClassName}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Sheik"
    >
      <div className={stageClassName} data-motion={prefersReducedMotion ? 'reduced' : 'active'}>
        <div className="sheik-atmosphere" aria-hidden="true">
          <div className="sheik-grid" />
          <div className="sheik-halo sheik-halo--base" />
          <div className="sheik-halo sheik-halo--blur" />
          <div className="sheik-ring sheik-ring--outer" />
          <div className="sheik-ring sheik-ring--inner" />
          <div className="sheik-orb sheik-orb--left" />
          <div className="sheik-orb sheik-orb--right" />
          <div className="sheik-orb sheik-orb--top" />
        </div>
        <div className="sheik-veil" aria-hidden="true" />
        <div className="sheik-core">
          <div className="sheik-name-stack" aria-live="off">
            <span className="sheik-name sheik-name--ambient" aria-hidden="true">
              {DISPLAY_NAME}
            </span>
            <span className="sheik-name sheik-name--primary">{DISPLAY_NAME}</span>
            <span className="sheik-name sheik-name--glare" aria-hidden="true">
              {DISPLAY_NAME}
            </span>
          </div>
          <div
            className="sheik-meter"
            role="progressbar"
            aria-valuenow={progressValue}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="sheik-meter__track">
              <div
                className="sheik-meter__fill"
                style={{ width: `${progressValue}%` }}
                aria-hidden="true"
              />
              <div className="sheik-meter__sheen" aria-hidden="true" />
            </div>
            <div className="sheik-meter__labels">
              <span className="sheik-meter__value">{progressLabel}</span>
              <span className="sheik-meter__hint">Calibrating showcase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
