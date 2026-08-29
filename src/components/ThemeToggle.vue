<script setup>
import { inject } from 'vue';
import { themeStore } from '../stores/theme';

const { t } = inject('i18n');
</script>

<template>
  <button class="theme-toggle" type="button" :aria-label="t('common.theme')" @click="themeStore.toggleTheme">
    <span class="theme-icon" :class="themeStore.theme.value" aria-hidden="true"></span>
    <span>{{ themeStore.theme.value === 'dark' ? t('common.dark') : t('common.light') }}</span>
  </button>
</template>
