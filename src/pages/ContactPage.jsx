import { Code2, Facebook, Github, Globe2, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Twitter } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { contactInfo } from '../data/contact.js';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  instagram: Instagram,
  facebook: Facebook,
  whatsapp: MessageCircle,
  leetcode: Code2,
  hackerrank: Code2,
};

const resolveIcon = (type) => iconMap[type] ?? Globe2;

const ContactPage = () => (
  <div className="page-shell">
    <div className="page-stack">
      <PageHeader
        title="Contact"
        subtitle="Professional Channels"
      />
    <section className="surface page-grid page-grid--3">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Email</p>
        <a href={`mailto:${contactInfo.email}`} className="text-base font-semibold text-white">
          {contactInfo.email}
        </a>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Phone</p>
        <p className="text-base font-semibold text-white">{contactInfo.phone}</p>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Location</p>
        <p className="flex items-center gap-2 text-base font-semibold text-white">
          <MapPin size={16} /> {contactInfo.location}
        </p>
      </div>
    </section>
    <section className="surface page-section">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Socials</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {contactInfo.socials.map((social) => {
          const Icon = resolveIcon(social.type);
          const isDirect = social.type === 'mail';
          const accessibleLabel = social.ariaLabel ?? social.platform;
          return (
            <a
              key={social.id}
              href={social.url}
              target={isDirect ? undefined : '_blank'}
              rel={isDirect ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-indigo-400"
              aria-label={accessibleLabel}
              title={social.platform}
            >
              <Icon size={18} />
              <span>{social.platform}</span>
            </a>
          );
        })}
      </div>
    </section>
    <section className="surface page-section">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Need a response fast?</p>
      <p className="text-sm text-slate-200 sm:text-[0.95rem]">
        Email with a hint of context and timelines is the quickest route to a reply. I usually respond within one business day.
      </p>
      <div className="flex flex-wrap gap-3 text-sm text-slate-300">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"><Mail size={14} /> Email</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"><Phone size={14} /> Phone</span>
      </div>
    </section>
    </div>
  </div>
);

export default ContactPage;
