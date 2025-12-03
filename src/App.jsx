import { Suspense, lazy, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Navbar,
  Hero,
  SectionTitle,
  SkillCard,
  ProjectCard,
  CertificateCarousel,
  Footer,
} from './components';
import campusCompanionImg from './assets/projects/campus-companion-app.svg';
import portfolioConceptImg from './assets/projects/3d-portfolio-concept.svg';
import codeSnippetImg from './assets/projects/code-snippet-library.svg';
import communityForumImg from './assets/projects/student-community-forum.svg';
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

const BackgroundParticles = lazy(() => import('./components/BackgroundParticles.jsx'));

const skills = [
  {
    title: 'Programming Languages',
    icon: FileCode2,
    items: [
      { name: 'Python', proficiency: 78 },
      { name: 'Java', proficiency: 75 },
      { name: 'C', proficiency: 54 },
      { name: 'JavaScript', proficiency: 80 },
    ],
  },
  {
    title: 'Core CS Concepts',
    icon: Atom,
    items: [
      { name: 'Data Structures & Algorithms', proficiency: 74 },
      { name: 'Object-Oriented Programming', proficiency: 85 },
      { name: 'Algorithm Design', proficiency: 72 },
    ],
  },
  {
    title: 'Web Development',
    icon: Palette,
    items: [
      { name: 'HTML', proficiency: 90 },
      { name: 'CSS', proficiency: 82 },
      { name: 'JavaScript', proficiency: 80 },
      { name: 'React', proficiency: 78 },
      { name: 'Node.js & Express.js', proficiency: 72 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    items: [
      { name: 'MySQL', proficiency: 76 },
      { name: 'MongoDB', proficiency: 70 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: Code2,
    items: [
      { name: 'NumPy & Pandas', proficiency: 72 },
      { name: 'Matplotlib & Seaborn', proficiency: 68 },
      { name: 'Scikit-learn', proficiency: 70 },
      { name: 'TensorFlow & PyTorch', proficiency: 45 },
    ],
  },
  {
    title: 'Java Concepts (Oracle Track)',
    icon: Coffee,
    items: [
      { name: 'Core Java', proficiency: 78 },
      { name: 'Exception Handling · Collections · Generics', proficiency: 72 },
      { name: 'Lambda & Streams', proficiency: 65 },
      { name: 'JVM Basics', proficiency: 62 },
      { name: 'Multithreading', proficiency: 50 },
      { name: 'File I/O', proficiency: 68 },
    ],
  },
  {
    title: 'Tools & Analytics Platforms',
    icon: GitBranch,
    items: [
      { name: 'Git · GitHub · VS Code · REST APIs', proficiency: 78 },
      { name: 'Postman · Swagger · API Testing', proficiency: 74 },
      { name: 'Power BI · Data Analysis · DAX', proficiency: 72 },
      { name: 'Jupyter · Google Colab · Notebooks', proficiency: 74 },
      { name: 'Figma · UI Wireframing', proficiency: 55 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Sparkles,
    items: [
      { name: 'Problem-Solving', proficiency: 88 },
      { name: 'Communication', proficiency: 85 },
      { name: 'Teamwork', proficiency: 86 },
      { name: 'Adaptability', proficiency: 90 },
    ],
  },
];

const certifications = [
  {
    provider: 'Udemy',
    title: 'React: All You Need to Know with Practical Project',
    year: '2025',
    link: 'https://www.udemy.com/course/react-all-you-need-to-know-with-practical-project/',
    keywords: ['React', 'Hooks', 'Project-Based'],
  },
  {
    provider: 'Udemy',
    title: 'Dart & Flutter | The Complete Flutter Development Course',
    year: '2025',
    link: 'https://www.udemy.com/course/dart-and-flutter-the-complete-flutter-app-development-course/',
    keywords: ['Flutter', 'Mobile', 'Dart'],
  },
  {
    provider: 'Udemy',
    title: 'Python – Introduction to Data Science and Machine Learning A–Z',
    year: '2025',
    link: 'https://www.udemy.com/course/data-science-and-machine-learning-with-python-hands-on/',
    keywords: ['Python', 'Data Science', 'Machine Learning'],
  },
  {
    provider: 'Udemy',
    title: 'Business Analysis with Visually Effective Power BI Reports',
    year: '2025',
    link: 'https://www.udemy.com/course/business-analysis-with-power-bi/',
    keywords: ['Power BI', 'Business Analysis', 'Data Visualization'],
  },
  {
    provider: 'Oracle University',
    title: 'OCI AI Foundations Associate',
    year: '2025',
    link: 'https://education.oracle.com/oracle-cloud-infrastructure-ai-foundations/pexam_1Z0-1127-23',
    keywords: ['Oracle Cloud', 'AI', 'Foundations'],
  },
];

const projects = [
  {
    title: 'Campus Companion App',
    description:
      'A responsive web application that helps students track assignments, events, and study groups in one place.',
    tech: ['React', 'TailwindCSS', 'Supabase'],
    image: campusCompanionImg,
  },
  {
    title: '3D Portfolio Concept',
    description:
      'Interactive portfolio concept featuring lightweight 3D interactions powered by react-three-fiber.',
    tech: ['React', 'Three.js', 'Framer Motion'],
    image: portfolioConceptImg,
  },
  {
    title: 'Code Snippet Library',
    description:
      'A searchable library of reusable code snippets with tagging and quick copy support.',
    tech: ['React', 'TypeScript', 'TailwindCSS'],
    image: codeSnippetImg,
  },
  {
    title: 'Student Community Forum',
    description:
      'Community forum concept for peers to discuss coursework, internships, and hackathon prep.',
    tech: ['React', 'Supabase', 'PostgreSQL'],
    image: communityForumImg,
  },
];

const education = [
  {
    institution: 'Bannari Amman Institute of Technology',
    location: 'Sathyamangalam',
    period: '2023-2027',
    program: 'B.Tech in Computer Science and Business Systems',
    gradeLabel: 'Current CGPA',
    gradeValue: '7.65',
  },
  {
    institution: 'Arumugam Academy Matric Hr. Sec. School',
    location: 'Aravakuruchi',
    period: '2021-2023',
    program: 'Higher Secondary Education · CS-Maths Stream',
    gradeLabel: 'Score',
    gradeValue: '86%',
  },
  {
    institution: "M.G.M Academy's High School",
    location: 'Virar (East)',
    period: '2016-2020',
    program: 'Secondary Education',
    gradeLabel: 'Score',
    gradeValue: '65%',
  },
];

const internships = [
  {
    company: 'TechNova Labs',
    role: 'Frontend Developer Intern',
    period: 'Jun 2024 – Aug 2024',
    location: 'Remote',
    highlights: [
      'Developed responsive React interfaces with Tailwind CSS and Framer Motion, improving usability scores in stakeholder reviews.',
      'Collaborated with backend teams to integrate REST APIs and reduced perceived load time by 20% through skeleton states.',
    ],
  },
  {
    company: 'Insight Analytics Hub',
    role: 'Data & BI Intern',
    period: 'Jan 2024 – Mar 2024',
    location: 'Chennai, India',
    highlights: [
      'Built automated Power BI dashboards that consolidated marketing KPIs and cut weekly reporting time by 6 hours.',
      'Streamlined data-cleaning notebooks in Python, boosting pipeline reliability and enabling faster what-if analysis.',
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [pinnedSkills, setPinnedSkills] = useState([]);

  const handleSkillHover = useCallback((title, isHovering) => {
    setActiveSkill((current) => {
      if (isHovering) {
        return title;
      }
      return current === title ? null : current;
    });
  }, []);

  const handlePinToggle = useCallback((title) => {
    let removed = false;
    setPinnedSkills((current) => {
      if (current.includes(title)) {
        removed = true;
        return current.filter((item) => item !== title);
      }
      return [...current, title];
    });
    setActiveSkill((current) => {
      if (removed) {
        return current === title ? null : current;
      }
      return title;
    });
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      <Suspense fallback={null}>
        <BackgroundParticles />
      </Suspense>
      <div
        className="fixed inset-x-0 top-0 z-40 h-72 bg-gradient-to-b from-indigo-600/30 via-indigo-500/20 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <Navbar />
      <main className="space-y-16 pb-16 pt-16 sm:space-y-20 sm:pb-20 sm:pt-20 lg:space-y-24 lg:pb-24">
        <Hero />

        <motion.section
          id="about"
          className="mx-auto w-full max-w-6xl px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="About" eyebrow="Background" />
          <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 leading-relaxed text-slate-300 shadow-lg shadow-indigo-500/10 backdrop-blur sm:space-y-5 sm:p-6 text-[clamp(0.95rem,1.9vw,1.125rem)]">
            <p>
              I'm a motivated Computer Science and Business Systems student with a strong passion for web
              development, artificial intelligence, and machine learning. I enjoy creating modern, responsive,
              and user-friendly web applications using HTML, CSS, JavaScript, and React, while exploring backend
              development with Node.js and Express.js alongside programming in C, Python, and Java.
            </p>
            <p>
              I love solving problems and writing clean, efficient, and meaningful code. With a growing interest
              in intelligent systems, I’m actively building my skills in data science, Power BI, data analysis,
              machine learning algorithms, and Oracle Java. Curious by nature and quick to learn, I enjoy
              experimenting with new ideas, working on real-world projects, and continuously improving myself.
              My goal is to contribute to a forward-thinking, innovative tech environment while growing as a
              developer and tech enthusiast.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="mx-auto w-full max-w-6xl px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Education" eyebrow="Journey" />
          <div className="space-y-2.5 sm:space-y-3.5">
            {education.map((item) => (
              <div
                key={`${item.institution}-${item.period}`}
                className="flex flex-col gap-2.5 rounded-2xl border border-slate-800/70 bg-slate-900/75 p-4 shadow-lg shadow-indigo-500/10 backdrop-blur transition-all duration-400 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/20 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:p-5"
                style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                <div className="space-y-1.5 sm:space-y-1.5">
                  <h3 className="text-base font-semibold leading-tight text-white sm:text-lg lg:text-xl">{item.institution}</h3>
                  <p className="text-xs uppercase tracking-wide text-indigo-200/80 sm:text-sm">
                    {item.location} · {item.period}
                  </p>
                  <p className="text-sm text-slate-300 sm:text-base">{item.program}</p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-1 rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-3 text-right sm:p-4">
                  <span className="text-[10px] uppercase tracking-wide text-indigo-200/70 sm:text-xs">{item.gradeLabel}</span>
                  <span className="text-xl font-semibold text-white sm:text-2xl">{item.gradeValue}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="skills" 
          className="mx-auto w-full max-w-6xl px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle title="Skills" eyebrow="Toolkit" />
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
            {skills.map((skill) => {
              const isPinned = pinnedSkills.includes(skill.title);
              const isExpanded = activeSkill === skill.title || isPinned;

              return (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  icon={skill.icon}
                  items={skill.items}
                  expanded={isExpanded}
                  isPinned={isPinned}
                  onHoverChange={(isHovering) => handleSkillHover(skill.title, isHovering)}
                  onPinToggle={() => handlePinToggle(skill.title)}
                />
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          className="mx-auto w-full max-w-6xl px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Certificates" eyebrow="Learning" />
          <CertificateCarousel items={certifications} className="mx-auto" />
        </motion.section>

        <motion.section
          id="internships"
          className="mx-auto w-full max-w-6xl px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Internship" eyebrow="Hands-on Experience" />
          <div className="space-y-3 sm:space-y-3.5">
            {internships.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-2xl border border-slate-800/70 bg-slate-900/75 p-4 shadow-lg shadow-indigo-500/10 backdrop-blur transition-all duration-400 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/20 sm:p-5"
                style={{ transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold leading-tight text-white sm:text-lg">{item.role}</h3>
                    <p className="text-xs text-indigo-200/90 sm:text-sm">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-slate-400 sm:text-sm">{item.period}</span>
                </div>
                <ul className="mt-3 space-y-2 leading-relaxed text-slate-300 text-[clamp(0.875rem,1.6vw,1rem)]">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                      <p>{highlight}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="mx-auto w-full max-w-6xl px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Experience" eyebrow="Growth" />
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 text-center text-sm text-slate-300 shadow-lg shadow-indigo-500/10 backdrop-blur sm:p-6 sm:text-base">
            Currently gaining experience through projects and continuous learning. Open to internships and
            collaborative opportunities to apply and expand my skills.
          </div>
        </motion.section>

        <motion.section 
          id="projects" 
          className="mx-auto w-full max-w-6xl px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle title="Projects" eyebrow="Highlights" />
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto w-full max-w-6xl px-5 sm:px-6"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          variants={sectionVariants}
        >
          <SectionTitle title="Contact" eyebrow="Connect" />
          <div className="mx-auto max-w-6xl">
            <div className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-xl shadow-indigo-500/10 backdrop-blur sm:space-y-8 sm:p-6 lg:p-8">
              <p className="leading-relaxed text-slate-300 text-[clamp(0.95rem,1.9vw,1.125rem)]">
                I&apos;m actively looking for meaningful internships, collaborative projects, and conversations around
                building thoughtful digital products. Reach out through any channel below—email is the fastest way to
                hear back.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <a
                  href="mailto:sheikabdullahpeer@gmail.com"
                  className="group flex transform-gpu items-center gap-3 rounded-2xl border border-indigo-500/30 bg-slate-950/60 p-4 text-sm font-medium text-indigo-200 will-change-transform transition-all duration-500 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white sm:gap-4 sm:p-5"
                  style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 will-change-transform group-hover:bg-indigo-500/30 group-hover:text-white sm:h-11 sm:w-11" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <Mail size={18} className="sm:hidden" />
                    <Mail size={20} className="hidden sm:block" />
                  </span>
                  <div className="flex min-w-0 flex-col gap-0.5 text-left sm:gap-1">
                    <span className="text-[10px] uppercase tracking-wide text-indigo-200/80 transition-colors duration-300 group-hover:text-indigo-100 sm:text-xs" style={{ transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>Email</span>
                    <span className="truncate text-xs font-semibold text-white sm:text-sm">sheikabdullahpeer@gmail.com</span>
                  </div>
                </a>
                <a
                  href="tel:+919384753881"
                  className="group flex transform-gpu items-center gap-4 rounded-2xl border border-indigo-500/30 bg-slate-950/60 p-4 text-sm font-medium text-indigo-200 will-change-transform transition-all duration-500 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white sm:p-5"
                  style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 will-change-transform group-hover:bg-indigo-500/30 group-hover:text-white" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <Phone size={20} />
                  </span>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs uppercase tracking-wide text-indigo-200/80 transition-colors duration-300 group-hover:text-indigo-100" style={{ transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>Phone</span>
                    <span className="text-sm font-semibold text-white">+91 93847 53881</span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/peer-sheik-abdullah-mohd-noordeen-b97148276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex transform-gpu items-center gap-4 rounded-2xl border border-indigo-500/30 bg-slate-950/60 p-4 text-sm font-medium text-indigo-200 will-change-transform transition-all duration-500 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white sm:p-5"
                  style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 will-change-transform group-hover:bg-indigo-500/30 group-hover:text-white" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <Linkedin size={20} />
                  </span>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs uppercase tracking-wide text-indigo-200/80 transition-colors duration-300 group-hover:text-indigo-100" style={{ transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>LinkedIn</span>
                    <span className="text-sm font-semibold text-white">linkedin.com/in/peer-sheik-abdullah</span>
                  </div>
                </a>
                <a
                  href="https://github.com/SHEIKABDULLAHPM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex transform-gpu items-center gap-4 rounded-2xl border border-indigo-500/30 bg-slate-950/60 p-4 text-sm font-medium text-indigo-200 will-change-transform transition-all duration-500 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-500/10 hover:text-white sm:p-5"
                  style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-300 will-change-transform group-hover:bg-indigo-500/30 group-hover:text-white" style={{ transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <Github size={20} />
                  </span>
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-xs uppercase tracking-wide text-indigo-200/80 transition-colors duration-300 group-hover:text-indigo-100" style={{ transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}>GitHub</span>
                    <span className="text-sm font-semibold text-white">github.com/SHEIKABDULLAHPM</span>
                  </div>
                </a>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-950/50 p-4 text-sm text-slate-400 sm:p-5">
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
