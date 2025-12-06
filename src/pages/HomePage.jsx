import { useEffect, useState } from 'react';
import { Code2, Cpu, Facebook, Github, Hexagon, Instagram, Linkedin, Mail, MapPin, Utensils } from 'lucide-react';
import { profile } from '../data/siteContent.js';

const roles = ['Java Backend Developer', 'Spring Boot & Microservices', 'DSA Problem Solver', 'ML & AI Enthusiast'];

const heroSkills = ['Java', 'Spring Boot', 'Microservices', 'DSA', 'ML & AI'];

const infoTiles = [
  { label: 'Location', value: 'Pallapatti, Tamil Nadu', icon: MapPin },
  { label: 'Expertise', value: 'AI/ML, Problem Solving', icon: Cpu },
  { label: 'Primary Contact', value: 'sheikabdullahpeer@gmail.com', icon: Mail, href: 'mailto:sheikabdullahpeer@gmail.com' },
];

const socialLinks = [
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/peer-sheik-abdullah-mohd-noordeen-b97148276/',
    icon: Linkedin,
    label: 'LinkedIn',
    external: true,
  },
  {
    id: 'instagram',
    url: 'https://www.instagram.com/unary_man/',
    icon: Instagram,
    label: 'Instagram',
    external: true,
  },
  {
    id: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=100067640333725',
    icon: Facebook,
    label: 'Facebook',
    external: true,
  },
];

const workspaceLinks = [
  {
    id: 'github',
    url: 'https://github.com/SHEIKABDULLAHPM',
    icon: Github,
    label: 'GitHub',
  },
  {
    id: 'leetcode',
    url: 'https://leetcode.com/u/T5dGt4g82v/',
    icon: Code2,
    label: 'LeetCode',
  },
  {
    id: 'hackerrank',
    url: 'https://www.hackerrank.com/profile/Peer_Master',
    icon: Hexagon,
    label: 'HackerRank',
  },
  {
    id: 'codechef',
    url: 'https://www.codechef.com/users/Peer_Master',
    icon: Utensils,
    label: 'CodeChef',
  },
];

const HomePage = () => {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <div className="space-y-8 lg:space-y-12">
      <section className="grid items-center gap-6 md:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)]">
        <div className="space-y-5 animate-soft-slide">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-indigo-200">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              Introduction
            </span>
            <h1 className="text-[clamp(1.85rem,4vw,2.9rem)] font-semibold leading-tight text-white md:leading-[1.05]">
              I'm Sheik Abdullah
            </h1>
            <p className="text-sm font-medium text-slate-100 sm:text-base">
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
            <p className="max-w-2xl text-sm text-slate-300 text-balance sm:text-base">
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
          <div className="relative w-full max-w-[280px] rounded-[32px] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-indigo-500/20 backdrop-blur sm:max-w-[320px]">
            <div className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-[22px] border border-white/10">
              <img src={profile.image} alt={profile.name} className="h-full w-full object-cover" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 rounded-[22px] border border-white/5" />
            </div>
            <p className="mt-3 text-center text-[10px] uppercase tracking-[0.32em] text-indigo-200">Pre-Final Year · CSBS</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/5 bg-slate-900/70 p-4 shadow-xl shadow-indigo-500/10 sm:p-5">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200 sm:text-sm">Social Links</p>
            <p className="text-xs text-slate-400">LinkedIn · Instagram · Facebook</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:border-indigo-300"
                aria-label={link.label}
              >
                <link.icon size={18} className="text-indigo-200" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/5 bg-slate-900/70 p-4 shadow-xl shadow-indigo-500/10 sm:p-5">
          <div className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-indigo-200 sm:text-sm">See what I'm doing</p>
            <p className="text-xs text-slate-400">GitHub · LeetCode · HackerRank · CodeChef</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {workspaceLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition hover:border-indigo-300"
                aria-label={link.label}
              >
                <link.icon size={18} className="text-indigo-200" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
