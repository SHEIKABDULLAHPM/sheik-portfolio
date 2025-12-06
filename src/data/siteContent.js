import profileImage from '../assets/sheik-abdullah.jpg';
import pythonCertificateImage from '../assets/DS AND ML.png';
import flutterCertificateImage from '../assets/FLUTTER.png';
import oracleCertificateImage from '../assets/ORACLE AI.png';
import powerBiCertificateImage from '../assets/POWER BI.png';
import reactCertificateImage from '../assets/REACT.png';

export const profile = {
	name: 'Peer Sheik Abdullah Mohd Noordeen',
	role: 'Full-stack Developer · CSBS Undergraduate',
	summary:
		'I build thoughtful digital experiences that combine clean interfaces, measurable impact, and well-tested engineering practices.',
	location: 'Chennai, India',
	image: profileImage,
	highlights: ['Design systems', 'API integrations', 'AI-assisted prototyping'],
	availability: 'Available for internships from Jan 2025',
	socials: [
		{ label: 'GitHub', url: 'https://github.com/SHEIKABDULLAHPM', type: 'github' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/peer-sheik-abdullah-mohd-noordeen-b97148276/', type: 'linkedin' },
		{ label: 'Twitter', url: 'https://x.com/SheikAbdul42993', type: 'twitter' },
		{ label: 'Email', url: 'mailto:sheikabdullahpeer@gmail.com', type: 'mail' },
	],
};

export const projects = [
	{
		id: 'smart-hostel',
		title: 'Smart Hostel & Mess Management',
		description:
			'A modern web-based system designed to simplify hostel and mess operations. It automates room allocation, attendance, mess scheduling, payments, and feedback tracking, helping administrators and residents manage everything seamlessly in one place.',
		filters: ['Full-Stack Web Apps'],
		tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
		image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80',
		github: 'https://github.com/SHEIKABDULLAHPM/smart-hostel-and-mess-management',
		live: 'https://smart-hostel-and-mess-management.vercel.app/',
	},
	{
		id: 'mindpeace',
		title: 'MindPeace – Mental Health Support Platform',
		description:
			'An AI-powered wellness platform that helps users track emotions, get personalized insights, and access guided exercises. MindPeace focuses on privacy, security, and multilingual support to make mental health assistance accessible to everyone.',
		filters: ['AI / Machine Learning'],
		tech: ['Next.js', 'Supabase', 'TensorFlow.js', 'Tailwind CSS'],
		image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
		github: 'https://github.com/SHEIKABDULLAHPM/mental-health-support',
		live: 'https://mental-health-support-t9cg.vercel.app/',
	},
	{
		id: 'ai-careerpath',
		title: 'AI CareerPath',
		description:
			'A personalized AI-driven career guidance platform that analyzes user skills, interests, and goals to recommend learning paths, certifications, and job opportunities. Built to help students and professionals transition into AI with clarity and confidence.',
		filters: ['AI / Machine Learning'],
		tech: ['React', 'FastAPI', 'OpenAI API', 'PostgreSQL'],
		image: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=900&q=80',
		github: 'https://github.com/SHEIKABDULLAHPM/ai-careerpath',
		live: 'https://ai-careerpath.vercel.app',
	},
	{
		id: 'text-to-image',
		title: 'Text-to-Image Gen AI',
		description:
			'A deep-learning–based system that converts text prompts into high-quality images. Ideal for creators, educators, and researchers, this project demonstrates expertise in generative AI, computer vision, and natural language processing.',
		filters: ['Generative AI', 'AI / Machine Learning'],
		tech: ['Python', 'Diffusers', 'FastAPI', 'Docker'],
		image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
		github: 'https://github.com/SHEIKABDULLAHPM/text-to-image-gen-ai',
		live: 'https://text-to-image-gen-ai-e2pq.vercel.app/',
	},
	{
		id: 'railway-dashboard',
		title: 'Railway AI Dashboard – Decision Support System',
		description:
			'A production-ready decision-support dashboard built with Next.js and TypeScript. Provides real-time railway monitoring, predictive analytics, scenario simulations, and intelligent recommendations to improve operational efficiency and safety.',
		filters: ['Dashboards / Data Visualization', 'AI / Machine Learning'],
		tech: ['Next.js', 'TypeScript', 'Supabase', 'D3.js'],
		image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
		github: 'https://github.com/SHEIKABDULLAHPM/AI-powered-Railway-Decision-Support-Dashboard',
		live: 'https://railway-ai-dashboard.vercel.app',
	},
];

export const gallery = [
	{
		category: 'Personal',
		description: 'Weekends, hobbies, and the small moments that keep me balanced.',
		items: [
			{
				id: 'personal-1',
				caption: 'Morning ride along ECR',
				src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
			},
			{
				id: 'personal-2',
				caption: 'Sketching UI concepts offline',
				src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
			},
			{
				id: 'personal-3',
				caption: 'Capturing city lights after rain',
				src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		category: 'Projects',
		description: 'Snapshots from prototypes, whiteboards, and UI explorations.',
		items: [
			{
				id: 'projects-1',
				caption: 'Design handoff for companion app',
				src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80',
			},
			{
				id: 'projects-2',
				caption: 'Component library sketches',
				src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
			},
			{
				id: 'projects-3',
				caption: 'Testing mobile flows with users',
				src: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		category: 'Achievements',
		description: 'Milestones, hackathons, and the walls of fame that keep me motivated.',
		items: [
			{
				id: 'achievements-1',
				caption: 'College tech symposium mention',
				src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=900&q=80',
			},
			{
				id: 'achievements-2',
				caption: 'Poster presentation on AI ethics',
				src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
			},
			{
				id: 'achievements-3',
				caption: 'Recognised for mentoring juniors',
				src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
	{
		category: 'Experience',
		description: 'Internship snapshots, workshops, and hands-on sessions.',
		items: [
			{
				id: 'experience-1',
				caption: 'Pair-programming at TechNova Labs',
				src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80',
			},
			{
				id: 'experience-2',
				caption: 'Data storytelling workshop',
				src: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80',
			},
			{
				id: 'experience-3',
				caption: 'Power BI dashboard review',
				src: 'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?auto=format&fit=crop&w=900&q=80',
			},
		],
	},
];

export const skillDecks = [
	{
		id: 'programming-languages',
		title: 'Programming Languages',
		defaultPinned: true,
		items: [
			{ name: 'Java', proficiency: 90 },
			{ name: 'Python', proficiency: 70 },
			{ name: 'C', proficiency: 50 },
			{ name: 'JavaScript', proficiency: 40 },
		],
	},
	{
		id: 'core-cs-concepts',
		title: 'Core CS Concepts',
		defaultPinned: true,
		items: [
			{ name: 'Data Structures & Algorithms', proficiency: 87 },
			{ name: 'Object-Oriented Programming', proficiency: 93 },
			{ name: 'Algorithm Design', proficiency: 84 },
		],
	},
	{
		id: 'web-development',
		title: 'Web Development',
		defaultPinned: true,
		items: [
			{ name: 'HTML', proficiency: 95 },
			{ name: 'CSS', proficiency: 91 },
			{ name: 'JavaScript', proficiency: 90 },
			{ name: 'React', proficiency: 88 },
			{ name: 'Node.js & Express.js', proficiency: 82 },
		],
	},
	{
		id: 'databases',
		title: 'Databases',
		defaultPinned: false,
		items: [
			{ name: 'MySQL', proficiency: 88 },
			{ name: 'MongoDB', proficiency: 80 },
		],
	},
	{
		id: 'ai-machine-learning',
		title: 'AI & Machine Learning',
		defaultPinned: false,
		items: [
			{ name: 'NumPy & Pandas', proficiency: 85 },
			{ name: 'Matplotlib & Seaborn', proficiency: 80 },
			{ name: 'Scikit-learn', proficiency: 83 },
			{ name: 'TensorFlow & PyTorch', proficiency: 68 },
		],
	},
	{
		id: 'java-oracle-track',
		title: 'Java Concepts (Oracle Track)',
		defaultPinned: false,
		items: [
			{ name: 'Core Java', proficiency: 88 },
			{ name: 'Collections & Generics', proficiency: 82 },
			{ name: 'Lambda & Streams', proficiency: 78 },
			{ name: 'JVM Basics', proficiency: 74 },
			{ name: 'Multithreading', proficiency: 71 },
			{ name: 'File I/O', proficiency: 76 },
		],
	},
	{
		id: 'tools-analytics-platforms',
		title: 'Tools & Analytics Platforms',
		defaultPinned: false,
		items: [
			{ name: 'Git · GitHub · VS Code · REST APIs', proficiency: 88 },
			{ name: 'Postman · Swagger · API Testing', proficiency: 84 },
			{ name: 'Power BI · Data Analysis · DAX', proficiency: 82 },
			{ name: 'Jupyter · Google Colab · Notebooks', proficiency: 83 },
			{ name: 'Figma · UI Wireframing', proficiency: 72 },
		],
	},
	{
		id: 'soft-skills',
		title: 'Soft Skills',
		defaultPinned: true,
		items: [
			{ name: 'Problem-Solving', proficiency: 93 },
			{ name: 'Communication', proficiency: 90 },
			{ name: 'Teamwork', proficiency: 92 },
			{ name: 'Adaptability', proficiency: 95 },
			{ name: 'Continuous Learning', proficiency: 94 },
		],
	},
];

export const certificates = [
	{
		id: 'cert-powerbi-udemy',
		title: 'Microsoft Power BI Desktop – Business Intelligence & Data Visualization',
		provider: 'Udemy Certificate',
		year: '2025',
		category: 'Analytics',
		type: 'Courses',
		technologies: ['Power BI', 'Data Visualization'],
		link: 'https://www.udemy.com/certificate/UC-f233b10e-d2a4-4413-88a9-f4763276d9a3/',
		image: powerBiCertificateImage,
	},
	{
		id: 'cert-python-udemy',
		title: 'Python for Data Science, Machine Learning & Productivity Tips',
		provider: 'Udemy Certificate',
		year: '2025',
		category: 'Data Science',
		type: 'Courses',
		technologies: ['Python', 'Machine Learning'],
		link: 'https://www.udemy.com/certificate/UC-c8d3ecad-e6a4-4b61-b9b2-c524c88d1ea5/',
		image: pythonCertificateImage,
	},
	{
		id: 'cert-flutter-udemy',
		title: 'Complete Guide to Flutter Development',
		provider: 'Udemy Certificate',
		year: '2025',
		category: 'Mobile Development',
		type: 'Courses',
		technologies: ['Flutter', 'Dart'],
		link: 'https://www.udemy.com/certificate/UC-015966de-8386-4168-be86-90862e407b0e/',
		image: flutterCertificateImage,
	},
	{
		id: 'cert-react-udemy',
		title: 'React – Build Real-World Applications with Hooks & REST APIs',
		provider: 'Udemy Certificate',
		year: '2025',
		category: 'Frontend',
		type: 'Courses',
		technologies: ['React', 'REST APIs'],
		link: 'https://www.udemy.com/certificate/UC-52469c6c-9dd6-4271-abbb-17854373dca7/',
		image: reactCertificateImage,
	},
	{
		id: 'cert-oci-2025',
		title: 'Oracle Cloud Infrastructure 2025 – AI Foundations Associate',
		provider: 'Oracle Certified',
		year: '2025',
		category: 'Cloud',
		type: 'Other',
		technologies: ['Oracle Cloud', 'AI Foundations'],
		link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=47DE7E70BAA39A7EBE70C30C801F39FD52C3690A2DCD7589D2BAEB9E6560D1FA',
		image: oracleCertificateImage,
	},
];

export const blogPosts = [
	{
		id: 'blog-01',
		title: 'Designing With Constraints: Shipping a Student Companion App',
		preview:
			'Notes on translating campus interviews, sticky notes, and feedback into a minimal release that still felt delightful.',
		publishedOn: 'Oct 02, 2024',
		likes: 24,
		dislikes: 1,
	},
	{
		id: 'blog-02',
		title: 'Treating Documentation as a Feature',
		preview:
			'My process for building living docs with Storybook-style tables, API examples, and embedded Loom walkthroughs.',
		publishedOn: 'Jul 18, 2024',
		likes: 18,
		dislikes: 0,
	},
	{
		id: 'blog-03',
		title: 'Balancing Coursework and Freelance UI Audits',
		preview:
			'How planning templates, checklists, and Pomodoro blocks helped me support three freelance audits while acing finals.',
		publishedOn: 'Apr 26, 2024',
		likes: 32,
		dislikes: 3,
	},
];

export const internships = [
	{
		id: 'intern-servicenow',
		company: 'ServiceNow University | AICTE & SmartBridge',
		role: 'ServiceNow Virtual Intern',
		period: '2025 · Virtual Mode',
		responsibilities: [
			'Explored the ServiceNow platform architecture while configuring core modules for enterprise workflows.',
			'Automated processes with Flow Designer, reports, and dashboards to streamline digital operations.',
			'Practiced Agentic AI capabilities to enhance case routing and knowledge delivery.',
			'Authored Automated Test Framework suites to validate customisations with repeatable checks.',
			'Prepared for the ServiceNow CSA exam through guided labs and scenario-based exercises.',
		],
		skillsGained: [
			'ServiceNow Administration',
			'Workflow Automation & Agentic AI',
			'Automated Test Framework (ATF)',
			'Flow Designer · Reports · Dashboards',
			'CSA Exam Readiness',
		],
	},
	{
		id: 'intern-crayond',
		company: "Crayon'D Software",
		role: 'Full-stack Intern',
		period: 'Mar 2025 – Jun 2025 · BIT Sathy, India',
		responsibilities: [
			'Built responsive marketing pages and UI systems with Next.js, React, and Tailwind CSS.',
			'Collaborated with senior engineers on production releases, code reviews, and deployment playbooks.',
			'Engineered Node.js and Express APIs with robust validation, logging, and testing layers.',
			'Explored full-stack workflows covering CI pipelines, version control, and observability basics.',
		],
		skillsGained: ['Next.js', 'Express.js', 'Component architecture', 'Git & GitHub'],
	},
];

export const resumeDetails = {
	summary:
		'Curious and reliable engineer crafting usable software, obsessed with pairing design thinking and rock-solid delivery.',
	personal: {
		email: 'sheikabdullahpeer@gmail.com',
		phone: '+91 97915 25488',
		location: 'Chennai, India',
		languages: ['English', 'Tamil', 'Hindi'],
	},
	education: [
		{
			school: 'Bannari Amman Institute of Technology',
			program: 'B.Tech · Computer Science and Business Systems',
			period: '2023 – 2027',
			score: 'CGPA 7.65',
		},
		{
			school: 'Arumugam Academy Matric Hr. Sec. School',
			program: 'Higher Secondary · CS-Maths',
			period: '2021 – 2023',
			score: '86%',
		},
	],
	experience: [
		{
			title: 'Full-stack Intern',
			company: "Crayon'D Software",
			period: 'Mar 2025 – Jun 2025',
			bullets: [
				'Composed reusable design systems in Next.js and Tailwind, optimising for accessibility and performance.',
				'Built Node.js + Express APIs with layered validation, monitoring hooks, and CI-backed deployments.',
				'Partnered with cross-functional squads to deliver sprint outcomes while mentoring peers on Git hygiene.',
			],
		},
	],
	skills: [
		'Next.js · React.js · Tailwind CSS',
		'JavaScript · TypeScript · Component architecture',
		'Node.js · Express.js · REST APIs',
		'Git & GitHub · Agile / Scrum · Postman',
		'Problem solving · Collaboration · Clean code practices',
	],
};

export const aboutMe = {
	introduction:
		'I am an explorer at heart who loves translating business and user insights into interfaces that feel effortless. Whether it is sprinting through a hackathon or pairing with a designer, I keep the conversation centred on outcomes.',
	educationHighlights: [
		'Currently pursuing B.Tech CSBS at Bannari Amman Institute of Technology.',
		'Active member of the UI/UX guild mentoring juniors on design critique.',
		'Previously led school tech clubs focusing on robotics and app demos.',
	],
	extras: {
		interests: ['Designing minimal workspaces', 'Long-form writing', 'Badminton'],
		goals: [
			'Join a product team that values research-backed decisions.',
			'Contribute to open-source accessibility tooling.',
			'Publish a monthly newsletter focused on student maker journeys.',
		],
	},
};

export const contactInfo = {
	email: 'sheikabdullahpeer@gmail.com',
	phone: '+91 97915 25488',
	location: 'Chennai, India',
	socials: [
		{ label: 'GitHub', url: 'https://github.com/SHEIKABDULLAHPM', type: 'github' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/peer-sheik-abdullah-mohd-noordeen-b97148276/', type: 'linkedin' },
		{ label: 'Twitter', url: 'https://x.com/SheikAbdul42993', type: 'twitter' },
		{ label: 'Email', url: 'mailto:sheikabdullahpeer@gmail.com', type: 'mail' },
	],
};
