<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  gap?: 30 | 24 | 20 | 10 | 16 | 0;
  gapY?: 24 | 20 | 10 | 16 | 30;
}>();

const computedAttributes = computed(() => ({
  class: {
    flex: true,
    "flex-wrap": true,
    "mx-[-15px]": (props.gap ?? 0) === 30,
    "mx-[-12px]": (props.gap ?? 0) === 24,
    "mx-[-10px]": (props.gap ?? 0) === 20,
    "mx-[-5px]": (props.gap ?? 0) === 10,
    "mx-[-8px]": (props.gap ?? 0) === 16,
    "my-[-12px]": (props.gapY ?? 0) === 24,
    "my-[-8px]": (props.gapY ?? 0) === 16,
    "my-[-10px]": (props.gapY ?? 0) === 20,
    "my-[-5px]": (props.gapY ?? 0) === 10,
    "my-[-15px]": (props.gapY ?? 0) === 30,
  },
}));
</script>

<template>
  <div v-bind="computedAttributes">
    <slot />
  </div>
</template>
