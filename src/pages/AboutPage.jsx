import PageHeader from '../components/PageHeader.jsx';
import { aboutMe } from '../data/siteContent.js';

const AboutPage = () => (
  <div className="space-y-10">
    <PageHeader
      title="About Me"
      subtitle="Professional Background"
    />
    <section className="space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
      <p className="text-base text-slate-200">{aboutMe.introduction}</p>
    </section>
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
