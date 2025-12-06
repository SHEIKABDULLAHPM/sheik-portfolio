import { Briefcase } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { internships } from '../data/siteContent.js';

const InternshipPage = () => (
  <div className="space-y-10">
    <PageHeader
      title="Internship Experience"
      subtitle="Industry Experience"
    />
    <div className="space-y-5">
      {internships.map((item) => (
        <article key={item.id} className="space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
                <Briefcase size={16} /> {item.company}
              </p>
              <h2 className="text-2xl font-semibold text-white">{item.role}</h2>
            </div>
            <span className="text-sm text-slate-400">{item.period}</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Key Responsibilities</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 px-4 py-3">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Skills Learned</p>
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
);

export default InternshipPage;
