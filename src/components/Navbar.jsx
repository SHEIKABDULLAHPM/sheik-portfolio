import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Internship', href: '#internships' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const menuVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0 },
};

const clampSectionScroll = (selector) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const header = document.querySelector('header');
  const offset = header instanceof HTMLElement ? header.getBoundingClientRect().height + 12 : 80;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const targetPosition = Math.max(elementPosition - offset, 0);

  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  const headerClasses = useMemo(
    () =>
      `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70' : 'bg-transparent'
      }`,
    [isScrolled]
  );

  const handleLinkClick = (href) => {
    setIsOpen(false);
    requestAnimationFrame(() => clampSectionScroll(href));
  };

  return (
    <header className={headerClasses}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-2xl font-semibold tracking-tight text-white transition-colors duration-200 hover:text-indigo-300 sm:text-3xl"
        >
          Sheik<span className="text-indigo-400">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleLinkClick(link.href)}
              className="group relative overflow-hidden rounded-full px-3 py-2 hover:text-white will-change-transform"
              style={{ transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
            >
              <span 
                className="relative z-10 group-hover:-translate-y-0.5"
                style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', display: 'inline-block' }}
              >
                {link.label}
              </span>
              <span 
                className="pointer-events-none absolute inset-0 -z-10 bg-indigo-500/0 group-hover:bg-indigo-500/10"
                style={{ transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
              />
              <span 
                className="pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 group-hover:scale-x-100"
                style={{ transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-slate-200 transition-colors duration-200 hover:bg-slate-900/60 hover:text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-2 flex max-w-6xl flex-col gap-2 rounded-3xl border border-slate-800/80 bg-slate-900/80 px-6 py-4 text-sm font-medium text-slate-100 backdrop-blur md:hidden"
          >
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="group relative overflow-hidden rounded-2xl px-4 py-3 text-left transition-colors duration-500 hover:bg-indigo-500/10"
                style={{ transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                <span 
                  className="relative z-10 text-slate-100 group-hover:translate-x-1"
                  style={{ transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)', display: 'inline-block' }}
                >
                  {link.label}
                </span>
                <span 
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-400/0 via-indigo-400/60 to-purple-400/0 opacity-0 group-hover:opacity-100"
                  style={{ transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
