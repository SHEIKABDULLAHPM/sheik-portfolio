import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  {
    label: 'Email',
    href: 'mailto:sheikabdullahpeer@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/peer-sheik-abdullah-mohd-noordeen-b97148276/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/SHEIKABDULLAHPM',
    icon: Github,
  },
];

const Footer = () => (
  <footer className="border-t border-slate-800/80 bg-slate-950/90 py-5 sm:py-6">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-300 sm:flex-row sm:px-6">
      <p className="text-center text-slate-400 sm:text-left">&copy; {new Date().getFullYear()} Sheik Abdullah. All rights reserved.</p>
      <div className="flex items-center gap-4">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-indigo-500/30 bg-slate-900/60 text-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
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
