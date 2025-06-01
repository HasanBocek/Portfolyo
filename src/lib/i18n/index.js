import { writable, derived } from 'svelte/store';
import { en } from './en';
import { tr } from './tr';

export const languages = {
  en: 'English',
  tr: 'Türkçe'
};

export const language = writable(
  typeof window !== 'undefined' 
    ? localStorage.getItem('language') || 'tr'
    : 'tr'
);

if (typeof window !== 'undefined') {
  language.subscribe(value => {
    localStorage.setItem('language', value);
  });
}

const dictionary = {
  en,
  tr
};

export const t = derived(
  language,
  $language => (key) => {
    return getNestedTranslation(dictionary[$language], key);
  }
);

function getNestedTranslation(obj, path) {
  if (!path) return obj;
  
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path;
    }
  }
  
  return result;
} 