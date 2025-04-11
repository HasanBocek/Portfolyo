<script>
  import Timeline from '../../components/Timeline.svelte';
  
  const clubTimeline = [
    {
      date: "2025 - Günümüz",
      title: "KTÜ Tenis Kulübü - Kulüp Başkan Yardımcılığı",
      description: "Organizasyonların planlanması, üye iletişimi ve kulüp faaliyetlerinin düzenli yürütülmesinde aktif rol alıyorum."
    },
    {
      date: "2025 - Günümüz",
      title: "KTÜCEC (Bilgisayar Mühendisliği Kulübü) - Web Komite Direktörü",
      description: "Kulübün dijital altyapısının yönetiminde yer alıyor ve web tabanlı projelerin planlanması ile geliştirilmesinde aktif rol alıyorum.",
      details: [
        "KTUCEC web sitesi projesinin planlanması, geliştirilmesi ve yönetim süreçlerinde aktif rol alıyor; projeye teknik ve stratejik anlamda liderlik ediyorum."
      ]
    },
    {
      date: "2024 - Günümüz",
      title: "KTÜ Tenis Kulübü - Tenis Antrenörü",
      description: "Tenis kulübü bünyesinde, üyelere yönelik başlangıç ve orta seviye gruplarına tenis eğitimi veriyorum."
    }
  ];
</script>

<svelte:head>
  <title>Hakkımda | Hasan BÖCEK</title>
  <meta name="description" content="Hasan BÖCEK hakkında bilgiler, deneyimleri ve kulüp sorumlulukları">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>

<div class="py-12">
  <h1 class="text-4xl font-bold text-center mb-16 text-gray-800">Hakkımda</h1>
  
  <div class="container mx-auto px-4">
    <!-- Bio Section -->
    <div class="max-w-4xl mx-auto mb-16">
      <div class="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-500">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Merhaba, ben Hasan BÖCEK</h2>
        <p class="text-gray-600 mb-4">
          Karadeniz Teknik Üniversitesi'nde Elektrik Elektronik Mühendisliği öğrencisiyim ve profesyonel olarak Backend Developer olarak çalışıyorum.
        </p>
        <p class="text-gray-600 mb-4">
          Yaklaşık 6 yıllık yazılım deneyimine sahibim ve özellikle Node.js tabanlı uygulamalar geliştirme, RESTful API tasarımı ve veritabanı yönetimi konularında uzmanlık kazandım.
        </p>
        <p class="text-gray-600">
          Üniversitede iki farklı kulüpte aktif görev almaktayım: Bilgisayar Mühendisliği Kulübü'nde Web Komite Direktörü ve Tenis Kulübü'nde hem antrenörlük hem de başkan yardımcılığı sorumluluklarını üstleniyorum. Bu roller teknik becerilerimin yanında, liderlik, organizasyon ve iletişim yeteneklerimi de geliştirmeme katkı sağlıyor.
        </p>
      </div>
    </div>
    
    <!-- Club Timeline Section -->
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold mb-10 text-center text-gray-800">Kulüp Sorumluluklarım</h2>
      <Timeline events={clubTimeline} />
    </div>
    
    <!-- Skills & Interests -->
    <div class="max-w-4xl mx-auto mt-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-lg p-8 border-t-4 border-teal-500">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Teknik Yetenekler</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center">
              <i class="bx bxl-nodejs text-teal-500 mr-2 text-xl"></i>
              Node.js ve Express Framework
            </li>
            <li class="flex items-center">
              <i class="bx bx-data text-teal-500 mr-2 text-xl"></i>
              MongoDB ve ORM Teknolojileri
            </li>
            <li class="flex items-center">
              <i class="bx bx-code-alt text-teal-500 mr-2 text-xl"></i>
              RESTful API Tasarımı, MVC, MicroServis, Serverless Mimari
            </li>
            <li class="flex items-center">
              <i class="bx bx-shield-quarter text-teal-500 mr-2 text-xl"></i>
              Authentication & Authorization (OAuth2, JWT)
            </li>
            <li class="flex items-center">
              <i class="bx bxl-git text-teal-500 mr-2 text-xl"></i>
              Git & GitHub Version Kontrol
            </li>
          </ul>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg p-8 border-t-4 border-teal-500">
          <h3 class="text-xl font-bold mb-4 text-gray-800">Hobiler</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-center">
              <i class="bx bx-tennis-ball text-teal-500 mr-2 text-xl"></i>
              Tenis Oynamak
            </li>
            <li class="flex items-center">
              <i class="bx bx-book text-teal-500 mr-2 text-xl"></i>
                Kitap Okumak
            </li>
            <li class="flex items-center">
              <i class="bx bx-book text-teal-500 mr-2 text-xl"></i>
              Tolkien Legendariumu
            </li>
            <li class="flex items-center">
              <i class="bx bx-cycling text-teal-500 mr-2 text-xl"></i>
              Bisiklet Sürmek
            </li>
            <li class="flex items-center">
              <i class="bx bx-search-alt text-teal-500 mr-2 text-xl"></i>
              Araştırma Yapmak
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div> 