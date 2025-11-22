import { motion } from 'framer-motion';

const bubbleConfigs = [
  { id: 'bg-bubble-1', top: '8%', left: '12%', size: 220, delay: 0 },
  { id: 'bg-bubble-2', top: '68%', left: '6%', size: 280, delay: 0.6 },
  { id: 'bg-bubble-3', top: '18%', left: '58%', size: 200, delay: 0.3 },
  { id: 'bg-bubble-4', top: '74%', left: '68%', size: 240, delay: 0.9 },
  { id: 'bg-bubble-5', top: '36%', left: '82%', size: 180, delay: 0.45 },
  { id: 'bg-bubble-6', top: '48%', left: '32%', size: 190, delay: 1.1 },
];

const particleConfigs = Array.from({ length: 24 }, (_, index) => ({
  id: `bg-particle-${index}`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.floor(Math.random() * 6) + 6,
  delay: Math.random() * 1.5,
  duration: Math.random() * 3 + 5,
}));

const BackgroundParticles = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {bubbleConfigs.map((bubble) => (
        <motion.span
          key={bubble.id}
          className="absolute rounded-full bg-indigo-500/10 blur-3xl"
          style={{
            top: bubble.top,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
          }}
          initial={{ opacity: 0.08, y: 0 }}
          animate={{ opacity: [0.1, 0.25, 0.1], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: bubble.delay, ease: 'easeInOut' }}
        />
      ))}

      {particleConfigs.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-indigo-300/40"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0], y: [0, -20, 0] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;
