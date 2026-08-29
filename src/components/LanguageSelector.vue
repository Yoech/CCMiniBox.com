<script setup>
import { inject } from 'vue';

const i18n = inject('i18n');
</script>

<template>
  <label class="select-field">
    <span>{{ i18n.t('common.language') }}</span>
    <select :value="i18n.locale.value" @change="i18n.setLocale($event.target.value)">
      <option v-for="locale in i18n.locales" :key="locale" :value="locale">
        {{ i18n.languageMeta[locale].label }}
      </option>
    </select>
  </label>
</template>
