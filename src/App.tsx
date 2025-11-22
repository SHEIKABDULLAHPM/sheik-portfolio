import { motion } from 'framer-motion';
import {
  Navbar,
  Hero,
  SectionTitle,
  SkillCard,
  ProjectCard,
  Footer,
  BackgroundParticles,
} from './components';
import {
  Atom,
  Coffee,
  Code2,
  Database,
  FileCode2,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Palette,
  Phone,
  Sparkles,
} from 'lucide-react';

const skills = [
  { title: 'HTML', icon: Code2 },
  { title: 'CSS', icon: Palette },
  { title: 'JavaScript', icon: FileCode2 },
  { title: 'React', icon: Atom },
  { title: 'Java', icon: Coffee },
  { title: 'SQL', icon: Database },
  { title: 'Git & GitHub', icon: GitBranch },
  { title: 'Problem Solving', icon: Sparkles },
];

const certifications = [
  {
    provider: 'NPTEL',
    title: 'Foundations of Programming',
    year: '2024',
  },
  {
    provider: 'Udemy',
    title: 'React Essentials Bootcamp',
    year: '2023',
  },
  {
    provider: 'Coursera',
    title: 'Databases for Developers',
    year: '2023',
  },
];

const projects = [
  {
    title: 'Campus Companion App',
    description:
      'A responsive web application that helps students track assignments, events, and study groups in one place.',
    tech: ['React', 'TailwindCSS', 'Supabase'],
  },
  {
    title: '3D Portfolio Concept',
    description:
      'Interactive portfolio concept featuring lightweight 3D interactions powered by react-three-fiber.',
    tech: ['React', 'Three.js', 'Framer Motion'],
  },
  {
    title: 'Code Snippet Library',
    description:
      'A searchable library of reusable code snippets with tagging and quick copy support.',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Student Community Forum',
    description:
      'Community forum concept for peers to discuss coursework, internships, and hackathon prep.',
    tech: ['React', 'Supabase', 'PostgreSQL'],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      <BackgroundParticles />
      <div
        className="fixed inset-x-0 top-0 z-40 h-72 bg-gradient-to-b from-indigo-600/30 via-indigo-500/20 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <Navbar />
      <main className="space-y-24 pb-24 pt-16 sm:pt-20">
        <Hero />

        <motion.section
          id="about"
          className="mx-auto max-w-4xl px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="About" eyebrow="Background" />
          <div className="space-y-5 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8 text-lg leading-relaxed text-slate-300 shadow-lg shadow-indigo-500/10 backdrop-blur">
            <p>
              I am Sheik Abdullah, a passionate Computer Science and Business Systems student focused on
              crafting polished, accessible digital experiences. I enjoy translating ideas into delightful
              products using modern web technologies.
            </p>
            <p>
              Outside of academics, I explore creative coding, build small tools to streamline daily tasks, and
              collaborate with peers on hackathon projects. My goal is to join a forward-thinking engineering
              team where I can contribute to impactful software while continuously learning.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="mx-auto max-w-4xl px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Education" eyebrow="Journey" />
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8 shadow-lg shadow-indigo-500/10 backdrop-blur">
            <h3 className="text-2xl font-semibold text-white">B.Tech CSBS – 3rd Year</h3>
            <p className="mt-2 text-sm uppercase tracking-wide text-indigo-200">XYZ Institute of Technology</p>
            <p className="mt-3 text-sm text-slate-300">2022 – 2026</p>
            <p className="mt-4 text-base text-slate-300">
              Blending computer science fundamentals with business insights to design resilient, user-centered
              solutions.
            </p>
          </div>
        </motion.section>

        <section id="skills" className="mx-auto max-w-6xl px-6">
          <SectionTitle title="Skills" eyebrow="Toolkit" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <SkillCard key={skill.title} title={skill.title} icon={skill.icon} />
            ))}
          </div>
        </section>

        <motion.section
          id="certifications"
          className="mx-auto max-w-4xl px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Certifications" eyebrow="Learning" />
          <div className="space-y-4">
            {certifications.map((item) => (
              <div
                key={`${item.provider}-${item.title}`}
                className="flex flex-col gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/70 px-6 py-5 shadow-lg shadow-indigo-500/10 backdrop-blur sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-indigo-200">{item.provider}</p>
                </div>
                <span className="text-sm font-medium text-slate-400">{item.year}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="mx-auto max-w-4xl px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Experience" eyebrow="Growth" />
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8 text-center text-base text-slate-300 shadow-lg shadow-indigo-500/10 backdrop-blur">
            Currently gaining experience through projects and continuous learning. Open to internships and
            collaborative opportunities to apply and expand my skills.
          </div>
        </motion.section>

        <section id="projects" className="mx-auto max-w-6xl px-6">
          <SectionTitle title="Projects" eyebrow="Highlights" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          className="mx-auto max-w-6xl px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Contact" eyebrow="Connect" />
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8 shadow-xl shadow-indigo-500/10 backdrop-blur sm:p-10">
              <p className="text-base leading-relaxed text-slate-300">
                I&apos;m actively looking for meaningful internships, collaborative projects, and conversations around
                building thoughtful digital products. Reach out through any channel below—email is the fastest way to
                hear back.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:sheikabdullah@example.com"
                  className="group flex items-center gap-4 rounded-2xl border border-indigo-500/30 bg-slate-950/60 p-4 text-sm font-medium text-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 transition-all duration-300 group-hover:bg-indigo-500/30 group-hover:text-white">
                    <Mail size={20} />
                  </span>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs uppercase tracking-wide text-indigo-200/80 group-hover:text-indigo-100">Email</span>
                    <span className="text-sm font-semibold text-white">sheikabdullah@example.com</span>
                  </div>
                </a>
                <a
                  href="tel:+911234567890"
                  className="group flex items-center gap-4 rounded-2xl border border-indigo-500/30 bg-slate-950/60 p-4 text-sm font-medium text-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 transition-all duration-300 group-hover:bg-indigo-500/30 group-hover:text-white">
                    <Phone size={20} />
                  </span>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs uppercase tracking-wide text-indigo-200/80 group-hover:text-indigo-100">Phone</span>
                    <span className="text-sm font-semibold text-white">+91 12345 67890</span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-indigo-500/30 bg-slate-950/60 p-4 text-sm font-medium text-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 transition-all duration-300 group-hover:bg-indigo-500/30 group-hover:text-white">
                    <Linkedin size={20} />
                  </span>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs uppercase tracking-wide text-indigo-200/80 group-hover:text-indigo-100">LinkedIn</span>
                    <span className="text-sm font-semibold text-white">linkedin.com/in/sheikabdullah</span>
                  </div>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-indigo-500/30 bg-slate-950/60 p-4 text-sm font-medium text-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 transition-all duration-300 group-hover:bg-indigo-500/30 group-hover:text-white">
                    <Github size={20} />
                  </span>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs uppercase tracking-wide text-indigo-200/80 group-hover:text-indigo-100">GitHub</span>
                    <span className="text-sm font-semibold text-white">github.com/sheikabdullah</span>
                  </div>
                </a>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/50 p-5 text-sm text-slate-400">
                <p>
                  Based in India · Typically replies within one business day. Let&apos;s build something impactful
                  together.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
