import profileImage from '../assets/sheik-abdullah.jpg';
import pythonCertificateImage from '../assets/DS AND ML.png';
import flutterCertificateImage from '../assets/FLUTTER.png';
import oracleCertificateImage from '../assets/ORACLE AI.png';
import powerBiCertificateImage from '../assets/POWER BI.png';
import reactCertificateImage from '../assets/REACT.png';
import smartHostelImage from '../assets/hostel.jpg';
import mindpeaceImage from '../assets/mindpeace.png';
import railwayDashboardImage from '../assets/railway.png';
import careerPathImage from '../assets/careerpath ai.png';
import textToImageImage from '../assets/text to image.png';
import hacksporaCertificateImage from '../assets/gallery/hackspora.png';
import viksitBharatCertificateImage from '../assets/gallery/gov certificate.jpeg';
import vasandAndCoImage from '../assets/gallery/vasand and co.jpeg';
import bestShopImage from '../assets/gallery/best shop.jpeg';
import retailInterviewImage from '../assets/gallery/trends.jpeg';
import classroomPitchImage from '../assets/gallery/teach.jpeg';
import weldingLabImage from '../assets/gallery/welding.jpeg';
import skacasTeamWorkImage from '../assets/gallery/skacas.jpeg';
import hacksporaEventImage from '../assets/gallery/hackspora event.jpeg';
import bytsImage from '../assets/gallery/byts.jpeg';
import crayondImage from '../assets/gallery/crayond.jpeg';
import speciallabImage from '../assets/gallery/special lab.jpeg';
export const profile = {
	name: 'Peer Sheik Abdullah Mohd Noordeen',
	image: profileImage,
	title: 'CSBS Student · Aspiring Full-stack Engineer',
	location: 'Pallapatti, Tamil Nadu',
};
export const aboutMe = {
	introduction: [
		"I'm a passionate Computer Science and Business Systems student with a strong interest in web development, artificial intelligence, and machine learning. I enjoy building modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, React, and Next.js while actively expanding my backend skills with Node.js and Express.js.",
		'Alongside web development, I continue exploring C, Python, and Java as I grow my expertise in data science, machine learning, Power BI, data analysis, and Oracle Java concepts. I love solving problems, writing clean and efficient code, and learning how intelligent systems work.',
		'Curious, motivated, and quick to learn, I enjoy experimenting with new ideas, working on real-world projects, and constantly improving my technical skills. My goal is to contribute to a forward-thinking tech environment while growing as a developer and innovator.',
	],
	educationTimeline: [
		{
			id: 'edu-bannari',
			institution: 'Bannari Amman Institute of Technology, Sathyamangalam',
			qualification: 'B.Tech in Computer Science and Business Systems',
			duration: '2023 – 2027',
			grade: 'Current CGPA: 7.65',
		},
		{
			id: 'edu-arumugam',
			institution: 'Arumugam Academy Matric Hr. Sec. School, Aravakuruchi',
			qualification: 'Higher Secondary Education (CS–Maths Stream)',
			duration: 'Completed: 2023',
			grade: 'Percentage: 86%',
		},
		{
			id: 'edu-mgm',
			institution: "M.G.M Academy's High School, Virar (East)",
			qualification: 'Secondary Education (10th Grade)',
			duration: 'Completed: 2020',
			grade: 'Percentage: 65%',
		},
	],
	educationHighlights: [],
	extras: {
		interests: [
			'Building modern and user-friendly web applications',
			'Learning Java and growing my backend development skills',
			'Exploring AI/ML and creating smart prototypes',
			'Improving problem-solving abilities and learning new technologies',
			'Practicing Data Structures and Algorithms (DSA)',
			'Playing badminton and chess'
		],
		goals: [
			'Work with a tech team where I can grow in web development, Java backend, and AI-based projects',
			'Become a strong full-stack engineer with a balance of frontend, backend, and automation skills',
			'Build useful AI-powered applications while sharpening my DSA knowledge',
			'Contribute to open-source and community tech projects',
			'Keep improving my UI/UX skills and create clean, meaningful digital experiences'
		],
	},
};

