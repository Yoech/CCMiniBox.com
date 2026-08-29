<script setup>
import { inject } from 'vue';

const { t } = inject('i18n');
</script>

<template>
  <footer class="site-footer">
    <div>
      <strong>© 2026 {{ t('common.product') }}</strong>
      <p>{{ t('footer.tagline') }}</p>
    </div>
  </footer>
</template>
