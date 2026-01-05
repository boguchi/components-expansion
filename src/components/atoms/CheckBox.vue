<template>
  <label :class="$style.checkboxWrapper">
    <input type="checkbox" v-model="checked" :class="$style.checkboxInput" />
    <span :class="$style.labelText">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();

const checked = defineModel<boolean>();
</script>

<style module>
.checkboxWrapper {
  color: #2c2c2c;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.checkboxInput {
  margin-right: 12px;
}
</style>
