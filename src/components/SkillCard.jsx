import { motion } from 'framer-motion';

const SkillCard = ({ title, icon: Icon }) => (
  <motion.div
    className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/25"
    whileHover={{ scale: 1.025 }}
    whileTap={{ scale: 0.99 }}
  >
    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-indigo-500/30 group-hover:text-white">
      {Icon ? <Icon size={22} /> : null}
    </div>
    <p className="relative mt-4 text-base font-semibold text-white transition-colors duration-300 group-hover:text-indigo-100">
      {title}
    </p>
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="absolute -top-24 right-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  </motion.div>
);

export default SkillCard;
