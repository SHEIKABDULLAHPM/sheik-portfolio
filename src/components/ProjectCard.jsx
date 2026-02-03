'use client';

import { motion } from 'framer-motion';
import { withBasePath } from '@/lib/withBasePath.js';

const ProjectCard = ({ title, description, tech, image = undefined }) => (
  <motion.article
    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/70 shadow-lg shadow-indigo-500/10 will-change-transform"
    style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -6, scale: 1.008 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ type: 'spring', stiffness: 250, damping: 35 }}
  >
    <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-indigo-500/40 via-purple-500/30 to-slate-900">
      {image ? (
        <img
          src={withBasePath(image)}
          alt={title}
          draggable={false}
          className="h-full w-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-[1.08] group-hover:brightness-110"
          style={{ transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
          loading="lazy"
        />
      ) : null}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(129,140,248,0.35),transparent_60%)] group-hover:opacity-0"
        style={{ transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
      />
      <div 
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100"
        style={{ transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
      />
    </div>
    <div className="flex flex-1 flex-col gap-3 p-6">
      <h3 
        className="text-xl font-semibold leading-tight text-white group-hover:text-indigo-100"
        style={{ transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >{title}</h3>
      <p 
        className="text-sm leading-relaxed text-slate-300 group-hover:text-slate-200"
        style={{ transition: 'color 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
      >{description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-3">
        {tech?.map((item) => (
          <span
            key={item}
            className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-200 group-hover:border-indigo-400 group-hover:bg-indigo-500/20"
            style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;
