<template>
  <transition name="appear">
    <div v-show="isShow" :class="$style.overlay" @click.self="$emit('close')">
      <transition name="slide-up">
        <div v-show="isShow" :class="$style.sheet">
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ isShow: boolean }>();
</script>

<style module lang="scss">
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
}

.sheet {
  background: #fff;
  width: 100%;
  max-height: 80vh;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 24px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
</style>

<style lang="scss">
.appear-enter-active,
.appear-leave-active {
  transition: opacity 0.1s ease-out;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}

.appear-enter-to,
.appear-leave-from {
  opacity: 1;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0%);
}
</style>
