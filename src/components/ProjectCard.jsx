import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech, image = undefined }) => (
  <motion.article
    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/70 shadow-lg shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/45 hover:shadow-2xl hover:shadow-indigo-500/25"
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-slate-900 transition-all duration-500">
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:brightness-110"
          loading="lazy"
        />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(129,140,248,0.35),transparent_60%)] transition-opacity duration-500 group-hover:opacity-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
    <div className="flex flex-1 flex-col gap-3 p-6">
      <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-indigo-100">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-slate-200">{description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-3">
        {tech?.map((item) => (
          <span
            key={item}
            className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-200 transition-all duration-300 group-hover:border-indigo-400 group-hover:bg-indigo-500/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
