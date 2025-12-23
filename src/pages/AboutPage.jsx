import PageHeader from '../components/PageHeader.jsx';
import { aboutMe } from '../data/hero.js';

const AboutPage = () => (
  <div className="page-shell">
    <div className="page-stack">
      <PageHeader
        title="About Me"
        subtitle="Professional Background"
      />
    <section className="surface space-y-4">
      <div className="space-y-4 text-base text-slate-200">
        {aboutMe.introduction.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
    
    {/* Education Timeline */}
    <section className="surface space-y-6">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Education timeline</p>
      <div className="space-y-6">
        {aboutMe.educationTimeline.map((education, index) => (
          <div key={education.id} className="relative flex gap-5">
            <div className="flex flex-col items-center pt-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-500/15 text-indigo-200">
                <span className="text-sm font-semibold">{index + 1}</span>
              </div>
              {index < aboutMe.educationTimeline.length - 1 && (
                <span className="mt-2 h-16 w-px bg-slate-700/50" />
              )}
            </div>
            <div className="flex-1 pb-6">
              <div className="space-y-3 rounded-2xl border border-white/8 bg-white/5 p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-white">{education.institution}</h3>
                  <span className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                    {education.grade}
                  </span>
                </div>
                <div className="space-y-1 text-sm text-slate-300/90">
                  <p className="font-medium text-indigo-200">{education.qualification}</p>
                  <p>{education.duration}</p>
                </div>
                {education.details ? (
                  <p className="text-sm text-slate-300/85">{education.details}</p>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {aboutMe.educationHighlights.length > 0 && (
      <section className="surface space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Education highlights</p>
        <ul className="space-y-3 text-sm text-slate-200">
          {aboutMe.educationHighlights.map((highlight) => (
            <li key={highlight} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 px-4 py-3">
              {highlight}
            </li>
          ))}
        </ul>
      </section>
    )}
    </div>
  </div>
);

export default AboutPage;
