<script setup>
import { inject } from 'vue';

const { t } = inject('i18n');
</script>

<template>
  <section class="page-hero compact center">
    <p class="eyebrow">404</p>
    <h1>{{ t('notFound.title') }}</h1>
    <p>{{ t('notFound.body') }}</p>
    <RouterLink class="button primary" to="/">{{ t('notFound.action') }}</RouterLink>
  </section>
</template>
