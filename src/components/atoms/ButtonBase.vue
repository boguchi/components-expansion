<template>
  <button
    :disabled="disabled"
    :class="[$style.button, $style[theme]]"
    @click="$emit('onClick')"
  >
    {{ props.label }}
  </button>
</template>

<script setup lang="ts">
type Theme = "primary" | "secondary" | "thirty";

type ButtonProps = {
  label: string;
  theme?: Theme;
  disabled?: boolean;
};

const props = withDefaults(defineProps<ButtonProps>(), {
  theme: "primary",
  disabled: false,
});
</script>

<style module lang="scss">
.button {
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #2c2c2c;
  border-radius: 8px;
  padding: 12px 24px;
  transition: background-color 0.2s ease, color 0.2s ease;
  cursor: pointer;

  &:disabled {
    color: #b3b3b3;
    background-color: #d9d9d9;
    border-color: #b3b3b3;
    pointer-events: none;
  }
}

/* primary */
.primary {
  background-color: #2c2c2c;
  color: #ffffff;

  &:hover {
    background-color: #1f1f1f;
  }

  &:active {
    background-color: #141414;
  }
}

/* secondary */
.secondary {
  background-color: #f0f0f0;
  color: #2c2c2c;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
}

/* thirty */
.thirty {
  background-color: #ffffff;
  color: #2c2c2c;

  &:hover {
    background-color: #fafafa;
  }

  &:active {
    background-color: #f0f0f0;
  }
}
</style>
