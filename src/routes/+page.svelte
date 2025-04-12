<script>
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  onMount(() => {
    isVisible = true;
  });
</script>

<svelte:head>
  <title>Hasan BÖCEK | Backend Developer</title>
  <meta name="description" content="Hasan BÖCEK - Backend Developer ve Elektrik Elektronik Mühendisliği Öğrencisi">
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</svelte:head>

<div class="space-y-16">
  <!-- Hero Section -->
  <section class="py-16 md:py-24 transition-opacity duration-1000 {isVisible ? 'opacity-100' : 'opacity-0'}">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 lg:pr-10">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Merhaba, ben <span class="text-teal-400">Hasan BÖCEK</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Backend Developer ve Elektrik Elektronik Mühendisliği öğrencisiyim. Teknoloji ve yazılım geliştirme konusunda tutkuluyum.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/projects" class="px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition duration-300 text-center">
              Projelerimi Görüntüle
            </a>
            <a href="/contact" class="px-6 py-3 border border-teal-600 text-teal-600 font-medium rounded-lg hover:bg-blue-50 transition duration-300 text-center">
              İletişime Geç
            </a>
          </div>
        </div>
        <div class="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
          <img src="https://i.imgur.com/5jB8GVw.jpeg" alt="Hasan BÖCEK" class="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-xl object-cover">
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Yeteneklerim</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 flex items-center justify-center bg-teal-50 rounded-full mr-4">
              <i class="bx bxl-nodejs text-2xl text-teal-500"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800">Backend Teknolojileri</h3>
          </div>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Node.js ve Express</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>RESTful API Tasarımı ve Geliştirme</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>MVC, MicroServis, Serverless Mimari</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Server Side Coding</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 flex items-center justify-center bg-teal-50 rounded-full mr-4">
              <i class="bx bx-data text-2xl text-teal-500"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800">Veritabanı & ORM</h3>
          </div>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>MongoDB</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Object Relational Mapping (ORM)</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Veritabanı Tasarımı ve Optimizasyonu</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Sorgu Optimizasyonu</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 flex items-center justify-center bg-teal-50 rounded-full mr-4">
              <i class="bx bx-shield-quarter text-2xl text-teal-500"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800">Güvenlik & Kimlik Doğrulama</h3>
          </div>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Authentication & Authorization</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>OAuth2 & JWT</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>SSL/TLS</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Güvenli API Tasarımı</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 flex items-center justify-center bg-teal-50 rounded-full mr-4">
              <i class="bx bx-cog text-2xl text-teal-500"></i>
            </div>
            <h3 class="text-xl font-semibold text-gray-800">Araçlar & Teknikler</h3>
          </div>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Git & GitHub</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Troubleshooting & Debugging</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>CI/CD Pipeline</span>
            </li>
            <li class="flex items-center">
              <i class="bx bx-check-circle text-teal-500 mr-2"></i>
              <span>Test Driven Development (TDD)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Call to Action -->
  <section class="py-16 bg-gradient-to-r from-teal-400 to-emerald-300 text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">Birlikte çalışalım!</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">Backend geliştirme ve sistem mimarisi konularında bir projeniz var mı? Heyecan verici fikirleri tartışmak ve birlikte hayata geçirmek için iletişime geçebilirsiniz.</p>
      <a href="/contact" class="inline-block px-8 py-4 bg-white text-teal-600 font-medium rounded-lg hover:bg-gray-100 transition duration-300">
        Mail Gönder
      </a>
    </div>
  </section>
</div>
