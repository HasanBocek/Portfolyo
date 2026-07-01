export const tr = {
	// Navigation
	nav: {
		projects: 'Projeler',
		experience: 'Deneyim',
		contact: 'İletişim'
	},

	// Hero
	hero: {
		greeting: 'Merhaba, ben',
		name: 'Hasan BÖCEK',
		role: 'Freelance Full Stack Developer',
		description: 'Web uygulamaları ve yönetim panelleri geliştiriyorum. Yeni bir fikriniz, devam eden bir projeniz veya sadece "böyle bir şey lazım" demeniz yeterli — yazın, birlikte bakalım.',
		cv: 'CV İndir',
		contact: 'Proje Konuşalım'
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
		title: 'Projeler',
		subtitle: 'Gerçek işlerden örnekler. Benzer bir ihtiyacınız varsa rahatça ulaşabilirsiniz.',
		items: [
			{
				slug: 'menuvix',
				title: 'MenuVix - Restoran POS Sistemi',
				description: 'Siparişten mutfağa, kasadan raporlamaya kadar restoran operasyonlarını uçtan uca yöneten POS sistemi.',
				detailDescription: 'MenuVix; sipariş, masa, mutfak ekranı, ödeme ve raporlama süreçlerini tek platformda birleştiren tam özellikli bir restoran POS çözümüdür. NestJS tabanlı backend ve Next.js ile geliştirilmiş modern arayüzü sayesinde günlük operasyonları hızlandırır. Rol tabanlı yetkilendirme, çoklu dil desteği ve detaylı satış raporları ile işletmelerin ihtiyaç duyduğu tüm temel modülleri kapsar.',
				tech: ['NestJS', 'Next.js'],
				sections: [
					{
						name: 'Operasyon',
						pages: [
							{ label: 'Anasayfa', src: 'https://cdn.bocek.app/u/q2wpTY.png' },
							{ label: 'Garson', src: 'https://cdn.bocek.app/u/CHbHAK.png' },
							{ label: 'Masalar', src: 'https://cdn.bocek.app/u/qi2MZx.png' },
							{ label: 'Masa Detayı', src: 'https://cdn.bocek.app/u/eB1lkF.png' },
							{ label: 'Rezervasyonlar', src: 'https://cdn.bocek.app/u/DAz0y3.png' },
							{ label: 'Yeni Rezervasyon', src: 'https://cdn.bocek.app/u/SHzqxm.png' },
							{ label: 'Mutfak', src: 'https://cdn.bocek.app/u/DlKJC9.png' },
							{ label: 'Siparişler', src: 'https://cdn.bocek.app/u/FXELmV.png' },
							{ label: 'Stok Takibi', src: 'https://cdn.bocek.app/u/aRc7MK.png' },
							{ label: 'Kasa', src: 'https://cdn.bocek.app/u/i3VzsZ.png' },
							{ label: 'Kasa Detayı', src: 'https://cdn.bocek.app/u/VVRDt8.png' },
							{ label: 'Kasa İşlem Geçmişi', src: 'https://cdn.bocek.app/u/x2hnte.png' },
						]
					},
					{
						name: 'Yönetim',
						pages: [
							{ label: 'Genel Bakış', src: 'https://cdn.bocek.app/u/9zBLCj.png' },
							{ label: 'Masa Yönetimi', src: 'https://cdn.bocek.app/u/Slckr8.png' },
							{ label: 'Ürün Yönetimi', src: 'https://cdn.bocek.app/u/02FoN8.png' },
							{ label: 'Personel Yönetimi', src: 'https://cdn.bocek.app/u/V4TAck.png' },
							{ label: 'Cihazlar', src: 'https://cdn.bocek.app/u/aEy68X.png' },
							{ label: 'Mağaza Ayarları', src: 'https://cdn.bocek.app/u/qdQ1HC.png' },
							{ label: 'Yazıcı Ayarları', src: 'https://cdn.bocek.app/u/9GbdFW.png' },
							{ label: 'Sistem Kayıtları', src: 'https://cdn.bocek.app/u/M8vxhR.png' },
						]
					},
					{
						name: 'Raporlar',
						pages: [
							{ label: 'Genel Bakış', src: 'https://cdn.bocek.app/u/6iablG.png' },
							{ label: 'Satış Raporları', src: 'https://cdn.bocek.app/u/TkKcVq.png' },
							{ label: 'Ürün Raporları', src: 'https://cdn.bocek.app/u/qh5e2G.png' },
							{ label: 'Personel Performansı', src: 'https://cdn.bocek.app/u/O4w7Xh.png' },
							{ label: 'Ödeme Raporları', src: 'https://cdn.bocek.app/u/HqGXTI.png' },
							{ label: 'Saatlik Analiz', src: 'https://cdn.bocek.app/u/GgJROu.png' },
							{ label: 'Masa Performansı', src: 'https://cdn.bocek.app/u/hlvWUx.png' },
							{ label: 'İptal & İkram', src: 'https://cdn.bocek.app/u/QFzlfp.png' },
							
						]
					},
				],
				live: 'https://menuvix.com',
				status: { label: 'Canlı', color: 'green' }
			},
			{
				slug: 'on-muhasebe-erp',
				title: 'Ön Muhasebe ERP',
				description: 'Cari, stok, kasa, fatura ve raporlama modüllerini tek arayüzde sunan tarayıcı tabanlı ön muhasebe sistemi.',
				detailDescription: 'Windows masaüstü deneyimini tarayıcıya taşıyan modern bir ön muhasebe ERP uygulaması. Cari hesap yönetimi, stok ve depo takibi, kasa ile banka işlemleri, fatura oluşturma, çek/senet takibi, hızlı tahsilat ve raporlama modüllerini bir arada sunar. Dashboard üzerinden tüm modüllere hızlı erişim; arama, filtreleme ve hareket geçmişi ile günlük muhasebe işlemlerini sadeleştirir.',
				tech: ['Next.js', 'TypeScript'],
				demo: 'https://erp.demo.bocek.app',
				embedUrl: 'https://erp.demo.bocek.app',
				status: { label: 'Demo', color: 'yellow' }
			},
			{
				slug: 'ktutenis',
				title: 'KTÜ Tenis Kulübü Yönetim Sistemi',
				description: 'KTÜ Tenis Kulübü için üye yönetimi, ders planlama ve yoklama takibini kapsayan kulüp yönetim platformu.',
				detailDescription: 'KTÜ Tenis Kulübü\'nün günlük operasyonlarını dijitalleştiren kapsamlı bir yönetim platformu. Svelte tabanlı arayüz, Node.js backend ve MongoDB ile geliştirilmiştir. Üye kaydı ve yönetimi, grup ve özel ders planlama, QR kodlu yoklama, ödeme takibi ve otomatik bildirimler içerir. Yöneticiler ve antrenörler programlarını kolayca yönetirken üyeler sezgisel arayüzden ders rezervasyonu yapabilir.',
				tech: ['Svelte', 'Node.js', 'MongoDB'],
				demo: 'https://tenis.demo.bocek.app',
				embedUrl: 'https://tenis.demo.bocek.app',
				live: 'https://ktutenis.com',
				status: { label: 'Canlı', color: 'green' }
			}
		],
		buttons: {
			github: 'Kaynak Kod',
			live: 'Canlı',
			demo: 'Demo',
			detail: 'Detaylar'
		},
		detailPage: {
			back: 'Projelere Dön',
			tech: 'Teknolojiler',
			links: 'Bağlantılar',
			sections: 'Bölümler',
			pages: 'Sayfalar',
			liveDemo: 'Canlı Demo',
			embedHint: 'Tam ekran deneyim için yukarıdaki demo bağlantısını kullanabilirsiniz.'
		}
	},

	// Experience
	experience: {
		title: 'Deneyim',
		active: 'Aktif',
		items: [
			{
				role: 'Full Stack Developer',
				company: 'Eupholias Developers',
				companyUrl: 'https://eupholias.com',
				period: 'Ara 2025 - Nis 2026',
				current: false
			},
			{
				role: 'Frontend Developer',
				company: 'Freelance',
				companyUrl: '',
				period: '2025 - Devam Ediyor',
				current: true
			},
			{
				role: 'Backend Developer',
				company: 'Freelance',
				companyUrl: '',
				period: '2018 - Devam Ediyor',
				current: true
			}
		]
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
				period: 'Şub 2026 - Devam Ediyor',
				role: 'Teknik Departman Direktörü',
				club: 'KTÜSDC (Yazılım Geliştirme Kulübü)',
				description: 'Teknik eğitim, proje mentörlüğü ve kodlama etkinlikleri ile atölyelerin organizasyonunda aktif rol alıyorum',
				clubUrl: 'https://ktusdc.com'
			},
			{
				period: 'Şub 2025 - Devam Ediyor',
				role: 'Yönetim Kurulu Başkanı Yardımcısı',
				club: 'KTÜ Tenis Kulübü',
				description: 'Organizasyonların planlanması, üye iletişimi ve kulüp faaliyetlerinin düzenli yürütülmesinde aktif rol alıyorum',
				clubUrl: 'https://ktutenis.com'
			},
			{
				period: 'Eki 2024 - Devam Ediyor',
				role: 'Tenis Antrenörü',
				club: 'KTÜ Tenis Kulübü',
				description: 'Tenis kulübü bünyesinde, üyelere yönelik başlangıç ve orta seviye gruplarına tenis eğitimi veriyorum',
				clubUrl: 'https://ktutenis.com'
			},
			{
				period: 'Nis 2025 - Haz 2025',
				role: 'Yönetim Kurulu Üyesi',
				club: 'KTÜCEC (Bilgisayar Müh. Kulübü)',
				description: 'Organizasyon planlama ve kulüp faaliyetlerinin koordinasyonunda aktif rol aldım'
			},
			{
				period: 'Kas 2024 - Haz 2025',
				role: 'Web Komitesi Direktörü',
				club: 'KTÜCEC (Bilgisayar Müh. Kulübü)',
				description: 'Dijital altyapı yönetimi ve web tabanlı projelerin geliştirilmesi konusunda sorumluluk aldım'
			}
		]
	},

	// Contact
	contact: {
		title: 'Projeniz için yazın',
		description: 'Kısa bir mail yeterli — ne istediğinizi, varsa zaman çizelgenizi yazın, gerisini birlikte netleştiririz. Genelde birkaç saat içinde dönerim.',
		email: 'contact@hasanbocek.com'
	},

	// Footer
	footer: {
		rights: 'Tüm hakları saklıdır.'
	}
};
