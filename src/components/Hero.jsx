import { motion } from 'framer-motion';

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
  return (
    <section
      id="hero"
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pt-32 text-center sm:pt-36 lg:flex-row lg:items-center lg:justify-between lg:text-left"
    >
      <motion.div
        className="max-w-xl space-y-6"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: 'easeOut' }}
        variants={heroVariants}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-200">
          Aspiring Software Developer
        </span>
        <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Sheik Abdullah
        </h1>
        <p className="text-lg font-medium text-indigo-200 sm:text-xl">
          3rd Year CSBS Engineering Student
        </p>
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
          I build modern web experiences that combine clean design, smooth interactions, and practical problem solving. I enjoy exploring emerging tools while keeping performance and accessibility front of mind.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
          <a
            href="/resume.pdf"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-400"
          >
            <span className="relative z-10">Resume</span>
            <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-40" />
            <span className="pointer-events-none absolute inset-x-6 top-1 h-1/2 -translate-y-full rounded-full bg-indigo-200/40 opacity-0 blur-2xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-indigo-500/50 bg-transparent px-8 py-3 text-sm font-semibold text-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-white"
          >
            <span className="relative z-10">Contact</span>
            <span className="pointer-events-none absolute inset-0 -z-10 bg-indigo-500/0 transition-colors duration-300 group-hover:bg-indigo-500/10" />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 transition-transform duration-300 group-hover:scale-x-100" />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="relative flex w-full max-w-md flex-col items-center gap-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
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
              initial={{ opacity: 0.15, y: 0 }}
              animate={{ opacity: [0.15, 0.3, 0.15], y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: bubble.delay, ease: 'easeInOut' }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0], y: [0, -18, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: particle.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>
        <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-indigo-500/40 bg-slate-900/70 shadow-xl shadow-indigo-500/20 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
          <img
            src="/images/sheik-abdullah.jpg"
            alt="Portrait of Sheik Abdullah"
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
