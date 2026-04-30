const PHONE_NUMBER = '+91 9384753881';
const PHONE_DIGITS = PHONE_NUMBER.replace(/[^0-9]/g, '');
const EMAIL_ADDRESS = 'sheikabdullahpeer@gmail.com';

const socialDirectory = [
	{
		id: 'github',
		platform: 'GitHub',
		type: 'github',
		url: 'https://github.com/SHEIKABDULLAHPM',
		ariaLabel: 'Open Sheik Abdullah on GitHub',
		category: 'workspace',
	},
	{
		id: 'linkedin',
		platform: 'LinkedIn',
		type: 'linkedin',
		url: 'https://www.linkedin.com/in/peer-sheik-abdullah-mohd-noordeen-b97148276/',
		ariaLabel: 'Visit LinkedIn profile',
		category: 'social',
	},

	{
		id: 'instagram',
		platform: 'Instagram',
		type: 'instagram',
		url: 'https://www.instagram.com/unary_man/',
		ariaLabel: 'Visit Instagram profile',
		category: 'social',
	},

	{
		id: 'email',
		platform: 'Email',
		type: 'mail',
		url: `mailto:${EMAIL_ADDRESS}`,
		ariaLabel: 'Send an email',
		category: 'direct',
	},
	{
		id: 'whatsapp',
		platform: 'WhatsApp',
		type: 'whatsapp',
		url: PHONE_DIGITS ? `https://wa.me/${PHONE_DIGITS}` : null,
		ariaLabel: 'Chat on WhatsApp',
		category: 'messaging',
	},
	{
		id: 'leetcode',
		platform: 'LeetCode',
		type: 'leetcode',
		url: 'https://leetcode.com/u/SHEIKABDULLAHPM/',
		ariaLabel: 'Solve with me on LeetCode',
		category: 'workspace',
	},
	{
		id: 'hackerrank',
		platform: 'HackerRank',
		type: 'hackerrank',
		url: 'https://www.hackerrank.com/profile/sheikabdullahpe1',
		ariaLabel: 'View HackerRank profile',
		category: 'workspace',
	},
];

export const contactInfo = {
	name: 'Peer Sheik Abdullah Mohd Noordeen',
	email: EMAIL_ADDRESS,
	phone: PHONE_NUMBER,
	location: 'Pallapatti, Tamil Nadu',
	socials: socialDirectory.filter((social) => Boolean(social.url)),
};

export const getSocialLinks = (category) => {
	if (!category) {
		return contactInfo.socials;
	}
	return contactInfo.socials.filter((social) => social.category === category);
};

export const getSocialByPlatform = (platform) => {
	if (!platform) {
		return undefined;
	}
	const target = platform.toLowerCase();
	return contactInfo.socials.find((social) => {
		const candidates = [social.platform, social.id, social.type]
			.filter(Boolean)
			.map((value) => value.toLowerCase());
		return candidates.includes(target);
	});
};
