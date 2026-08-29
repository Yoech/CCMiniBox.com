<script setup>
import { computed, inject } from 'vue';

const i18n = inject('i18n');
const platforms = computed(() => i18n.t('download.platforms'));
</script>

<template>
  <section class="page-hero compact">
    <p class="eyebrow">{{ i18n.t('common.product') }}</p>
    <h1>{{ i18n.t('download.title') }}</h1>
    <p>{{ i18n.t('download.subtitle') }}</p>
  </section>

  <section class="download-grid" :aria-label="i18n.t('download.title')">
    <article v-for="platform in platforms" :key="platform.name" class="download-card">
      <img class="download-logo" :src="platform.logo" :alt="platform.name" />
      <div>
        <h2>{{ platform.name }}</h2>
        <p>{{ platform.description }}</p>
      </div>
      <a
        class="button primary download-link"
        :href="platform.url"
        target="_blank"
        rel="noopener noreferrer"
        :aria-disabled="platform.disabled"
      >
        <span>{{ platform.cta }}</span>
        <svg
          class="open-icon lucide-icon lucide lucide-external-link"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      </a>
    </article>
  </section>
</template>
