import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const BASE_ORBS = [
  { id: 'orb-1', top: '8%', left: '6%', size: 420, hue: 'rgba(99,102,241,0.28)', blur: 120, motion: 'float-slow' },
  { id: 'orb-2', top: '65%', left: '-12%', size: 360, hue: 'rgba(14,165,233,0.22)', blur: 150, motion: 'float-medium' },
  { id: 'orb-3', top: '18%', left: '68%', size: 340, hue: 'rgba(236,72,153,0.28)', blur: 120, motion: 'float-delayed' },
  { id: 'orb-4', top: '72%', left: '78%', size: 280, hue: 'rgba(129,140,248,0.24)', blur: 110, motion: 'float-slow' },
  { id: 'orb-5', top: '82%', left: '42%', size: 380, hue: 'rgba(45,212,191,0.18)', blur: 140, motion: 'float-medium' },
];

const createSparks = (count) =>
  Array.from({ length: count }, (_, index) => ({
    id: `spark-${index}`,
    top: `${12 + Math.random() * 70}%`,
    left: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 2.4,
    opacity: 0.2 + Math.random() * 0.4,
    duration: 14 + Math.random() * 10,
    delay: Math.random() * 10,
  }));

const BackgroundParticles = () => {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const sparks = useMemo(() => createSparks(28), []);

  useEffect(() => {
    if (reduceMotion) {
      setReady(false);
      return undefined;
    }
    let frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-x-0 top-[-35%] h-[140%] bg-aurora-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950/85" />
      {ready ? (
        <div className="absolute inset-0 mix-blend-soft-light">
          {BASE_ORBS.map((orb) => (
            <span
              key={orb.id}
              className={`aurora-orb ${reduceMotion ? 'no-motion' : orb.motion}`}
              style={{
                top: orb.top,
                left: orb.left,
                width: orb.size,
                height: orb.size,
                background: orb.hue,
                filter: `blur(${orb.blur}px)`
              }}
            />
          ))}
        </div>
      ) : null}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,255,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.16),transparent_55%)]" />
      </div>
      {ready ? (
        <div className="absolute inset-0">
          {sparks.map((spark) => (
            <span
              key={spark.id}
              className={`aurora-spark ${reduceMotion ? 'no-motion' : 'spark-float'}`}
              style={{
                top: spark.top,
                left: spark.left,
                width: spark.size,
                height: spark.size,
                opacity: spark.opacity,
                animationDuration: `${spark.duration}s`,
                animationDelay: `${spark.delay}s`,
              }}
            />
          ))}
        </div>
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.45),transparent_70%)]" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
};

export default BackgroundParticles;
