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
		{ name: 'WhatsApp', url: 'https://wa.me/message/6QJRRBGFX2NUP1' },
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
				slug: 'kortnet',
				title: 'KortNet - Tennis Network & Competition Hub',
				description: 'A tennis social network for match sharing, challenges, tournaments, and club connections. Currently on waitlist.',
				detailDescription: 'A social platform bringing the tennis experience online. Planned features include match result sharing, challenge invites, regional tournaments, and staying connected with your club. Designed to replace scattered WhatsApp groups with a social feed, messaging, and competitive rankings built for tennis players. Actively in development — join the waitlist for early access.',
				tech: ['Next.js', 'TypeScript'],
				live: 'https://kortnet.com',
				status: { label: 'In Development', color: 'yellow' }
			},
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
							{ label: 'Home Page', src: '/screenshots/menuvix/operations/homepage.png' },
							{ label: 'Waiter', src: '/screenshots/menuvix/operations/waiter.png' },
							{ label: 'Tables', src: '/screenshots/menuvix/operations/tables.png' },
							{ label: 'Table Detail', src: '/screenshots/menuvix/operations/tabledetail.png' },
							{ label: 'Reservations', src: '/screenshots/menuvix/operations/reservations.png' },
							{ label: 'New Reservation', src: '/screenshots/menuvix/operations/newreservation.png' },
							{ label: 'Kitchen', src: '/screenshots/menuvix/operations/kitchen.png' },
							{ label: 'Orders', src: '/screenshots/menuvix/operations/orders.png' },
							{ label: 'Stock Tracking', src: '/screenshots/menuvix/operations/stocktracking.png' },
							{ label: 'Cash Register', src: '/screenshots/menuvix/operations/cashregister.png' },
							{ label: 'Cash Register Detail', src: '/screenshots/menuvix/operations/cashregisterdetail.png' },
							{ label: 'Cash Transaction History', src: '/screenshots/menuvix/operations/cashtransactionhistory.png' },
						]
					},
					{
						name: 'Management',
						pages: [
							{ label: 'Overview', src: '/screenshots/menuvix/management/overview.png' },
							{ label: 'Table Management', src: '/screenshots/menuvix/management/tablemanagement.png' },
							{ label: 'Product Management', src: '/screenshots/menuvix/management/productmanagement.png' },
							{ label: 'Staff Management', src: '/screenshots/menuvix/management/staffmanagement.png' },
							{ label: 'Devices', src: '/screenshots/menuvix/management/devices.png' },
							{ label: 'Store Settings', src: '/screenshots/menuvix/management/storesettings.png' },
							{ label: 'Printer Settings', src: '/screenshots/menuvix/management/printersettings.png' },
							{ label: 'POS Settings', src: '/screenshots/menuvix/management/possettings.png' },
							{ label: 'System Logs', src: '/screenshots/menuvix/management/systemlogs.png' },
						]
					},
					{
						name: 'Reports',
						pages: [
							{ label: 'Overview', src: '/screenshots/menuvix/reports/overview.png' },
							{ label: 'Sales Reports', src: '/screenshots/menuvix/reports/salesreports.png' },
							{ label: 'Product Reports', src: '/screenshots/menuvix/reports/productreports.png' },
							{ label: 'Staff Performance', src: '/screenshots/menuvix/reports/staffperformance.png' },
							{ label: 'Payment Reports', src: '/screenshots/menuvix/reports/paymentreports.png' },
							{ label: 'Hourly Analysis', src: '/screenshots/menuvix/reports/hourlyanalysis.png' },
							{ label: 'Table Performance', src: '/screenshots/menuvix/reports/tableperformance.png' },
							{ label: 'Cancellations & Compliments', src: '/screenshots/menuvix/reports/cancellationsandcompliments.png' },
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
				role: 'Full Stack Developer',
				company: 'Eupholias Developers',
				companyUrl: 'https://eupholias.com',
				period: 'Dec 2025 - Apr 2026',
				current: false
			},
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
		description: 'A short email or WhatsApp message is enough — tell me what you need and your timeline if you have one. I usually reply within a few hours.',
		email: 'contact@hasanbocek.com',
		whatsapp: 'https://wa.me/message/6QJRRBGFX2NUP1',
		whatsappLabel: 'WhatsApp'
	},

	// Footer
	footer: {
		rights: 'All rights reserved.'
	}
};
