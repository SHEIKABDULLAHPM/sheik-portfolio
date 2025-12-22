import smartHostelImage from '../assets/hostel.jpg';
import mindpeaceImage from '../assets/mindpeace.png';
import railwayDashboardImage from '../assets/railway.png';
import careerPathImage from '../assets/careerpath-ai.png';
import textToImageImage from '../assets/text-to-image.png';

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
