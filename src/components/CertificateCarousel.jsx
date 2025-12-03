import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const DEFAULT_SPEED = 36;

const CertificateCarousel = ({ items = [], speed = DEFAULT_SPEED, className }) => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const previousTimestampRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [isPaused, setIsPaused] = useState(false);

  const hasItems = items.length > 0;
  const shouldAutoScroll = hasItems && !reduceMotion;

  const extendedItems = useMemo(() => {
    if (!hasItems) {
      return [];
    }
    return [...items, ...items];
  }, [hasItems, items]);

  const resetScrollIfNeeded = useCallback(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const totalWidth = container.scrollWidth;
    if (!totalWidth) {
      return;
    }
    const loopPoint = totalWidth / 2;
    if (container.scrollLeft >= loopPoint) {
      container.scrollLeft -= loopPoint;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const handleScroll = () => {
      resetScrollIfNeeded();
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [resetScrollIfNeeded]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return undefined;
    }
    container.scrollLeft = 0;
    previousTimestampRef.current = null;
    return undefined;
  }, [items]);

  useEffect(() => {
    if (!shouldAutoScroll) {
      setIsPaused(true);
      return undefined;
    }

    setIsPaused(false);

    const container = containerRef.current;
    if (!container) {
      return undefined;
    }

    const step = (timestamp) => {
      if (!previousTimestampRef.current) {
        previousTimestampRef.current = timestamp;
      }
      const delta = timestamp - previousTimestampRef.current;
      previousTimestampRef.current = timestamp;

      if (!isPaused) {
        const distance = (Math.max(speed, 12) * delta) / 1000;
        container.scrollLeft += distance;
        resetScrollIfNeeded();
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      previousTimestampRef.current = null;
    };
  }, [isPaused, resetScrollIfNeeded, shouldAutoScroll, speed]);

  const pauseAutoScroll = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeAutoScroll = useCallback(() => {
    if (shouldAutoScroll) {
      setIsPaused(false);
    }
  }, [shouldAutoScroll]);

  if (!hasItems) {
    return null;
  }

  const containerClasses = ['relative w-full'];
  if (className) {
    containerClasses.push(className);
  }

  return (
    <div
      className={containerClasses.join(' ')}
      onMouseEnter={pauseAutoScroll}
      onMouseLeave={resumeAutoScroll}
      onPointerDown={pauseAutoScroll}
      onPointerUp={resumeAutoScroll}
      onTouchStart={pauseAutoScroll}
      onTouchEnd={resumeAutoScroll}
      onTouchCancel={resumeAutoScroll}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" />
      <div
        ref={containerRef}
        className="carousel-scroll flex gap-4 overflow-x-auto py-2 pr-4 sm:gap-5 lg:gap-6"
        aria-label="Certificates"
      >
        {extendedItems.map((item, index) => {
          const isClone = index >= items.length;
          return (
            <article
              key={`${item.title}-${index}`}
              className="flex min-w-[220px] max-w-[220px] flex-col justify-between rounded-2xl border border-slate-800/70 bg-slate-900/80 p-4 text-left shadow-lg shadow-indigo-500/10 transition-transform duration-300 hover:-translate-y-1 hover:border-indigo-500/40 sm:min-w-[240px] sm:max-w-[240px] lg:min-w-[260px] lg:max-w-[260px]"
              aria-hidden={isClone}
            >
              <div className="space-y-2">
                <span className="inline-flex items-center rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-200/90">
                  {item.provider}
                </span>
                <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">{item.title}</h3>
                {item.keywords?.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {item.keywords.map((keyword) => (
                      <span
                        key={`${item.title}-${keyword}`}
                        className="rounded-full border border-slate-700/60 bg-slate-900/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-indigo-200/80"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-indigo-200/70">
                <span>{item.year}</span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-indigo-200 transition-colors duration-300 hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white"
                    aria-label={`View credential: ${item.title}`}
                    tabIndex={isClone ? -1 : undefined}
                  >
                    <span>View</span>
                    <span className="translate-x-0 text-sm transition-transform duration-300 hover:translate-x-1">→</span>
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default CertificateCarousel;
