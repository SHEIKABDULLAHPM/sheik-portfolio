import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import { contactInfo } from '../data/siteContent.js';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

const ContactPage = () => (
  <div className="space-y-12">
    <PageHeader
      title="Contact"
      subtitle="Professional Channels"
    />
    <section className="surface grid gap-4 md:grid-cols-3">
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
    <section className="surface space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-200">Socials</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {contactInfo.socials.map((social) => {
          const Icon = iconMap[social.type] ?? Mail;
          return (
            <a
              key={social.label}
              href={social.url}
              target={social.type === 'mail' ? undefined : '_blank'}
              rel={social.type === 'mail' ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-indigo-400"
            >
              <Icon size={18} />
              {social.label}
            </a>
          );
        })}
      </div>
    </section>
    <section className="surface space-y-3">
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
);

export default ContactPage;
