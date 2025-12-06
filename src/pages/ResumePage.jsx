import { useState } from 'react';
import { Download, Eye, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { resumeDetails } from '../data/siteContent.js';

const ResumePage = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="space-y-10">
      <PageHeader
        title="Resume"
        subtitle="Career Snapshot"
      />

      <div className="flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white"
        >
          <Download size={16} /> Download Resume
        </a>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 px-5 py-3 text-sm font-semibold text-white"
          onClick={() => setShowPreview((prev) => !prev)}
        >
          <Eye size={16} /> {showPreview ? 'Hide Preview' : 'Preview Resume'}
        </button>
      </div>

      <section className="space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">
          <Info size={16} /> Summary
        </div>
        <p className="text-base text-slate-200">{resumeDetails.summary}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Personal</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-200">
              <li>Email: {resumeDetails.personal.email}</li>
              <li>Phone: {resumeDetails.personal.phone}</li>
              <li>Location: {resumeDetails.personal.location}</li>
              <li>Languages: {resumeDetails.personal.languages.join(', ')}</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Skills Snapshot</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-200">
              {resumeDetails.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Education</p>
        <div className="space-y-3">
          {resumeDetails.education.map((school) => (
            <div key={school.school} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4">
              <h3 className="text-xl font-semibold text-white">{school.school}</h3>
              <p className="text-sm text-slate-300">{school.program}</p>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-400">
                <span>{school.period}</span>
                <span>{school.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Experience</p>
        <div className="space-y-3">
          {resumeDetails.experience.map((exp) => (
            <div key={exp.company} className="rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-slate-300">{exp.company}</p>
                </div>
                <span className="text-xs text-slate-400">{exp.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-xl border border-slate-800/60 bg-slate-900/60 px-3 py-2">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {showPreview ? (
        <div className="rounded-3xl border border-white/5 bg-slate-900/70 p-4 shadow-lg shadow-indigo-500/5">
          <div className="aspect-[8.5/11] w-full overflow-hidden rounded-2xl border border-slate-800">
            <iframe title="Resume preview" src="/resume.pdf" className="h-full w-full" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ResumePage;
