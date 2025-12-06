import PageHeader from '../components/PageHeader.jsx';
import { aboutMe } from '../data/siteContent.js';

const AboutPage = () => (
  <div className="space-y-10">
    <PageHeader
      title="About Me"
      subtitle="Professional Background"
    />
    <section className="space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
      <div className="space-y-4 text-base text-slate-200">
        {aboutMe.introduction.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
    
    {/* Education Timeline */}
    <section className="space-y-6 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Education Timeline</p>
      <div className="space-y-6">
        {aboutMe.educationTimeline.map((education, index) => (
          <div key={education.id} className="relative flex gap-6">
            {/* Timeline line and icon */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-500/30">
                <svg
                  className="h-6 w-6 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              {index < aboutMe.educationTimeline.length - 1 && (
                <div className="w-px h-16 bg-slate-700/50 mt-2"></div>
              )}
            </div>
            
            {/* Education content */}
            <div className="flex-1 pb-8">
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {education.institution}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-xs font-medium text-emerald-300">
                    {education.grade}
                  </span>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-indigo-300">
                    {education.qualification}
                  </p>
                  <p className="text-sm text-slate-400">
                    {education.duration}
                  </p>
                </div>
                
                <p className="text-sm text-slate-200 leading-relaxed">
                  {education.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {aboutMe.educationHighlights.length > 0 && (
      <section className="space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Education Highlights</p>
        <ul className="space-y-3 text-sm text-slate-200">
          {aboutMe.educationHighlights.map((highlight) => (
            <li key={highlight} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 px-4 py-3">
              {highlight}
            </li>
          ))}
        </ul>
      </section>
    )}
    <section className="grid gap-4 md:grid-cols-2">
      <div className="space-y-3 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Interests</p>
        <ul className="space-y-2 text-sm text-slate-200">
          {aboutMe.extras.interests.map((interest) => (
            <li key={interest} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 px-4 py-2">
              {interest}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-3 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Goals</p>
        <ul className="space-y-2 text-sm text-slate-200">
          {aboutMe.extras.goals.map((goal) => (
            <li key={goal} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 px-4 py-2">
              {goal}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default AboutPage;
