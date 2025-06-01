<script>
  import { language, languages } from '../lib/i18n';
  
  function toggleLanguage() {
    $language = $language === 'en' ? 'tr' : 'en';
  }
</script>

<button 
  on:click={toggleLanguage}
  class="cursor-pointer flex items-center justify-center px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
>
  <i class="bx bx-globe mr-1"></i> 
  {$language === 'en' ? 'TR' : 'EN'}
</button> 