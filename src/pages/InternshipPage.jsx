import { Briefcase } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { internships } from '../data/internships.js';

const InternshipPage = () => (
  <div className="page-shell">
    <div className="page-stack">
      <PageHeader
        title="Internship Experience"
        subtitle="Industry Experience"
      />
    <div className="space-y-6">
      {internships.map((item) => (
        <article key={item.id} className="surface space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/15 text-indigo-300">
                  <Briefcase size={20} />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
                  {item.company}
                </p>
              </div>
              <h2 className="text-[clamp(1.45rem,3.1vw,2.1rem)] font-semibold text-white leading-tight">{item.role}</h2>
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-right">{item.period}</span>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Key responsibilities</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 px-4 py-3">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Skills learned</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.skillsGained.map((skill) => (
                <span key={skill} className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-200">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
    </div>
  </div>
);

export default InternshipPage;
