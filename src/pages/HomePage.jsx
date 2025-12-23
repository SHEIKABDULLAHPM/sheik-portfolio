import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Cpu, Mail, MapPin } from 'lucide-react';
import githubIcon from '../assets/logo/github.png';
import hackerrankIcon from '../assets/logo/hackerrank.png';
import instagramIcon from '../assets/logo/insta.png';
import leetcodeIcon from '../assets/logo/leetcode.png';
import linkedinIcon from '../assets/logo/linkedin.png';
import gmailIcon from '../assets/logo/gmail.png';
import whatsappIcon from '../assets/logo/whatsapp.png';
import facebookIcon from '../assets/logo/facebook.png';
import { profile } from '../data/hero.js';
import { contactInfo, getSocialLinks } from '../data/contact.js';
const roles = ['Java Backend Developer', 'Spring Boot & Microservices', 'DSA Problem Solver', 'ML & AI Enthusiast'];

const heroSkills = ['Java', 'Spring Boot', 'Microservices', 'DSA', 'ML & AI'];

const infoTiles = [
  { label: 'Location', value: contactInfo.location, icon: MapPin },
  { label: 'Expertise', value: 'AI/ML, Problem Solving', icon: Cpu },
  { label: 'Primary Contact', value: contactInfo.email, icon: Mail, href: `mailto:${contactInfo.email}` },
];

const socialBuckets = [
  ...getSocialLinks('direct'),
  ...getSocialLinks('messaging'),
  ...getSocialLinks('social'),
].filter((link) => Boolean(link?.url));

const socialOrder = new Map();
const dedupedSocialLinks = socialBuckets.filter((link) => {
  if (!link?.id || socialOrder.has(link.id)) {
    return false;
  }
  socialOrder.set(link.id, socialOrder.size);
  return true;
});

const iconDirectory = {
  linkedin: linkedinIcon,
  instagram: instagramIcon,
  mail: gmailIcon,
  whatsapp: whatsappIcon,
  facebook: facebookIcon,
};

const getFallbackBadge = (label) => (label ? label.charAt(0).toUpperCase() : '?');

const priorityValue = (link) => {
  if (link.type === 'mail') {
    return -2;
  }
  if (link.type === 'whatsapp') {
    return -1;
  }
  return socialOrder.get(link.id) ?? Number.MAX_SAFE_INTEGER;
};

const socialLinks = [...dedupedSocialLinks]
  .sort((a, b) => priorityValue(a) - priorityValue(b))
  .map((link) => ({
    ...link,
    label: link.platform ?? link.ariaLabel ?? link.id,
    image: iconDirectory[link.type],
    external: link.type !== 'mail',
  }));
const socialLinksLabel = socialLinks.map((link) => link.label).join(' · ');

const workspaceLinks = getSocialLinks('workspace').map((link) => ({
	...link,
	image:
		link.type === 'github'
			? githubIcon
			: link.type === 'leetcode'
			?	leetcodeIcon
			: link.type === 'hackerrank'
			?	hackerrankIcon
			: githubIcon,
}));
const workspaceLinksLabel = workspaceLinks.map((link) => link.label).join(' · ');

const HomePage = () => {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;

  useEffect(() => {
    if (typeof document === 'undefined') {
      return undefined;
    }
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      return undefined;
    }
    const currentFullRole = roles[roleIndex];
    if (displayedRole !== currentFullRole) {
      setDisplayedRole(currentFullRole);
    }
    if (isDeleting) {
      setIsDeleting(false);
    }
    return undefined;
  }, [displayedRole, isDeleting, roleIndex, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate || !isTabVisible) {
      return undefined;
    }
    const currentRole = roles[roleIndex];
    const roleComplete = displayedRole === currentRole;
    const roleEmpty = displayedRole === '';

    let delay = isDeleting ? 60 : 110;
    if (!isDeleting && roleComplete) {
      delay = 1300;
    }
    if (isDeleting && roleEmpty) {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && roleComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && roleEmpty) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }

      const nextText = isDeleting
        ? currentRole.slice(0, Math.max(displayedRole.length - 1, 0))
        : currentRole.slice(0, displayedRole.length + 1);
      setDisplayedRole(nextText);
    }, delay);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, isTabVisible, roleIndex, shouldAnimate]);

  return (
  <div className="page-shell">
    <div className="page-stack">
        <section className="grid items-center gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)]">
          <div className="space-y-5 animate-soft-slide">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Introduction
            </span>
            <h1 className="text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-tight text-white md:leading-[1.05]">
              I'm Sheik Abdullah
            </h1>
            <p className="text-sm font-medium text-slate-100 sm:text-[0.95rem]">
              {displayedRole}
              <span className="caret ml-1 text-indigo-300">|</span>
            </p>
            <div className="flex flex-wrap gap-2 overflow-visible pb-1">
              {heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="shrink-0 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="max-w-2xl text-sm text-slate-300 text-balance sm:text-[0.95rem]">
              I focus on building reliable Java + Spring Boot services, pairing DSA discipline with experimentation across ML and AI initiatives.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {infoTiles.map(({ label, value, icon: Icon, href }) => {
              const isMailLink = href?.startsWith('mailto:');
              return (
                <div key={label} className="flex h-full flex-col justify-center gap-2 rounded-2xl border border-white/10 bg-slate-900/70 p-3.5 text-sm shadow-lg shadow-indigo-500/10">
                  <p className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-indigo-200">
                    <Icon size={14} /> {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="break-words text-sm font-medium text-white"
                      target={isMailLink ? undefined : '_blank'}
                      rel={isMailLink ? undefined : 'noopener noreferrer'}
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{value}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-400 to-emerald-300 blur-3xl opacity-60 glow-pulse sm:h-72 sm:w-72" />
          <div className="relative w-full max-w-[280px] rounded-[32px] border border-white/10 bg-slate-900/70 p-3 shadow-2xl shadow-indigo-500/20 backdrop-blur sm:max-w-[320px] sm:p-4">
            <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-[22px] border border-white/10">
              <img src={profile.image} alt={profile.name} className="h-full w-full object-cover" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-white/5" />
            </div>
            <p className="mt-2 text-center text-[10px] uppercase tracking-[0.32em] text-indigo-200">Pre-Final Year · CSBS</p>
          </div>
        </div>
      </section>

      <section className="page-grid page-grid--2">
        <div className="rounded-3xl border border-white/5 bg-slate-900/70 p-4 shadow-xl shadow-indigo-500/10 sm:p-5">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200 sm:text-sm">Social Links</p>
            <p className="text-xs text-slate-400">{socialLinksLabel}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:border-indigo-300 sm:h-14 sm:w-14"
                aria-label={link.label}
              >
                {link.image ? (
                  <img
                    src={link.image}
                    alt={`${link.label} logo`}
                    className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm font-semibold text-indigo-200 sm:text-base">
                    {getFallbackBadge(link.label)}
                  </span>
                )}
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/5 bg-slate-900/70 p-4 shadow-xl shadow-indigo-500/10 sm:p-5">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200 sm:text-sm">See what I'm doing</p>
            <p className="text-xs text-slate-400">{workspaceLinksLabel}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            {workspaceLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:border-indigo-300 sm:h-14 sm:w-14"
                aria-label={link.label}
              >
                <img src={link.image} alt={`${link.label} logo`} className="h-7 w-7 object-contain sm:h-9 sm:w-9" loading="lazy" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default HomePage;
