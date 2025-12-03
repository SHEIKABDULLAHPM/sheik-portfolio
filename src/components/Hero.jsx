import { motion, useReducedMotion } from 'framer-motion';
import heroPortrait from '../assets/sheik-abdullah.jpg';

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const bubbles = [
  { id: 'bubble-1', top: '4%', left: '8%', size: 140, delay: 0 },
  { id: 'bubble-2', top: '60%', left: '-6%', size: 180, delay: 0.8 },
  { id: 'bubble-3', top: '18%', left: '70%', size: 120, delay: 0.4 },
  { id: 'bubble-4', top: '68%', left: '78%', size: 160, delay: 1.2 },
  { id: 'bubble-5', top: '78%', left: '36%', size: 110, delay: 0.6 },
];

const particles = [
  { id: 'particle-1', top: '10%', left: '15%', size: 8, delay: 0 },
  { id: 'particle-2', top: '22%', left: '55%', size: 10, delay: 0.4 },
  { id: 'particle-3', top: '40%', left: '8%', size: 7, delay: 0.8 },
  { id: 'particle-4', top: '72%', left: '18%', size: 9, delay: 0.2 },
  { id: 'particle-5', top: '85%', left: '58%', size: 11, delay: 1 },
  { id: 'particle-6', top: '28%', left: '82%', size: 8, delay: 0.6 },
  { id: 'particle-7', top: '54%', left: '76%', size: 9, delay: 1.3 },
  { id: 'particle-8', top: '68%', left: '44%', size: 7, delay: 0.9 },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const heroTransition = reduceMotion ? { duration: 0 } : { duration: 0.7, ease: 'easeOut' };
  const imageTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.6, ease: 'easeOut', delay: 0.2 };

  return (
    <section
      id="hero"
      className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-5 pt-24 text-center sm:px-6 sm:pt-28 lg:flex-row lg:items-center lg:justify-between lg:pt-24 lg:text-left"
    >
      <motion.div
        className="max-w-xl space-y-6"
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate="visible"
        transition={heroTransition}
        variants={heroVariants}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-200">
          Aspiring Software Developer
        </span>
        <h1 className="font-bold leading-tight text-white text-[clamp(2rem,5vw,3.5rem)]">
          Peer Sheik Abdullah Mohd Noordeen
        </h1>
        <p className="font-medium text-indigo-200 leading-snug text-[clamp(1rem,2.4vw,1.25rem)]">
          3rd Year CSBS Engineering Student
        </p>
        <p className="leading-relaxed text-slate-300 text-[clamp(0.95rem,1.9vw,1.125rem)]">
          I craft modern web experiences that blend clean design with purposeful problem-solving. I'm quick to embrace new tools, building responsive, accessible, and genuinely people-friendly interfaces with thoughtful engineering and an ever-curious mindset.
        </p>
        <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:justify-start">
          <a
            href="/resume.pdf"
            className="group relative inline-flex transform-gpu items-center justify-center overflow-hidden rounded-full bg-indigo-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-500 will-change-transform hover:-translate-y-1 hover:bg-indigo-400 sm:px-9 sm:py-3.5 sm:text-sm lg:text-base"
            style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <span className="relative z-10">Resume</span>
            <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
            <span className="pointer-events-none absolute inset-x-6 top-1 h-1/2 -translate-y-full rounded-full bg-indigo-200/40 opacity-0 blur-2xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex transform-gpu items-center justify-center overflow-hidden rounded-full border border-indigo-500/50 bg-transparent px-10 py-4 text-base font-semibold text-indigo-200 transition-all duration-500 will-change-transform hover:-translate-y-1 hover:border-indigo-400 hover:text-white sm:px-9 sm:py-3.5 sm:text-sm lg:text-base"
            style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            <span className="relative z-10">Contact</span>
            <span className="pointer-events-none absolute inset-0 -z-10 bg-indigo-500/0 transition-colors duration-300 group-hover:bg-indigo-500/10" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative flex w-full max-w-md flex-col items-center gap-8"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={imageTransition}
      >
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          {bubbles.map((bubble) => (
            <motion.span
              key={bubble.id}
              className="absolute rounded-full bg-indigo-500/15 blur-2xl"
              style={{
                top: bubble.top,
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
              }}
              initial={{ opacity: 0.18, y: 0 }}
              animate={
                reduceMotion
                  ? { opacity: 0.22 }
                  : { opacity: [0.18, 0.32, 0.18], y: [0, -14, 0] }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 7,
                      repeat: Infinity,
                      delay: bubble.delay,
                      ease: 'easeInOut',
                    }
              }
            />
          ))}
          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-indigo-300/50"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: particle.size,
              }}
              initial={{ opacity: 0.12 }}
              animate={reduceMotion ? { opacity: 0.18 } : { opacity: [0, 0.7, 0], y: [0, -18, 0] }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 4.5,
                      repeat: Infinity,
                      delay: particle.delay,
                      ease: 'easeInOut',
                    }
              }
            />
          ))}
        </div>
        <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-indigo-500/40 bg-slate-900/70 shadow-xl shadow-indigo-500/20 sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]">
          <img
            src={heroPortrait}
            alt="Portrait of Sheik Abdullah"
            draggable={false}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(129,140,248,0.35),transparent_60%)]" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