export const projects = [
	{
		id: 'smart-hostel',
		title: 'Smart Hostel & Mess Management',
		description:
			'A modern web-based system designed to simplify hostel and mess operations. It automates room allocation, attendance, mess scheduling, payments, and feedback tracking, helping administrators and residents manage everything seamlessly in one place.',
		filters: ['Full-Stack Web Apps'],
		tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
		image: smartHostelImage,
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
		image: mindpeaceImage,
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
		image: careerPathImage,
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
		image: textToImageImage,
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
		image: railwayDashboardImage,
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
				id: 'personal-mentor-sync',
				caption: 'Mentor sync after day one of the internship.',
				src: vasandAndCoImage,
				description: 'Quick debrief with my mentor at Vasand & Co., Sathyamangalam · 4 Jul 2025 (GPS tagged).',
			},
			{
				id: 'personal-field-research',
				caption: 'Interviewing retail teams across Kongu Nagar.',
				src: retailInterviewImage,
				description: 'Customer research at Trends electronics hub, Athani Road · capturing workflows straight from the floor.',
			},
			{
				id: 'personal-best-shop',
				caption: 'Store owner discussions captured at Best Shop.',
				src: bestShopImage,
				description: 'Retail ethnography session at Best Shop, Sathyamangalam · 4 Jul 2025, 8:54 PM IST.',
			},
			{
				id: 'personal-campus-talk',
				caption: 'Sharing UX + security learnings back on campus.',
				src: classroomPitchImage,
				description: 'BIT Sathy classroom demo on UX + security heuristics · Apr 17, 2024.',
			},
			{
				id: 'personal-lab-build',
				caption: 'Welding practice during fabrication coursework.',
				src: weldingLabImage,
				description: 'Hands-on fabrication lab — MIG welding frames for a robotics prototype.',
			},
		],
	},
	{
		category: 'Team Works',
		description: 'Quick captures from collaborative sprints, hackathons, and shared experiences.',
		items: [
			{
				id: 'teamworks-innovation-lab',
				caption: 'Innovation lab sync',
				src: skacasTeamWorkImage,
				description: 'Sprint planning around the innovation lab workbench.',
			},
			{
				id: 'teamworks-hackathon-floor',
				caption: 'Hackathon floor review',
				src: hacksporaEventImage,
				description: 'Campus hackathon check-in with badge-ready crew.',
			},
			
		],
	},

	{
		category: 'Experience',
		description: 'Real-time experience  and lab work building production apps and innovation prototypes.',
		items: [
			{
				id: 'Byts Tech Solutions',
				caption: 'Byts Tech Solutions',
				src: bytsImage,
				description: 'Frontend development internship focusing on React and modern web technologies.',
			},
			{
				id: 'Crayond Technologies',
				caption: 'Crayond Technologies',
				src: crayondImage,
				description: 'Full-stack internship building production applications with Next.js and Node.js.',
			},
			{
				id: 'Special Lab BIT',
				caption: 'Special Lab BIT',
				src: speciallabImage,
				description: 'Innovation lab research on AI/ML prototypes and embedded systems.',
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
		type: 'Courses',
		technologies: ['Oracle Cloud', 'AI Foundations'],
		link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=47DE7E70BAA39A7EBE70C30C801F39FD52C3690A2DCD7589D2BAEB9E6560D1FA',
		image: oracleCertificateImage,
	},
	{
		id: 'cert-hackspora-2025',
		title: 'HackSpora 2k25 – National Level 24 Hours Hackathon',
		provider: 'Karpagam Academy of Higher Education',
		year: '2025',
		category: 'Hackathon',
		type: 'Other',
		summary: 'Participated in the AiQubit association’s HackSpora 2k25 national hackathon hosted by KAHE on 12–13 September 2025.',
		technologies: [],
		link: null,
		image: hacksporaCertificateImage,
	},
	{
		id: 'cert-viksit-bharat-2047',
		title: 'Viksit Bharat @2047 – Ideas for the Vision',
		provider: 'MyGov India',
		year: '2024',
		category: 'Innovation Challenge',
		type: 'Other',
		summary: 'Recognised for contributing ideas that support the national vision of Viksit Bharat by 2047.',
		technologies: [],
		link: null,
		image: viksitBharatCertificateImage,
	},
];

export const blogPosts = [
	{
		id: 'blog-projects',
		title: 'Projects & Portfolio',
		preview:
			'Showcasing web development, AI, and software projects I have built, including experiments with modern stacks and real-world problem solving.',
		publishedOn: 'Updated Dec 2025',
		likes: 0,
		dislikes: 0,
	},
	{
		id: 'blog-tech-insights',
		title: 'Tech Insights',
		preview:
			'Tips, tutorials, and learnings from frontend, backend, and full-stack adventures covering everything from UI polish to API craftsmanship.',
		publishedOn: 'Updated Dec 2025',
		likes: 0,
		dislikes: 0,
	},
	{
		id: 'blog-growth',
		title: 'Personal Growth',
		preview:
			'Reflections on learning new skills, solving challenging problems, and staying curious while exploring emerging technology.',
		publishedOn: 'Updated Dec 2025',
		likes: 0,
		dislikes: 0,
	},
	{
		id: 'blog-fun',
		title: 'Fun & Hobbies',
		preview:
			'Ongoing notes about chess, badminton, or quirky experiments that keep me energised outside of code.',
		publishedOn: 'Updated Dec 2025',
		likes: 0,
		dislikes: 0,
	},
	{
		id: 'blog-future',
		title: 'Future Goals',
		preview:
			'Aspirations, upcoming projects, and the next areas I am learning to stay ahead in tech and deliver meaningful work.',
		publishedOn: 'Updated Dec 2025',
		likes: 0,
		dislikes: 0,
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
		role: 'Frontend Web Developer',
		period: 'Mar 2025 – Jun 2025 · BIT Sathy, India',
		responsibilities: [
			'Built responsive, user-friendly marketing pages and UI components using Next.js, React, and Tailwind CSS.',
			'Collaborated with senior developers on production releases, code reviews, and deployment processes.',
			'Developed and integrated Node.js and Express APIs with strong validation, logging, and basic testing workflows.',
			'Gained hands-on exposure to full-stack development, including CI pipelines, version control, and fundamental observability practices.',
		],
		skillsGained: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'API Development', 'Git & GitHub', 'CI/CD'],
	},
];

