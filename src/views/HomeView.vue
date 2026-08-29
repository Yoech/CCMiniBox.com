<script setup>
import { inject } from 'vue';
import ProductMockup from '../components/ProductMockup.vue';

const { t } = inject('i18n');
</script>

<template>
  <section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">{{ t('hero.eyebrow') }}</p>
      <h1>{{ t('hero.title') }}</h1>
      <p class="hero-body">{{ t('hero.body') }}</p>

      <div class="hero-actions">
        <RouterLink class="button primary" to="/download">{{ t('common.start') }}</RouterLink>
        <RouterLink class="button secondary" to="/docs">{{ t('common.docs') }}</RouterLink>
      </div>

      <div class="hero-stats" aria-label="CCMiniBox highlights">
        <span>{{ t('hero.statOne') }}</span>
        <span>{{ t('hero.statTwo') }}</span>
        <span>{{ t('hero.statThree') }}</span>
      </div>
    </div>

    <ProductMockup />
  </section>

  <section class="feature-strip">
    <article>
      <h2>{{ t('sections.terminalTitle') }}</h2>
      <p>{{ t('sections.terminalBody') }}</p>
    </article>
    <article>
      <h2>{{ t('sections.telemetryTitle') }}</h2>
      <p>{{ t('sections.telemetryBody') }}</p>
    </article>
    <article>
      <h2>{{ t('sections.flutterTitle') }}</h2>
      <p>{{ t('sections.flutterBody') }}</p>
    </article>
  </section>
</template>
