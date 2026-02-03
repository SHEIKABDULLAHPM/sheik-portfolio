'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/internships' },
  { label: 'Skills', path: '/skills' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
];

const MOBILE_MENU_ID = 'mobile-nav-panel';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }
    document.body.classList.toggle('overflow-hidden', open);
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (!open || typeof window === 'undefined') {
      return undefined;
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  const getIsActive = useMemo(
    () => (targetPath) => {
      if (!pathname) {
        return false;
      }
      if (targetPath === '/') {
        return pathname === '/';
      }
      return pathname.startsWith(targetPath);
    },
    [pathname],
  );

  const getLinkClasses = useMemo(
    () =>
      (targetPath) =>
        `rounded-full px-3.5 py-1.5 text-[0.85rem] font-semibold transition-colors ${
          getIsActive(targetPath)
            ? 'bg-white/15 text-white'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`,
    [getIsActive],
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 shadow-[0_12px_60px_rgba(2,6,23,0.65)] backdrop-blur-lg'
          : 'bg-slate-950/40 backdrop-blur-md'
      }`}
    >
      <nav aria-label="Primary" className="content-shell layout-shell flex flex-wrap items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white sm:text-2xl" onClick={() => setOpen(false)}>
          Sheik<span className="text-indigo-300"> .</span>
        </Link>
        <div className="hidden items-center gap-1.5 lg:flex xl:gap-2">
          {navigationLinks.map((link) => (
            <Link key={link.path} href={link.path} className={getLinkClasses(link.path)} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/resume" className="btn-secondary px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em]" onClick={() => setOpen(false)}>
            Resume
          </Link>
          <Link href="/contact" className="btn-primary px-4 py-2 text-[0.7rem] uppercase tracking-[0.28em]" onClick={() => setOpen(false)}>
            Let&apos;s talk
          </Link>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-slate-100 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls={MOBILE_MENU_ID}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <>
          <div className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />
          <div className="fixed inset-x-0 top-[4.25rem] z-50 px-4 pb-8 sm:top-[4.75rem] sm:px-6 lg:hidden">
            <div className="mx-auto w-full max-w-xl" id={MOBILE_MENU_ID}>
              <div className="mt-0 flex max-h-[70vh] flex-col gap-2 overflow-y-auto rounded-[28px] border border-white/12 bg-gradient-to-b from-[#080f2d]/95 via-[#050b20]/95 to-[#02060f]/98 p-4 shadow-[0_25px_80px_rgba(2,6,23,0.65)] backdrop-blur-2xl">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold tracking-wide ${
                      getIsActive(link.path) ? 'bg-white/15 text-white' : 'text-slate-200 hover:bg-white/10'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <Link
                    href="/resume"
                    className="rounded-2xl border border-white/15 px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white leading-tight whitespace-normal"
                    onClick={() => setOpen(false)}
                  >
                    Resume
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-2xl bg-indigo-500 px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white leading-tight whitespace-normal"
                    onClick={() => setOpen(false)}
                  >
                    Let&apos;s talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Navbar;
