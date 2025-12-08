import linkedinIcon from '../assets/logo/linkedin.png';
import gmailIcon from '../assets/logo/gmail.png';
import whatsappIcon from '../assets/logo/whatsapp.png';
import instagramIcon from '../assets/logo/insta.png';
import facebookIcon from '../assets/logo/facebook.png';
import leetcodeIcon from '../assets/logo/leetcode.png';
import hackerrankIcon from '../assets/logo/hackerrank.png';
import githubIcon from '../assets/logo/github.png';
import { contactInfo } from '../data/siteContent.js';

const whatsappDigits = contactInfo.phone.replace(/[^0-9]/g, '');

const sidebarLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/peer-sheik-abdullah-mohd-noordeen-b97148276/',
    icon: linkedinIcon,
    newTab: true,
  },
  {
    id: 'gmail',
    label: 'Gmail',
    url: `mailto:${contactInfo.email}`,
    icon: gmailIcon,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    url: whatsappDigits ? `https://wa.me/${whatsappDigits}` : undefined,
    icon: whatsappIcon,
    newTab: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/unary_man/',
    icon: instagramIcon,
    newTab: true,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100067640333725',
    icon: facebookIcon,
    newTab: true,
  },
  
].filter((item) => Boolean(item.url));

const SocialSidebar = () => (
  <aside className="pointer-events-none fixed right-2 top-1/2 z-40 hidden -translate-y-1/2 flex-col sm:right-4 lg:right-8 xl:right-12 2xl:right-20 lg:flex">
    <div className="pointer-events-auto flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/70 p-2 shadow-[0_18px_60px_rgba(2,6,23,0.65)] backdrop-blur">
      {sidebarLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target={link.newTab ? '_blank' : undefined}
          rel={link.newTab ? 'noopener noreferrer' : undefined}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 transition hover:border-indigo-400"
          aria-label={link.label}
        >
          <img src={link.icon} alt={`${link.label} logo`} className="h-5 w-5 object-contain" loading="lazy" />
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  </aside>
);

export default SocialSidebar;
