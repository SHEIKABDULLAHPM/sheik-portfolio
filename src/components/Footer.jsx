import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  {
    label: 'Email',
    href: 'mailto:sheikabdullah@example.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: Github,
  },
];

const Footer = () => (
  <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-400 sm:flex-row">
      <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} Sheik Abdullah. All rights reserved.</p>
      <div className="flex items-center gap-4">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-white"
            aria-label={label}
          >
            <Icon size={18} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/30 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
