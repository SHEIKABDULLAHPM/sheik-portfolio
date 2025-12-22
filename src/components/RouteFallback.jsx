import { Link } from 'react-router-dom';

const RouteFallback = ({ variant = 'loading' }) => {
  if (variant === 'not-found') {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4 text-center text-slate-200">
          <span className="text-6xl" role="img" aria-label="Lost">🧭</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200">404 · Not Found</p>
            <p className="mt-2 text-base text-slate-300">We couldn&apos;t find that view. Try heading back to the homepage.</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:border-indigo-400"
          >
            Go home
          </Link>
        </div>
      </div>
    );
  }

  return (
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
};

export default RouteFallback;
