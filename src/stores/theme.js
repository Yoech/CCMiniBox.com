import { ref, watch } from 'vue';

const storageKey = 'ccminibox.theme';
const themes = ['light', 'dark'];

function getInitialTheme() {
  const saved = localStorage.getItem(storageKey);
  if (themes.includes(saved)) return saved;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const theme = ref(getInitialTheme());

watch(
  theme,
  (nextTheme) => {
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
  },
  { immediate: true },
);

function setTheme(nextTheme) {
  if (!themes.includes(nextTheme)) return;
  theme.value = nextTheme;
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
}

export const themeStore = {
  theme,
  themes,
  setTheme,
  toggleTheme,
};
