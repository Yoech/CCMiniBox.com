import { createApp, watch } from 'vue';
import App from './App.vue';
import router from './router';
import { i18n } from './stores/i18n';
import './styles/main.css';

const app = createApp(App);

app.provide('i18n', i18n);
app.use(router);
app.mount('#app');

watch(
  () => i18n.locale.value,
  (locale) => {
    document.documentElement.lang = i18n.languageMeta[locale]?.htmlLang ?? locale;
    document.title = i18n.t('meta.title');
  },
  { immediate: true },
);
