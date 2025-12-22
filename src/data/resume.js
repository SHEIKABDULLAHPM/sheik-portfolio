import { contactInfo } from './contact.js';

export const resumeDetails = {
	summary:
		'Motivated Computer Science and Business Systems student with skills in web development, AI, and machine learning. Experienced in building responsive applications using HTML, CSS, JavaScript, React, and Next.js, with growing backend knowledge in Node.js and Express.js. Strong foundation in C, Python, Java, data analysis, and machine learning. Quick learner focused on solving problems, writing clean code, and contributing to innovative tech teams.',
	personal: {
		email: contactInfo.email,
		phone: contactInfo.phone,
		location: contactInfo.location,
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
