<script setup>
import { inject } from 'vue';
import LanguageSelector from './LanguageSelector.vue';
import ThemeToggle from './ThemeToggle.vue';

const { t } = inject('i18n');

const navItems = [
  { to: '/', key: 'nav.home' },
  { to: '/features', key: 'nav.features' },
  { to: '/platforms', key: 'nav.platforms' },
  { to: '/download', key: 'nav.download' },
  { to: '/docs', key: 'nav.docs' },
];
</script>

<template>
  <header class="site-header">
    <RouterLink class="brand" to="/" aria-label="CCMiniBox">
      <span class="brand-mark">CC</span>
      <span>{{ t('common.product') }}</span>
    </RouterLink>

    <nav class="nav-links" aria-label="Primary">
      <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
        {{ t(item.key) }}
      </RouterLink>
    </nav>

    <div class="header-actions">
      <LanguageSelector />
      <ThemeToggle />
    </div>
  </header>
</template>
