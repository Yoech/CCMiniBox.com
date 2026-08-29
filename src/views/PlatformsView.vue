<script setup>
import { inject } from 'vue';

const { t } = inject('i18n');

const platforms = [
  ['iOS', 'platforms.ios'],
  ['macOS', 'platforms.macos'],
  ['Android', 'platforms.android'],
  ['Windows', 'platforms.windows'],
];
</script>

<template>
  <section class="page-hero compact">
    <p class="eyebrow">{{ t('common.product') }}</p>
    <h1>{{ t('platforms.title') }}</h1>
    <p>{{ t('platforms.subtitle') }}</p>
  </section>

  <section class="platform-list">
    <article v-for="[name, bodyKey] in platforms" :key="name" class="platform-row">
      <div class="platform-icon">{{ name.slice(0, 2) }}</div>
      <div>
        <h2>{{ name }}</h2>
        <p>{{ t(bodyKey) }}</p>
      </div>
      <span>{{ t('common.comingSoon') }}</span>
    </article>
  </section>
</template>
