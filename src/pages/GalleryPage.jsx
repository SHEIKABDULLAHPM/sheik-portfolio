import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import { gallery } from '../data/siteContent.js';

const GalleryPage = () => {
  const domainFilters = useMemo(
    () => ['All', ...gallery.map((section) => section.category)],
    []
  );
  const [activeDomain, setActiveDomain] = useState('All');
  const visibleSections = activeDomain === 'All' ? gallery : gallery.filter((section) => section.category === activeDomain);

  return (
    <div className="space-y-10">
      <PageHeader
        title="Gallery"
        subtitle="Visual Highlights"
        description="Snapshots from prototypes, campus life, and micro-moments that inform my design taste."
      />
      <section className="surface space-y-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-300">Filter by domain</p>
        <div className="flex flex-wrap gap-2">
          {domainFilters.map((domain) => (
            <button
              key={domain}
              type="button"
              onClick={() => setActiveDomain(domain)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                activeDomain === domain ? 'border-white/30 bg-white/10 text-white' : 'border-white/15 text-slate-200 hover:border-white/30'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </section>
      {visibleSections.map((section) => (
        <section key={section.category} className="surface space-y-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">{section.category}</div>
            <p className="mt-1 text-base text-slate-300">{section.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item) => (
              <figure key={item.id} className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                <img src={item.src} alt={item.caption} className="h-48 w-full rounded-2xl object-cover" loading="lazy" />
                <figcaption className="text-sm text-slate-200">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
      {visibleSections.length === 0 ? (
        <p className="surface text-sm text-slate-400">No gallery items match this filter.</p>
      ) : null}
    </div>
  );
};

export default GalleryPage;
