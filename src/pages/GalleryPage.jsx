import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { gallery } from '../data/siteContent.js';

const getItemsPerPage = () => {
  if (typeof window === 'undefined') {
    return 1;
  }
  if (window.innerWidth >= 1024) {
    return 3;
  }
  if (window.innerWidth >= 640) {
    return 2;
  }
  return 1;
};

const galleryDomains = ['All', ...Array.from(new Set(gallery.map((section) => section.category)))];

const createIndexMap = () =>
  gallery.reduce((acc, section) => {
    acc[section.category] = 0;
    return acc;
  }, {});

const GalleryPage = () => {
  const domainFilters = galleryDomains;
  const [activeDomain, setActiveDomain] = useState('All');
  const [itemsPerPage, setItemsPerPage] = useState(() => getItemsPerPage());
  const [startIndexMap, setStartIndexMap] = useState(() => createIndexMap());

  useEffect(() => {
    const updateItemsPerPage = () => setItemsPerPage(getItemsPerPage());
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  useEffect(() => {
    setStartIndexMap((prev) => {
      let hasChange = false;
      const next = { ...prev };
      gallery.forEach((section) => {
        const maxStart = Math.max(0, section.items.length - itemsPerPage);
        const current = next[section.category] ?? 0;
        const clamped = Math.min(current, maxStart);
        if (clamped !== current) {
          next[section.category] = clamped;
          hasChange = true;
        }
      });
      return hasChange ? next : prev;
    });
  }, [itemsPerPage]);

  const handleDomainChange = (domain) => {
    setActiveDomain(domain);
    if (domain === 'All') {
      setStartIndexMap(() => createIndexMap());
      return;
    }
    setStartIndexMap((prev) => ({ ...prev, [domain]: 0 }));
  };

  const visibleSections = activeDomain === 'All' ? gallery : gallery.filter((section) => section.category === activeDomain);

  const formatDescription = (text = '') => (text.length > 70 ? `${text.slice(0, 67)}…` : text);

  const handleNavigation = (category, direction, totalItems) => {
    setStartIndexMap((prev) => {
      const current = prev[category] ?? 0;
      const maxStart = Math.max(0, totalItems - itemsPerPage);
      const offset = direction === 'next' ? itemsPerPage : -itemsPerPage;
      const nextIndex = Math.min(Math.max(0, current + offset), maxStart);
      if (nextIndex === current) {
        return prev;
      }
      return { ...prev, [category]: nextIndex };
    });
  };

  return (
    <div className="space-y-10 lg:space-y-12">
      <PageHeader
        title="Gallery"
        subtitle="Visual Highlights"
        description="Snapshots from prototypes, campus life, and micro-moments that inform my design taste."
      />
      <section className="surface space-y-4 sm:space-y-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-300 sm:text-[11px]">Filter by domain</p>
        <div className="flex flex-wrap gap-2">
          {domainFilters.map((domain) => (
            <button
              key={domain}
              type="button"
              onClick={() => handleDomainChange(domain)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] transition sm:text-[0.75rem] ${
                activeDomain === domain ? 'border-white/30 bg-white/10 text-white' : 'border-white/15 text-slate-200 hover:border-white/30'
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </section>
      {visibleSections.map((section) => {
        const totalItems = section.items.length;
        const maxStart = Math.max(0, totalItems - itemsPerPage);
        const startIndex = Math.min(startIndexMap[section.category] ?? 0, maxStart);
        const visibleItems = section.items.slice(startIndex, startIndex + itemsPerPage);
        const canGoPrev = startIndex > 0;
        const canGoNext = startIndex < maxStart;
        return (
          <section key={section.category} className="surface space-y-5 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="space-y-1.5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-indigo-200 sm:text-xs">{section.category}</div>
                <p className="max-w-2xl text-sm text-slate-300 sm:text-base truncate">{section.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label={`Show previous ${section.category} images`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/80 p-2 text-white shadow-xl shadow-black/30 transition hover:border-white/40 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/15 disabled:hover:bg-slate-950/80"
                  onClick={() => handleNavigation(section.category, 'prev', totalItems)}
                  disabled={!canGoPrev}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  aria-label={`Show next ${section.category} images`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-slate-950/80 p-2 text-white shadow-xl shadow-black/30 transition hover:border-white/40 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/15 disabled:hover:bg-slate-950/80"
                  onClick={() => handleNavigation(section.category, 'next', totalItems)}
                  disabled={!canGoNext}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-3 transition hover:border-white/35"
                >
                  <div className="overflow-hidden rounded-xl border border-white/5">
                    <img
                      src={item.src}
                      alt={item.caption || 'Gallery visual'}
                      className="h-48 w-full object-cover sm:h-56 lg:h-52"
                      loading="lazy"
                    />
                  </div>
                  {item.description ? (
                    <p className="text-xs font-medium text-slate-200/85 sm:text-sm truncate">
                      {formatDescription(item.description)}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        );
      })}
      {visibleSections.length === 0 ? (
        <p className="surface text-sm text-slate-400">No gallery items match this filter.</p>
      ) : null}
    </div>
  );
};

export default GalleryPage;
