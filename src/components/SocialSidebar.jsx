import linkedinIcon from '../assets/logo/linkedin.png';
import gmailIcon from '../assets/logo/gmail.png';
import whatsappIcon from '../assets/logo/whatsapp.png';
import instagramIcon from '../assets/logo/insta.png';
import facebookIcon from '../assets/logo/facebook.png';
import { getSocialLinks } from '../data/contact.js';

const iconMap = {
	linkedin: linkedinIcon,
	mail: gmailIcon,
	instagram: instagramIcon,
	facebook: facebookIcon,
	whatsapp: whatsappIcon,
};

const sidebarLinks = [
  ...getSocialLinks('social'),
  ...getSocialLinks('messaging'),
  ...getSocialLinks('direct'),
]
  .filter((link) => Boolean(link?.url))
  .filter((link, index, array) => array.findIndex((item) => item.id === link.id) === index)
  .map((link) => ({
    ...link,
    icon: iconMap[link.type] ?? linkedinIcon,
    newTab: link.type !== 'mail',
    label: link.platform ?? link.ariaLabel ?? link.id,
    ariaLabel: link.ariaLabel ?? link.platform ?? link.id,
  }));

const SocialSidebar = () => (
  <aside className="pointer-events-none fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 flex-col sm:right-4 lg:right-8 xl:right-12 2xl:right-20 lg:flex">
    <div className="pointer-events-auto flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/70 p-2 shadow-[0_18px_60px_rgba(2,6,23,0.65)] backdrop-blur">
      {sidebarLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target={link.newTab ? '_blank' : undefined}
          rel={link.newTab ? 'noopener noreferrer' : undefined}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-b from-white to-slate-100 shadow-lg shadow-slate-900/40 transition hover:border-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
          aria-label={link.ariaLabel}
        >
          <img src={link.icon} alt={`${link.label} logo`} className="h-5 w-5 object-contain" loading="lazy" />
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  </aside>
);

export default SocialSidebar;
