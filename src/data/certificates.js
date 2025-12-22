import pythonCertificateImage from '../assets/ds-and-ml.png';
import flutterCertificateImage from '../assets/FLUTTER.png';
import oracleCertificateImage from '../assets/oracle-ai.png';
import powerBiCertificateImage from '../assets/power-bi.png';
import reactCertificateImage from '../assets/REACT.png';
import hacksporaCertificateImage from '../assets/gallery/hackspora.png';
import viksitBharatCertificateImage from '../assets/gallery/gov-certificate.jpeg';

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
