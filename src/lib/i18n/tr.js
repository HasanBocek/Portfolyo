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
		role: 'Full Stack Developer',
		description: 'Ölçeklenebilir ve sürdürülebilir  sistemler geliştiriyorum.',
		cv: 'CV İndir',
		contact: 'İletişime Geç'
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
		subtitle: 'Geliştirdiğim bazı projeler',
		items: [
			{
				slug: 'menuvix',
				title: 'MenuVix - Restoran POS Sistemi',
				description: 'Sipariş alımından son ödemeye kadar restoran operasyonlarının her aşamasını kapsayan kapsamlı bir POS sistemi.',
				detailDescription: 'MenuVix, restoran operasyonlarının her aşamasını kolaylaştırmak için tasarlanmış tam özellikli bir restoran satış noktası sistemidir. Güçlü bir backend API için NestJS ve modern, duyarlı bir frontend için Next.js ile geliştirilmiştir. Sistem sipariş yönetimi, masa takibi, masaüstü mutfak ekranı entegrasyonu, ödeme işleme ve gerçek zamanlı analitik gibi özellikler sunar. Personel yönetimi için rol tabanlı erişim kontrolü, çoklu dil desteği ve günlük raporlama için temiz bir kontrol paneli bulunmaktadır.',
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
				slug: 'nodx',
				title: 'Nodx',
				description: 'Nodx modern teknoloji ile kurumsal düzeyde web çözümleri sunuyor.',
				detailDescription: 'Nodx, en güncel teknolojileri kullanarak kurumsal düzeyde web çözümleri sunar. Üstün performans için Bun çalışma zamanı, hafif ama güçlü bir API çerçevesi olarak Elysia ve sunucu tarafında render edilen frontendler için Next.js ile geliştirilmiştir. Platform yüksek kullanılabilirlik, otomatik ölçeklendirme ve geliştirici deneyimine odaklanmaktadır. Temel özellikler arasında otomatik dağıtım boru hatları, entegre izleme panelleri ve kapsamlı API belgeleri bulunmaktadır.',
				tech: ['Bun', 'Elysia', 'Next.js'],
				live: 'https://nodx.org',
				status: { label: 'Live', color: 'green' }
			},
			{
				slug: 'tennis-club-management',
				title: 'Tenis Kulübü Yönetim Sistemi',
				description: 'Üye yönetimi, grup dersi oluşturma ve yoklama alma özellikleriyle tenis kulübü yönetim sistemi.',
				detailDescription: 'Kulüp yöneticileri ve antrenörler için günlük operasyonları basitleştiren kapsamlı bir tenis kulübü yönetim platformu. Reaktif bir frontend için Svelte, backend için Node.js ve esnek veri depolama için MongoDB ile geliştirilmiştir. Sistem üye kaydı ve yönetimi, grup ve birebir ders planlama, QR kod desteği ile yoklama takibi, ödeme takibi ve otomatik bildirim sistemleri içermektedir. Antrenörler programlarını yönetebilirken üyeler sezgisel bir arayüz üzerinden seans rezervasyonu yapabilir.',
				tech: ['Svelte', 'Node.js', 'MongoDB'],
				demo: 'https://tcms-demo.bocek.app',
				live: 'https://ktutenis.com',
				status: { label: 'Canlı', color: 'green' }
			},
			{
				slug: 'food-recipe-platform',
				title: 'Yemek Tarifi Paylaşım Platformu',
				description: 'Kullanıcıların tarif ekleyip arayabildiği, değerlendirip paylaşabildiği bir platform.',
				detailDescription: 'Yemek meraklılarının favori tariflerini keşfedebileceği, oluşturabileceği ve paylaşabileceği sosyal bir tarif paylaşım platformu. Backend API için Node.js ve Express, esnek tarif veri depolaması için MongoDB ve hızlı, SEO dostu bir frontend için Next.js ile geliştirilmiştir. Gelişmiş filtreli tarif arama, malzeme bazlı öneriler, kullanıcı değerlendirmeleri ve yorumlar, tarif koleksiyonları ve sosyal paylaşım özellikleri bulunmaktadır. Platform görsel yükleme, besin değeri hesaplama ve adım adım pişirme talimatlarını desteklemektedir.',
				tech: ['Node.js', 'Express', 'MongoDB', 'Next.js'],
				github: 'https://github.com/HasanBocek/Food-Recipe-Backend',
				status: { label: 'Tamamlandı', color: 'blue' }
			},
			{
				slug: 'hotel-management',
				title: 'Otel Yönetim Sistemi',
				description: 'Rezervasyon, oda dağılımı, faturalandırma ve personel operasyonlarını içeren otel yönetim sistemi.',
				detailDescription: 'Küçük ve orta ölçekli oteller ve butik konaklama tesisleri için tasarlanmış eksiksiz bir otel mülk yönetim sistemi (PMS). Sistem müsaitlik takvimleri ile rezervasyon, oda atama ve durum takibi, misafir check-in/check-out iş akışları, faturalama ve faturalandırma ile personel görev yönetimini yürütmektedir. Güvenilir backend servisleri için Node.js ve Express, esnek veri modelleme için MongoDB ile geliştirilmiştir. Doluluk oranları, gelir takibi ve misafir analitiği için raporlama panelleri içermektedir.',
				tech: ['Node.js', 'Express', 'MongoDB'],
				github: 'https://github.com/HasanBocek/Hotel-Property-Management-System',
				status: { label: 'Tamamlandı', color: 'blue' }
			},
			{
				slug: 'student-progress-tracker',
				title: 'Öğrenci İlerleme Takip Sistemi',
				description: 'Eğitim kurumları için öğrenci ilerleme takip ve performans analiz sistemi.',
				detailDescription: 'Eğitim kurumlarının öğrenci performansını izlemesi ve iyileştirmesi için tasarlanmış analitik odaklı bir öğrenci ilerleme takip sistemi. Backend için Node.js, Express ve MongoDB, frontend için EJS şablonları ve Bootstrap ile geliştirilmiştir. Öğrenci kayıt yönetimi, görsel ilerleme grafikleri ile not takibi, yoklama izleme, trend analizi ile performans analitiği ve otomatik ilerleme raporları gibi özellikler içermektedir. Öğretmenler görev oluşturabilir, gönderileri takip edebilir ve kontrol paneli üzerinden ek desteğe ihtiyaç duyan öğrencileri belirleyebilir.',
				tech: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
				github: 'https://github.com/HasanBocek/spt',
				status: { label: 'Tamamlandı', color: 'blue' }
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
			pages: 'Sayfalar'
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
				period: 'Ara 2025 - Devam Ediyor',
				current: true
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
		title: 'İletişime Geç',
		description: 'Bir proje fikriniz mi var? Birlikte çalışalım.',
		email: 'contact@hasanbocek.com'
	},

	// Footer
	footer: {
		rights: 'Tüm hakları saklıdır.'
	},

	// WakaTime
	wakatime: {
		loading: 'Yükleniyor...',
		error: 'Kodlama süresi yüklenemedi',
		prefix: 'Bu Ayın Kodlama Süresi:',
		since: '21 Aralık 2025\'ten beri'
	}
};
