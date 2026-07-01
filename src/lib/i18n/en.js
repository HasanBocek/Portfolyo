export const en = {
	// Navigation
	nav: {
		projects: 'Projects',
		experience: 'Experience',
		contact: 'Contact'
	},

	// Hero
	hero: {
		greeting: "Hi, I'm",
		name: 'Hasan BÖCEK',
		role: 'Freelance Full Stack Developer',
		description: 'I build web apps and admin panels for clients. Whether you have a clear brief or just an idea — drop me a line and we can talk it through.',
		cv: 'Download CV',
		contact: 'Let\'s Talk'
	},

	// Social
	socialLinks: [
		{ name: 'GitHub', url: 'https://github.com/HasanBocek' },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/hasanbocek' },
		{ name: 'Instagram', url: 'https://instagram.com/hasanbocekk' },
		{ name: 'Mail', url: 'mailto:contact@hasanbocek.com' }
	],

	// Skills
	skills: {
		items: [
			'JavaScript', "TypeScript", "Node.js", "Express", "Elysia.js", "Bun", "SvelteKit", "Next.js", "MongoDB", "Mongoose", "Docker", "Coolify", "Azure", "Cloudflare Tunnels", "Nginx", "Github", "Github Actions", "Promox"
		]
	},

	// Projects
	projects: {
		title: 'Projects',
		subtitle: 'Real client work. Reach out if you need something similar.',
		items: [
			{
				slug: 'menuvix',
				title: 'MenuVix - Restaurant POS System',
				description: 'End-to-end restaurant POS covering orders, kitchen display, payments, and reporting.',
				detailDescription: 'MenuVix unifies order management, table tracking, kitchen display, payments, and analytics in a single platform. Built with NestJS and Next.js, it streamlines daily restaurant operations with role-based access, multi-language support, and detailed sales reports across operations, management, and reporting modules.',
				tech: ['NestJS', 'Next.js'],
				sections: [
					{
						name: 'Operations',
						pages: [
							{ label: 'Home Page', src: 'https://cdn.bocek.app/u/q2wpTY.png' },
							{ label: 'Waiter', src: 'https://cdn.bocek.app/u/CHbHAK.png' },
							{ label: 'Tables', src: 'https://cdn.bocek.app/u/qi2MZx.png' },
							{ label: 'Table Detail', src: 'https://cdn.bocek.app/u/eB1lkF.png' },
							{ label: 'Reservations', src: 'https://cdn.bocek.app/u/DAz0y3.png' },
							{ label: 'New Reservation', src: 'https://cdn.bocek.app/u/SHzqxm.png' },
							{ label: 'Kitchen', src: 'https://cdn.bocek.app/u/DlKJC9.png' },
							{ label: 'Orders', src: 'https://cdn.bocek.app/u/FXELmV.png' },
							{ label: 'Stock Tracking', src: 'https://cdn.bocek.app/u/aRc7MK.png' },
							{ label: 'Cash Register', src: 'https://cdn.bocek.app/u/i3VzsZ.png' },
							{ label: 'Cash Register Detail', src: 'https://cdn.bocek.app/u/VVRDt8.png' },
							{ label: 'Cash Transaction History', src: 'https://cdn.bocek.app/u/x2hnte.png' },
						]
					},
					{
						name: 'Management',
						pages: [
							{ label: 'Overview', src: 'https://cdn.bocek.app/u/9zBLCj.png' },
							{ label: 'Table Management', src: 'https://cdn.bocek.app/u/Slckr8.png' },
							{ label: 'Product Management', src: 'https://cdn.bocek.app/u/02FoN8.png' },
							{ label: 'Staff Management', src: 'https://cdn.bocek.app/u/V4TAck.png' },
							{ label: 'Devices', src: 'https://cdn.bocek.app/u/aEy68X.png' },
							{ label: 'Store Settings', src: 'https://cdn.bocek.app/u/qdQ1HC.png' },
							{ label: 'Printer Settings', src: 'https://cdn.bocek.app/u/9GbdFW.png' },
							{ label: 'System Logs', src: 'https://cdn.bocek.app/u/M8vxhR.png' },
						]
					},
					{
						name: 'Reports',
						pages: [
							{ label: 'Overview', src: 'https://cdn.bocek.app/u/6iablG.png' },
							{ label: 'Sales Reports', src: 'https://cdn.bocek.app/u/TkKcVq.png' },
							{ label: 'Product Reports', src: 'https://cdn.bocek.app/u/qh5e2G.png' },
							{ label: 'Staff Performance', src: 'https://cdn.bocek.app/u/O4w7Xh.png' },
							{ label: 'Payment Reports', src: 'https://cdn.bocek.app/u/HqGXTI.png' },
							{ label: 'Hourly Analysis', src: 'https://cdn.bocek.app/u/GgJROu.png' },
							{ label: 'Table Performance', src: 'https://cdn.bocek.app/u/hlvWUx.png' },
							{ label: 'Cancellations & Compliments', src: 'https://cdn.bocek.app/u/QFzlfp.png' },
							
						]
					},
				],
				live: 'https://menuvix.com',
				status: { label: 'Live', color: 'green' }
			},
			{
				slug: 'on-muhasebe-erp',
				title: 'Pre-Accounting ERP',
				description: 'Browser-based pre-accounting ERP with accounts, inventory, cash desk, invoicing, and reporting.',
				detailDescription: 'A modern pre-accounting ERP that brings a Windows desktop experience to the browser. It combines account management, inventory and warehouse tracking, cash and bank operations, invoicing, check/bill management, quick collection, and reporting in one interface. The dashboard provides fast access to every module, with search, filtering, and transaction history to simplify daily accounting work.',
				tech: ['Next.js', 'TypeScript'],
				demo: 'https://erp.demo.bocek.app',
				embedUrl: 'https://erp.demo.bocek.app',
				status: { label: 'Demo', color: 'yellow' }
			},
			{
				slug: 'ktutenis',
				title: 'KTU Tennis Club Management System',
				description: 'Club management platform for KTU Tennis Club — member management, lesson scheduling, and attendance tracking.',
				detailDescription: 'A comprehensive platform digitizing daily operations for KTU Tennis Club. Built with Svelte, Node.js, and MongoDB, it covers member registration, group and private lesson scheduling, QR-based attendance, payment tracking, and automated notifications. Administrators and coaches manage schedules while members book sessions through an intuitive interface.',
				tech: ['Svelte', 'Node.js', 'MongoDB'],
				demo: 'https://tenis.demo.bocek.app',
				embedUrl: 'https://tenis.demo.bocek.app',
				live: 'https://ktutenis.com',
				status: { label: 'Live', color: 'green' }
			},
		],
		buttons: {
			github: 'Source Code',
			live: 'Live',
			demo: 'Demo',
			detail: 'Details'
		},
		detailPage: {
			back: 'Back to Projects',
			tech: 'Technologies',
			links: 'Links',
			sections: 'Sections',
			pages: 'Pages',
			liveDemo: 'Live Demo',
			embedHint: 'Use the demo link above for a full-screen experience.'
		}
	},

	// Experience
	experience: {
		title: 'Experience',
		active: "Active",
		items: [
			{
				role: 'Frontend Developer',
				company: 'Freelance',
				companyUrl: '',
				period: '2025 - Present',
				current: true
			},
			{
				role: 'Backend Developer',
				company: 'Freelance',
				companyUrl: '',
				period: '2018 - Present',
				current: true
			}
		]
	},

	// Education
	education: {
		title: 'Education',
		items: [
			{
				degree: "Industrial Engineering Bachelor's Degree",
				institution: 'Karadeniz Technical University',
				period: '2025 - 2029'
			}
		]
	},

	// Club Timeline
	clubTimeline: {
		title: 'Leadership',
		items: [
			{
				period: 'Feb 2026 - Present',
				role: 'Technical Department Director',
				club: 'KTUSDC (Software Development Club)',
				description: 'I actively organize workshops with technical training, project mentorship, and coding events',
				clubUrl: 'https://ktusdc.com'
			},
			{
				period: 'Feb 2025 - Present',
				role: 'Vice President',
				club: 'KTU Tennis Club',
				description: 'I actively play a role in planning organizations, member communication, and ensuring the regular execution of club activities',
				clubUrl: 'https://ktutenis.com'
			},
			{
				period: 'Oct 2024 - Present',
				role: 'Tennis Coach',
				club: 'KTU Tennis Club',
				description: 'I actively provide tennis training to beginner and intermediate level groups',
				clubUrl: 'https://ktutenis.com'
			},
			{
				period: 'Apr 2025 - Jun 2025',
				role: 'Board Member',
				club: 'KTUCEC (Computer Eng. Club)',
				description: 'I played a role in digital infrastructure management and web-based project development',
			},
			{
				period: 'Nov 2024 - Jun 2025',
				role: 'Web Committee Director',
				club: 'KTUCEC (Computer Eng. Club)',
				description: 'I played a role in digital infrastructure management and web-based project development'
			}
		]
	},

	// Contact
	contact: {
		title: 'Get in touch about your project',
		description: 'A short email is enough — tell me what you need and your timeline if you have one. I usually reply within a few hours.',
		email: 'contact@hasanbocek.com'
	},

	// Footer
	footer: {
		rights: 'All rights reserved.'
	},

	// WakaTime
	wakatime: {
		loading: 'Loading...',
		error: 'Could not load coding time',
		prefix: 'This Month\'s Coding Time:',
		since: 'since Dec 21, 2025'
	}
};
