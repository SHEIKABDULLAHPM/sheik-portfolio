const RouteLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#05060a] px-6 py-24 text-slate-100">
    <div className="flex w-full max-w-sm flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-8 py-10 text-center shadow-[0_18px_65px_rgba(0,0,0,0.55)]" role="status" aria-live="polite">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-indigo-400 border-t-transparent motion-reduce:animate-none" aria-hidden="true" />
      <p className="text-sm font-medium tracking-wide text-slate-100/90">Loading the next section…</p>
      <span className="sr-only">Loading page content, please wait.</span>
    </div>
  </div>
);

export default RouteLoader;
