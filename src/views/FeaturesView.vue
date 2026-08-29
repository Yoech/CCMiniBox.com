<script setup>
import { computed, inject } from 'vue';

const i18n = inject('i18n');
const items = computed(() => i18n.t('features.items'));
</script>

<template>
  <section class="page-hero compact">
    <p class="eyebrow">{{ i18n.t('common.product') }}</p>
    <h1>{{ i18n.t('features.title') }}</h1>
    <p>{{ i18n.t('features.subtitle') }}</p>
  </section>

  <section class="cards-grid">
    <article v-for="([title, body], index) in items" :key="title" class="info-card">
      <span class="card-index">{{ String(index + 1).padStart(2, '0') }}</span>
      <h2>{{ title }}</h2>
      <p>{{ body }}</p>
    </article>
  </section>
</template>
