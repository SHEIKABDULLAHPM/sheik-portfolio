import smartHostelImage from '../assets/hostel.jpg';
import mindpeaceImage from '../assets/mindpeace.png';
import railwayDashboardImage from '../assets/railway.png';
import careerPathImage from '../assets/careerpath-ai.png';
import textToImageImage from '../assets/text-to-image.png';
import learningImage from '../assets/learning.png';

export const projects = [
	{
		id: 'ai-learning-assessment-portal',
		title: 'AI Proctoring Learning & Assessment Portal',
		description:
			'A full-stack AI-powered learning and assessment platform featuring module-based learning, coding practice, secure online exams, real-time proctoring, face verification, violation detection, live monitoring, and role-based performance analytics.',
		filters: ['AI / Machine Learning', 'EdTech', 'Full Stack'],
		tech: [
			'React.js',
			'Tailwind CSS',
			'Spring Boot',
			'FaceNet',
			'DeepFace',
			'YOLO',
			'MySQL',
		],
		image: learningImage,
		github: 'https://github.com/SHEIKABDULLAHPM/learning-and-assessment-portal',
		live: 'https://sheikabdullahpm.github.io/learning-and-assessment-portal/login',
	},

	{
		id: 'smart-hostel',
		title: 'Smart Hostel & Mess Management',
		description:
			'A modern web-based system designed to simplify hostel and mess operations. It automates room allocation, attendance, mess scheduling, payments, and feedback tracking.',
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
			'An AI-powered wellness platform for emotion tracking, personalized insights, and guided mental health support.',
		filters: ['AI / Machine Learning'],
		tech: ['Next.js', 'Supabase', 'TensorFlow.js', 'Tailwind CSS'],
		image: mindpeaceImage,
		github: 'https://github.com/SHEIKABDULLAHPM/mental-health-support',
		live: 'https://sheikabdullahpm.github.io/mental-health-support/welcome',
	},

	{
		id: 'ai-careerpath',
		title: 'AI CareerPath',
		description:
			'A personalized AI-driven career guidance platform that recommends learning paths, certifications, and job opportunities.',
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
			'A deep-learning system that converts text prompts into high-quality AI-generated images.',
		filters: ['Generative AI', 'AI / Machine Learning'],
		tech: ['Python', 'Diffusers', 'FastAPI', 'Docker'],
		image: textToImageImage,
		github: 'https://github.com/SHEIKABDULLAHPM/text-to-image-gen-ai',
		live: 'https://text-to-image-gen-isz8bg58p-sheik-abdullah-p-ms-projects.vercel.app/',
	},

	{
		id: 'railway-dashboard',
		title: 'Railway AI Dashboard – Decision Support System',
		description:
			'A real-time AI-powered railway monitoring dashboard with predictive analytics and intelligent decision support.',
		filters: ['Dashboards', 'AI / Machine Learning'],
		tech: ['Next.js', 'TypeScript', 'Supabase', 'D3.js'],
		image: railwayDashboardImage,
		github: 'https://github.com/SHEIKABDULLAHPM/AI-powered-Railway-Decision-Support-Dashboard',
		live: 'https://railway-ai-dashboard.vercel.app',
	},
];