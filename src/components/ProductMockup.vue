<script setup>
import { inject } from 'vue';

const { t } = inject('i18n');
</script>

<template>
  <section class="product-mockup" :aria-label="t('common.status')">
    <div class="mockup-topbar">
      <div class="window-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <strong>{{ t('mockup.host') }}</strong>
      <span class="badge">SSH</span>
    </div>

    <div class="mockup-grid">
      <div class="terminal-pane">
        <div class="terminal-line muted">$ {{ t('mockup.command') }}</div>
        <div class="terminal-line">Last login: Sun Aug 30 05:42</div>
        <div class="terminal-line success">systemctl status caddy</div>
        <div class="terminal-line">active (running) - 12ms avg latency</div>
        <div class="terminal-cursor"></div>
      </div>

      <div class="metrics-pane">
        <article class="metric-card">
          <span>{{ t('mockup.cpu') }}</span>
          <strong>42%</strong>
          <div class="meter"><i style="width: 42%"></i></div>
        </article>
        <article class="metric-card">
          <span>{{ t('mockup.memory') }}</span>
          <strong>6.8G</strong>
          <div class="meter"><i style="width: 68%"></i></div>
        </article>
        <article class="metric-card wide">
          <span>{{ t('mockup.network') }}</span>
          <div class="chart-bars" aria-hidden="true">
            <i style="height: 40%"></i>
            <i style="height: 64%"></i>
            <i style="height: 46%"></i>
            <i style="height: 82%"></i>
            <i style="height: 58%"></i>
            <i style="height: 74%"></i>
            <i style="height: 48%"></i>
          </div>
        </article>
        <article class="metric-chip">
          {{ t('mockup.disk') }} 71%
        </article>
        <article class="metric-chip">
          {{ t('mockup.latency') }} 12ms
        </article>
      </div>
    </div>
  </section>
</template>
