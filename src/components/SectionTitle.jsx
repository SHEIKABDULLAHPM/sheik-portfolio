import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title }) => (
  <div className="mb-10 space-y-3">
    <motion.span
      className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {eyebrow}
    </motion.span>
    <motion.h2
      className="text-3xl font-semibold text-white sm:text-4xl"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
    >
      {title}
    </motion.h2>
  </div>
);

export default SectionTitle;
