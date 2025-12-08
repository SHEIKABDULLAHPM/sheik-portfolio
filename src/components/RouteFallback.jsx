const RouteFallback = () => (
  <div className="flex min-h-[30vh] items-center justify-center">
    <div className="flex flex-col items-center gap-3 text-center text-slate-300">
      <span
        className="h-11 w-11 animate-spin rounded-full border-2 border-indigo-300/70 border-t-transparent"
        aria-hidden="true"
      />
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-200">Loading</p>
      <p className="text-sm text-slate-400">Preparing the next view...</p>
    </div>
  </div>
);

export default RouteFallback;
