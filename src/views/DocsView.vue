<script setup>
import { computed, inject } from 'vue';

const i18n = inject('i18n');
const steps = computed(() => i18n.t('docs.steps'));
</script>

<template>
  <section class="page-hero compact">
    <p class="eyebrow">{{ i18n.t('common.product') }}</p>
    <h1>{{ i18n.t('docs.title') }}</h1>
    <p>{{ i18n.t('docs.subtitle') }}</p>
  </section>

  <section class="docs-steps">
    <article v-for="([title, body], index) in steps" :key="title">
      <span>{{ index + 1 }}</span>
      <div>
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
      </div>
    </article>
  </section>
</template>
