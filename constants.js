import {
	GithubFinderIcon,
	NextPortfolioIcon,
	QuotesIcon,
	React_comixIcon,
	React_notesIcon,
	ShopIcon,
	TrelloIcon,
	VKLoaderIcon,
} from './public/img';

export const OPTIONS_DATE = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	hour24: true,
	day: 'numeric',
};

export const SKILLS = [
	'HTML',
	'CSS',
	'SASS',
	'LESS',
	'JavaScript',
	'TypeScript',
	'ReactJS',
	'NextJS',
	'NodeJs',
	'Git',
	'Redux',
	'Zustand',
	'React-query',
	'Leaflet',
	'Mapbox',
	'Webpack',
	'Vite',
	'Eslint',
];

export const PROJECTS = [
	{
		preview: NextPortfolioIcon,
		title: 'Next Portfolio-courses',
		emoji: '🌍',
		tags: [
			'ReactJs',
			'Typescript',
			'NextJs',
			'SWR',
			'Zustand',
			'NodeJs',
			'Axios',
			'MongoDB',
			'ExpressJs',
			'Cloudinary',
			'JWT',
			'Bcrypt',
		],
		youtube: 'https://youtu.be/fFeWCmT8N34',
		link: 'https://next-porfolio-courses.vercel.app/tests',
		gitLink: 'https://github.com/Emil768/next-porfolio-courses',
	},
	{
		preview: React_notesIcon,
		title: 'React-notes',
		emoji: '📒',
		tags: [
			'ReactJs',
			'NodeJs',
			'Redux-toolkit',
			'React-redux',
			'Axios',
			'MongoDB',
			'Express',
			'Cloudinary',
			'JWT',
			'Bcrypt',
		],
		youtube: 'https://www.youtube.com/watch?v=4k2BAI6sUro',
		link: 'https://mern-notes-frontend.vercel.app/',
		gitLink: 'https://github.com/Emil768/mern-notes-frontend',
	},
	{
		preview: QuotesIcon,
		title: 'Quotes-app',
		emoji: '🎯',
		tags: ['ReactJs', 'Typescript', 'use-sound'],
		youtube: 'https://www.youtube.com/watch?v=Jn3F2l7VxZg&feature=youtu.be',
		link: 'https://quotes-app-navy.vercel.app/',
		gitLink: 'https://github.com/Emil768/fast-print',
	},
	{
		preview: React_comixIcon,
		title: 'React-comix',
		emoji: '🛒',
		tags: ['ReactJs', 'NodeJs', 'Redux-toolkit', 'Typescript', 'JSON-server', 'Axios'],
		youtube: 'https://youtu.be/jMoqcv50YTk',
		link: 'https://react-comix-v-2.vercel.app/',
		gitLink: 'https://github.com/Emil768/react-comix-v.2',
	},
	{
		preview: ShopIcon,
		title: 'Internet-shop',
		emoji: '🛒',
		tags: ['HTML', 'CSS', 'Javascript'],
		youtube: 'https://youtu.be/SyyN3Ff0aiI',
		link: 'https://internet-shop-six.vercel.app/',
		gitLink: 'https://github.com/Emil768/react-internet-shop',
	},

	{
		preview: GithubFinderIcon,
		title: 'Github-finder',
		emoji: '🔎',
		tags: ['ReactJs', 'Typescript', 'GithubApi'],
		youtube: 'https://youtu.be/42UE1EwNBB0',
		link: 'https://github-finder-psi-nine.vercel.app/',
		gitLink: 'https://github.com/Emil768/github-finder',
	},

	{
		preview: VKLoaderIcon,
		title: 'VK-loader',
		emoji: '📂',
		tags: ['ReactJs', 'NodeJs', 'Express', 'Multer'],
		youtube: 'https://youtu.be/rqeKnopTt28',
		link: 'https://emil768.github.io/vk-loader/',
		gitLink: 'https://github.com/Emil768/vk-loader',
	},

	{
		preview: TrelloIcon,
		title: 'Trello',
		emoji: '📝',
		tags: ['HTML', 'CSS', 'Javascript'],
		youtube: 'https://youtu.be/xjGsgZEMCZw',
		link: 'https://emil768.github.io/Trello-clone-js',
		gitLink: 'https://github.com/Emil768/Trello-clone-js',
	},
];
