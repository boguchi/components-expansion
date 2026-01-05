<template>
  <div :class="$style.card">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style module lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  padding: 16px 24px;
}
</style>
