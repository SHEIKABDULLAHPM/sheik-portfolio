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
  <div className="space-y-10">
    <PageHeader
      title="Contact"
      subtitle="Professional Channels"
    />
    <section className="grid gap-4 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5 md:grid-cols-3">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Email</p>
        <a href={`mailto:${contactInfo.email}`} className="text-base text-white">
          {contactInfo.email}
        </a>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Phone</p>
        <p className="text-base text-white">{contactInfo.phone}</p>
      </div>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Location</p>
        <p className="flex items-center gap-2 text-base text-white">
          <MapPin size={16} /> {contactInfo.location}
        </p>
      </div>
    </section>
    <section className="space-y-3 rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Socials</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {contactInfo.socials.map((social) => {
          const Icon = iconMap[social.type] ?? Mail;
          return (
            <a
              key={social.label}
              href={social.url}
              target={social.type === 'mail' ? undefined : '_blank'}
              rel={social.type === 'mail' ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-3 rounded-2xl border border-slate-800 px-4 py-3 text-sm text-white"
            >
              <Icon size={18} />
              {social.label}
            </a>
          );
        })}
      </div>
    </section>
    <section className="rounded-3xl border border-white/5 bg-slate-900/70 p-6 shadow-lg shadow-indigo-500/5">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Need a response fast?</p>
      <p className="mt-2 text-sm text-slate-200">
        Email with context is the fastest way to reach me. Include timelines or meeting preferences for a quicker reply.
      </p>
      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"><Mail size={14} /> Email</span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"><Phone size={14} /> Phone</span>
      </div>
    </section>
  </div>
);

export default ContactPage;
