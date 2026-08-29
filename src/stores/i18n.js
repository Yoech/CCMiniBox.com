import { computed, reactive, readonly, ref } from 'vue';
import { dictionary, languageMeta } from '../locales';

const fallbackLocale = 'zh';
const storageKey = 'ccminibox.locale';

function getBrowserLocale() {
  const saved = localStorage.getItem(storageKey);
  if (saved && dictionary[saved]) return saved;

  const browser = navigator.language.slice(0, 2).toLowerCase();
  return dictionary[browser] ? browser : fallbackLocale;
}

const locale = ref(getBrowserLocale());
const messages = readonly(reactive(dictionary));

function resolveMessage(path, selectedLocale = locale.value) {
  const parts = path.split('.');
  let value = messages[selectedLocale];

  for (const part of parts) {
    value = value?.[part];
  }

  if (value === undefined && selectedLocale !== fallbackLocale) {
    return resolveMessage(path, fallbackLocale);
  }

  return value ?? path;
}

function setLocale(nextLocale) {
  if (!dictionary[nextLocale]) return;
  locale.value = nextLocale;
  localStorage.setItem(storageKey, nextLocale);
}

export const i18n = {
  locale,
  locales: Object.keys(dictionary),
  languageMeta,
  messages,
  t: resolveMessage,
  setLocale,
  currentLanguage: computed(() => languageMeta[locale.value]),
};
