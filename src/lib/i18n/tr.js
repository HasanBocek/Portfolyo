export const tr = {
	// Hero
	hero: {
		title: 'Hasan BÖCEK',
		subtitle: 'Back-End Geliştirici & Endüstri Mühendisliği Öğrencisi'
	},

	// Social
	socialLinks: [
		{
			name: 'GitHub',
			icon: 'bxl-github',
			url: 'https://github.com/HasanBocek',
			color: 'text-gray-600 hover:text-gray-900'
		},
		{
			name: 'LinkedIn',
			icon: 'bxl-linkedin',
			url: 'https://linkedin.com/in/hasanbocek',
			color: 'text-gray-600 hover:text-gray-900'
		},
		{
			name: 'Instagram',
			icon: 'bxl-instagram',
			url: 'https://instagram.com/hasanbocekk',
			color: 'text-gray-600 hover:text-gray-900'
		},
		{
			name: 'Mail',
			icon: 'bx-envelope',
			url: 'mailto:mail@hasanbocek.com',
			color: 'text-gray-600 hover:text-gray-900'
		}
	],

	// Skills
	skills: {
		title: 'Yetenekler',
		items: [
			'JavaScript',
			'Node.js',
			'Express',
			'MongoDB',
			'Git',
			'HTML',
			'CSS',
			'Svelte',
			'Tailwind CSS',
			'Bootstrap'
		]
	},

	// Projects
	projects: {
		title: 'Projeler',
		items: [
			{
				title: 'TCMS - Tenis Kulüp Yönetim Sistemi',
				description:
					'Tenis kulübünün yönetimi için, üyelerin yönetilebildiği, grup derslerinin oluşturulabildiği ve yoklamaların alınabilindiği bir sistem',
				tech: ['Svelte', 'Node.JS', 'MongoDB'],
				demo: "https://tcms-demo.visionof.me",
				status: {
					label: 'Demo Yayında',
					color: 'green'
				}
			},
			{
				title: 'ToonApp - IOS Mentorluk Uygulaması',
				description:
					'Kulüp bazında yapılan, IOS mentörlük programı kapsamında geliştirilen bir proje',
				tech: ['SupaBase', 'Swift UI', 'Deno.js', 'SQL'],
				status: {
					label: 'Askıda',
					color: 'yellow'
				}
			},
			{
				title: 'FR - Yemek Tarifi Paylaşma Uygulaması',
				description:
					'Kullanıcıların tarif ekleyebildiği, arayabildiği, değerlendirebildiği ve paylaşabildiği bir platform',
				tech: ['Node.js', 'Express', 'MongoDB', 'Next.js'],
				github: 'https://github.com/HasanBocek/Food-Recipe-Backend',
				status: {
					label: 'Bitirildi',
					color: 'blue'
				}
			},
			{
				title: 'HPMS -Otel Yönetim Sistemi',
				description:
					'Rezervasyon yönetimi, oda dağılımı, müşteri kayıtları, faturalandırma ve personel operasyonlarını içeren kapsamlı bir otel işletme çözümü',
				tech: ['Node.js', 'Express', 'MongoDB'],
				github: 'https://github.com/HasanBocek/Hotel-Property-Management-System',
				status: {
					label: 'Bitirildi',
					color: 'blue'
				}
			},
			{
				title: 'SPT - Öğrenci Süreç Takip Uygulaması',
				description:
					'Eğitim kurumları için öğrenci ilerlemesi ve performansının takibini sağlayan, eğitmenler ve yöneticiler için analiz özellikleri sunan bir sistem',
				tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
				github: 'https://github.com/HasanBocek/spt',
				status: {
					label: 'Bitirildi',
					color: 'blue'
				}
			}
		],
		buttons: {
			github: 'GitHub',
			live: 'Canlı',
			demo: "Demo"
		}
	},

	// Education
	education: {
		title: 'Eğitim',
		items: [
			{
				degree: 'Endüstri Mühendisliği Lisans',
				institution: 'Karadeniz Teknik Üniversitesi',
				period: '2025 - 2029'
			}
		]
	},

	// Club Timeline
	clubTimeline: {
		title: 'Kulüp Sorumlulukları',
		items: [
			{
				period: 'Şubat 2025 - Günümüz',
				role: 'Başkan Yardımcısı',
				club: 'KTÜ Tenis Kulübü',
				description:
					'Organizasyonların planlanması, üye iletişimi ve kulüp faaliyetlerinin düzenli yürütülmesinde aktif rol alıyorum'
			},
			{
				period: 'Ekim 2024 - Günümüz',
				role: 'Tenis Antrenörü',
				club: 'KTÜ Tenis Kulübü',
				description:
					'Tenis kulübü bünyesinde, üyelere yönelik başlangıç ve orta seviye gruplarına tenis eğitimi veriyorum'
			},
			{
				period: 'Nisan 2025 - Haziran 2025',
				role: 'Yönetim Kurulu Üyesi',
				club: 'KTÜCEC (Bilgisayar Mühendisliği Kulübü)',
				description:
					'Organizasyonların planlanması, üye iletişimi ve kulüp faaliyetlerinin düzenli yürütülmesinde aktif rol alıyorum'
			},

			{
				period: 'Kasım 2024 - Haziran 2025',
				role: 'Web Komitesi Direktörü',
				club: 'KTÜCEC (Bilgisayar Mühendisliği Kulübü)',
				description:
					'Kulübün dijital altyapısının yönetiminde yer alıyor ve web tabanlı projelerin planlanması ile geliştirilmesinde aktif rol alıyorum'
			}
		]
	},

	// Contact
	contact: {
		title: 'İletişime Geç'
	}
};
