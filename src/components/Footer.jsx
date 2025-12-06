import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { contactInfo } from '../data/siteContent.js';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

const Footer = () => (
  <footer className="border-t border-white/5 bg-slate-950/95">
    <div className="content-shell flex flex-col gap-4 py-6 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <p>© {new Date().getFullYear()} Peer Sheik Abdullah · Crafted with care.</p>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
        {contactInfo.socials.map((item) => {
          const Icon = iconMap[item.type] ?? Mail;
          return (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-[0.78rem] font-semibold text-slate-200 transition-colors hover:border-indigo-500 hover:text-white"
            >
              <Icon size={14} />
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  </footer>
);

export default Footer;
