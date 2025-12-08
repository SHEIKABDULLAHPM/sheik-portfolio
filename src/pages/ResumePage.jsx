import { useState } from 'react';
import { Download, Eye, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { resumeDetails } from '../data/siteContent.js';
import resumePdf from '../assets/sheik resume.pdf';

const ResumePage = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="space-y-12">
      <PageHeader
        title="Resume"
        subtitle="Career Snapshot"
      />

      <div className="flex flex-wrap gap-3">
        <a
          href={resumePdf}
          download="Sheik_Abdullah_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400"
        >
          <Download size={16} /> Download Resume
        </a>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-indigo-400"
          onClick={() => setShowPreview((prev) => !prev)}
        >
          <Eye size={16} /> {showPreview ? 'Hide Preview' : 'Preview Resume'}
        </button>
      </div>

      <section className="surface space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">
          <Info size={16} /> Summary
        </div>
        <p className="text-[0.95rem] text-slate-200 sm:text-[1.05rem]">{resumeDetails.summary}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Personal</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-200">
              <li>Email: {resumeDetails.personal.email}</li>
              <li>Phone: {resumeDetails.personal.phone}</li>
              <li>Location: {resumeDetails.personal.location}</li>
              <li>Languages: {resumeDetails.personal.languages.join(', ')}</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Skills snapshot</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-200">
              {resumeDetails.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Education</p>
        <div className="space-y-3">
          {resumeDetails.education.map((school) => (
            <div key={school.school} className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{school.school}</h3>
                  <p className="text-sm text-slate-300">{school.program}</p>
                </div>
                <div className="flex flex-col gap-1 text-right sm:text-right">
                  <span className="text-sm font-medium text-slate-200">{school.period}</span>
                  <span className="text-sm text-emerald-400">{school.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Experience</p>
        <div className="space-y-3">
          {resumeDetails.experience.map((exp) => (
            <div key={exp.company} className="rounded-2xl border border-white/8 bg-white/5 p-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white sm:text-[1.05rem]">{exp.title}</h3>
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
        <div className="surface p-4">
          <div className="aspect-[8.5/11] w-full overflow-hidden rounded-2xl border border-slate-800">
            <iframe 
              title="Resume preview" 
              src={resumePdf} 
              className="h-full w-full" 
              type="application/pdf"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ResumePage;
