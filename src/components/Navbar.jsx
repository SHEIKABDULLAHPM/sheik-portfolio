import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open);
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  const linkClass = useMemo(
    () =>
      ({ isActive }) =>
        `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
          isActive
            ? 'bg-white/15 text-white'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`,
    []
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 shadow-[0_12px_60px_rgba(2,6,23,0.65)] backdrop-blur-lg'
          : 'bg-slate-950/40 backdrop-blur-md'
      }`}
    >
      <nav className="content-shell flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-semibold tracking-tight text-white sm:text-[2rem]">
          sheik<span className="text-indigo-300">.</span>
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {navigationLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <NavLink to="/resume" className="btn-secondary px-4 py-2 text-xs uppercase tracking-wide">
            Resume
          </NavLink>
          <Link to="/contact" className="btn-primary px-4 py-2 text-xs uppercase tracking-wide">
            Let&apos;s talk
          </Link>
        </div>
        <button
          type="button"
          className="rounded-full border border-white/10 p-2 text-slate-100 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <>
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} />
          <div className="content-shell lg:hidden">
            <div className="surface z-50 mt-3 flex flex-col gap-2 p-4">
              {navigationLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-white/15 text-white' : 'text-slate-200'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <NavLink
                  to="/resume"
                  className="rounded-2xl border border-white/15 px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </NavLink>
                <Link
                  to="/contact"
                  className="rounded-2xl bg-indigo-500 px-4 py-3 text-center text-sm font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s talk
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
};

export default Navbar;