export const resumeDetails = {
	summary:
		'Motivated Computer Science and Business Systems student with skills in web development, AI, and machine learning. Experienced in building responsive applications using HTML, CSS, JavaScript, React, and Next.js, with growing backend knowledge in Node.js and Express.js. Strong foundation in C, Python, Java, data analysis, and machine learning. Quick learner focused on solving problems, writing clean code, and contributing to innovative tech teams.',
	personal: {
		email: 'sheikabdullahpeer@gmail.com',
		phone: '+91 9384753881',
		location: 'Pallapatti, Tamil Nadu',
		languages: ['English', 'Tamil', 'Hindi'],
	},
	education: [
		{
			school: 'Bannari Amman Institute of Technology, Sathyamangalam',
			program: 'B.Tech in Computer Science and Business Systems',
			period: '2023 – 2027',
			score: 'Current CGPA: 7.65',
		},
		{
			school: 'Arumugam Academy Matric Hr. Sec. School, Aravakuruchi',
			program: 'Higher Secondary Education · CS-Maths Stream',
			period: 'Completed - 2023',
			score: 'Percentage: 86%',
		},
		{
			school: "M.G.M Academy's High School, Virar (East)",
			program: 'Secondary Education',
			period: 'Completed – 2020',
			score: 'Percentage: 65%',
		},
	],
	experience: [
		{
			title: 'Frontend Web Developer',
			company: "Crayon'D Software",
			period: 'Mar 2025 – Jun 2025',
			bullets: [
				'Built responsive, user-friendly marketing pages and UI components using Next.js, React, and Tailwind CSS.',
				'Collaborated with senior developers on production releases, code reviews, and deployment processes.',
				'Developed and integrated Node.js and Express APIs with strong validation, logging, and basic testing workflows.',
				'Gained hands-on exposure to full-stack development, including CI pipelines, version control, and fundamental observability practices.',
			],
		},
	],
	skills: [
		'Next.js · React.js · Tailwind CSS · JavaScript · TypeScript ',
		'Node.js · Express.js · REST APIs',
		'Python (ML Libraries) · Data Analysis · Machine Learning Algorithms · Power BI · Data Visualization',
		'Git & GitHub · Postman · Agile / Scrum · Problem Solving · Collaboration · Clean Code Practices',
	],
};

export const contactInfo = {
	email: 'sheikabdullahpeer@gmail.com',
	phone: '+91 9384753881',
	location: 'Pallapatti, Tamil Nadu',
	socials: [
		{ label: 'GitHub', url: 'https://github.com/SHEIKABDULLAHPM', type: 'github' },
		{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/peer-sheik-abdullah-mohd-noordeen-b97148276/', type: 'linkedin' },
		{ label: 'Twitter', url: 'https://x.com/SheikAbdul42993', type: 'twitter' },
		{ label: 'Email', url: 'mailto:sheikabdullahpeer@gmail.com', type: 'mail' },
	],
};
