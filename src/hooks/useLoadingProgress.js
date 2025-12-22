import { useCallback, useEffect, useRef, useState } from 'react';

const clampToPercentage = (value) => Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0));
const easeOutCubic = (t) => 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);

// Provides a smooth, requestAnimationFrame-driven progress value that trends toward 100%.
const useLoadingProgress = ({
  duration = 2800,
  delay = 0,
  autoStart = true,
  easing = easeOutCubic,
  failSafeMs = duration + 5000,
  initialProgress = 0,
} = {}) => {
  const [progress, setProgress] = useState(() => clampToPercentage(initialProgress));
  const [isActive, setIsActive] = useState(autoStart);
  const [isComplete, setIsComplete] = useState(() => clampToPercentage(initialProgress) >= 100);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);
  const failSafeRef = useRef(null);

  const stopAnimation = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  const complete = useCallback(() => {
    stopAnimation();
    setProgress(100);
    setIsActive(false);
    setIsComplete(true);
  }, [stopAnimation]);

  const step = useCallback(
    (timestamp) => {
      if (!isActive) {
        return;
      }
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      if (elapsed < delay) {
        frameRef.current = requestAnimationFrame(step);
        return;
      }
      const adjustedElapsed = elapsed - delay;
      const normalized = duration <= 0 ? 1 : adjustedElapsed / duration;
      const eased = easing(normalized);
      const nextProgress = clampToPercentage(Math.round(eased * 100));
      setProgress(nextProgress);
      if (nextProgress >= 100) {
        complete();
        return;
      }
      frameRef.current = requestAnimationFrame(step);
    },
    [isActive, delay, duration, easing, complete]
  );

  useEffect(() => {
    if (!isActive) {
      return undefined;
    }
    frameRef.current = requestAnimationFrame(step);
    return () => {
      stopAnimation();
    };
  }, [isActive, step, stopAnimation]);

  useEffect(() => {
    if (!isActive || !failSafeMs) {
      return undefined;
    }
    failSafeRef.current = setTimeout(() => {
      complete();
    }, failSafeMs);
    return () => {
      if (failSafeRef.current) {
        clearTimeout(failSafeRef.current);
      }
    };
  }, [isActive, failSafeMs, complete]);

  const start = useCallback(() => {
    stopAnimation();
    setProgress(0);
    setIsComplete(false);
    startTimeRef.current = null;
    setIsActive(true);
  }, [stopAnimation]);

  const reset = useCallback(
    (value = 0) => {
      stopAnimation();
      setProgress(clampToPercentage(value));
      startTimeRef.current = null;
      const hasCompleted = clampToPercentage(value) >= 100;
      setIsComplete(hasCompleted);
      setIsActive(!hasCompleted && autoStart);
    },
    [autoStart, stopAnimation]
  );

  const cancel = useCallback(() => {
    stopAnimation();
    setIsActive(false);
  }, [stopAnimation]);

  return {
    progress,
    isActive,
    isComplete,
    start,
    cancel,
    reset,
    complete,
  };
};

export default useLoadingProgress;
