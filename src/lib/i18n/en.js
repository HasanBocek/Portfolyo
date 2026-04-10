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
		role: 'Full Stack Developer',
		description: 'I build scalable and maintainable full-stack systems.',
		cv: 'Download CV',
		contact: 'Contact Me'
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
		subtitle: 'Some projects I have built',
		items: [
			{
				slug: 'menuvix',
				title: 'MenuVix - Restaurant POS System',
				description: 'A comprehensive POS system covering every aspect of restaurant operations, from order taking to final payment.',
				detailDescription: 'MenuVix is a full-featured restaurant point-of-sale system designed to streamline every aspect of restaurant operations. Built with NestJS for a robust backend API and Next.js for a modern, responsive frontend. The system handles order management, table tracking, kitchen display integration, payment processing, and real-time analytics. It features role-based access control for staff management, multi-language support, and a clean dashboard for daily reporting.',
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
				slug: 'nodx',
				title: 'Nodx',
				description: 'Nodx provides enterprise-level web solutions with modern technology.',
				detailDescription: 'Nodx delivers enterprise-grade web solutions leveraging cutting-edge technologies. Built with Bun runtime for exceptional performance, Elysia for a lightweight yet powerful API framework, and Next.js for server-side rendered frontends. The platform focuses on high availability, automatic scaling, and developer experience. Key features include automated deployment pipelines, integrated monitoring dashboards, and comprehensive API documentation.',
				tech: ['Bun', 'Elysia', 'Next.js'],
				live: 'https://nodx.org',
				status: { label: 'Live', color: 'green' }
			},
			{
				slug: 'tennis-club-management',
				title: 'Tennis Club Management System',
				description: 'Tennis club management system with member management, group lesson creation, and attendance tracking.',
				detailDescription: 'A comprehensive tennis club management platform that simplifies daily operations for club administrators and coaches. Built with Svelte for a reactive frontend, Node.js for the backend, and MongoDB for flexible data storage. The system includes member registration and management, group and private lesson scheduling, attendance tracking with QR code support, payment tracking, and automated notification systems. Coaches can manage their schedules while members can book sessions through an intuitive interface.',
				tech: ['Svelte', 'Node.js', 'MongoDB'],
				sections: [
					{
						name: 'Management',
						pages: [
							{ label: 'Dashboard', src: 'https://picsum.photos/seed/tennis-panel/800/500' },
							{ label: 'Members', src: 'https://picsum.photos/seed/tennis-members/800/500' },
							{ label: 'Payments', src: 'https://picsum.photos/seed/tennis-payments/800/500' }
						]
					},
					{
						name: 'Operations',
						pages: [
							{ label: 'Schedule', src: 'https://picsum.photos/seed/tennis-schedule/800/500' },
							{ label: 'Attendance', src: 'https://picsum.photos/seed/tennis-attendance/800/500' }
						]
					},
					{
						name: 'Public',
						pages: [
							{ label: 'Home', src: 'https://picsum.photos/seed/tennis-home/800/500' },
							{ label: 'Lessons', src: 'https://picsum.photos/seed/tennis-lessons/800/500' }
						]
					}
				],
				demo: 'https://tcms-demo.bocek.app',
				live: 'https://ktutenis.com',
				status: { label: 'Live', color: 'green' }
			},
			{
				slug: 'food-recipe-platform',
				title: 'Food Recipe Sharing Platform',
				description: 'A platform where users can add, search, rate, and share recipes.',
				detailDescription: 'A social recipe sharing platform where food enthusiasts can discover, create, and share their favorite recipes. Built with Node.js and Express for the backend API, MongoDB for flexible recipe data storage, and Next.js for a fast, SEO-friendly frontend. Features include advanced recipe search with filters, ingredient-based suggestions, user ratings and reviews, recipe collections, and social sharing capabilities. The platform supports image uploads, nutritional information calculation, and step-by-step cooking instructions.',
				tech: ['Node.js', 'Express', 'MongoDB', 'Next.js'],
				sections: [
					{
						name: 'Management',
						pages: [
							{ label: 'Dashboard', src: 'https://picsum.photos/seed/recipe-panel/800/500' },
							{ label: 'Approvals', src: 'https://picsum.photos/seed/recipe-approvals/800/500' }
						]
					},
					{
						name: 'Public',
						pages: [
							{ label: 'Home', src: 'https://picsum.photos/seed/recipe-home/800/500' },
							{ label: 'Recipes', src: 'https://picsum.photos/seed/recipe-list/800/500' },
							{ label: 'Profile', src: 'https://picsum.photos/seed/recipe-profile/800/500' }
						]
					}
				],
				github: 'https://github.com/HasanBocek/Food-Recipe-Backend',
				status: { label: 'Completed', color: 'blue' }
			},
			{
				slug: 'hotel-management',
				title: 'Hotel Property Management System',
				description: 'Hotel management system including reservations, room distribution, billing, and staff operations.',
				detailDescription: 'A complete hotel property management system (PMS) designed for small to mid-size hotels and boutique accommodations. The system handles reservations with availability calendars, room assignment and status tracking, guest check-in/check-out workflows, billing and invoicing, and staff task management. Built with Node.js and Express for reliable backend services and MongoDB for flexible data modeling. Includes reporting dashboards for occupancy rates, revenue tracking, and guest analytics.',
				tech: ['Node.js', 'Express', 'MongoDB'],
				sections: [
					{
						name: 'Management',
						pages: [
							{ label: 'Dashboard', src: 'https://picsum.photos/seed/hotel-panel/800/500' },
							{ label: 'Staff', src: 'https://picsum.photos/seed/hotel-staff/800/500' },
							{ label: 'Reports', src: 'https://picsum.photos/seed/hotel-reports/800/500' }
						]
					},
					{
						name: 'Operations',
						pages: [
							{ label: 'Reservations', src: 'https://picsum.photos/seed/hotel-reservations/800/500' },
							{ label: 'Rooms', src: 'https://picsum.photos/seed/hotel-rooms/800/500' },
							{ label: 'Guests', src: 'https://picsum.photos/seed/hotel-guests/800/500' }
						]
					}
				],
				github: 'https://github.com/HasanBocek/Hotel-Property-Management-System',
				status: { label: 'Completed', color: 'blue' }
			},
			{
				slug: 'student-progress-tracker',
				title: 'Student Progress Tracker',
				description: 'Student progress tracking and performance analytics system for educational institutions.',
				detailDescription: 'An analytics-driven student progress tracking system designed for educational institutions to monitor and improve student performance. Built with Node.js, Express, and MongoDB on the backend, with EJS templates and Bootstrap for the frontend. Features include student enrollment management, grade tracking with visual progress charts, attendance monitoring, performance analytics with trend analysis, and automated progress reports. Teachers can create assignments, track submissions, and identify students who need additional support through the dashboard.',
				tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
				sections: [
					{
						name: 'Management',
						pages: [
							{ label: 'Dashboard', src: 'https://picsum.photos/seed/student-panel/800/500' },
							{ label: 'Classes', src: 'https://picsum.photos/seed/student-classes/800/500' }
						]
					},
					{
						name: 'Operations',
						pages: [
							{ label: 'Students', src: 'https://picsum.photos/seed/student-list/800/500' },
							{ label: 'Grades', src: 'https://picsum.photos/seed/student-grades/800/500' },
							{ label: 'Attendance', src: 'https://picsum.photos/seed/student-attendance/800/500' }
						]
					},
					{
						name: 'Public',
						pages: [
							{ label: 'Login', src: 'https://picsum.photos/seed/student-login/800/500' },
							{ label: 'Reports', src: 'https://picsum.photos/seed/student-reports/800/500' }
						]
					}
				],
				github: 'https://github.com/HasanBocek/spt',
				status: { label: 'Completed', color: 'blue' }
			}
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
			pages: 'Pages'
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
				period: 'Dec 2025 - Present',
				current: true
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
		title: 'Get in Touch',
		description: 'Have a project idea? Let\'s work together.',
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
