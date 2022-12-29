<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  colXxl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 30 | 24 | 20 | 10 | 16 | 0;
  gapY?: 24 | 20 | 10 | 16 | 30;
}>();

const computedAttributes = computed(() => ({
  class: {
    "shrink-0": true,
    "px-[15px]": (props.gap ?? 0) === 30,
    "px-[12px]": (props.gap ?? 0) === 24,
    "px-[10px]": (props.gap ?? 0) === 20,
    "px-[8px]": (props.gap ?? 0) === 16,
    "px-[5px]": (props.gap ?? 0) === 10,
    "py-[12px]": (props.gapY ?? 0) === 24,
    "py-[10px]": (props.gapY ?? 0) === 20,
    "py-[5px]": (props.gapY ?? 0) === 10,
    "py-[8px]": (props.gapY ?? 0) === 16,
    "py-[15px]": (props.gapY ?? 0) === 30,
    "w-1/12": props.col === 1,
    "w-2/12": props.col === 2,
    "w-3/12": props.col === 3,
    "w-4/12": props.col === 4,
    "w-5/12": props.col === 5,
    "w-6/12": props.col === 6,
    "w-7/12": props.col === 7,
    "w-8/12": props.col === 8,
    "w-9/12": props.col === 9,
    "w-10/12": props.col === 10,
    "w-11/12": props.col === 11,
    "w-full": props.col === 12 || !props.col,
    "sm:w-1/12": props.colSm === 1,
    "sm:w-2/12": props.colSm === 2,
    "sm:w-3/12": props.colSm === 3,
    "sm:w-4/12": props.colSm === 4,
    "sm:w-5/12": props.colSm === 5,
    "sm:w-6/12": props.colSm === 6,
    "sm:w-7/12": props.colSm === 7,
    "sm:w-8/12": props.colSm === 8,
    "sm:w-9/12": props.colSm === 9,
    "sm:w-10/12": props.colSm === 10,
    "sm:w-11/12": props.colSm === 11,
    "sm:w-full": props.colSm === 12,
    "md:w-1/12": props.colMd === 1,
    "md:w-2/12": props.colMd === 2,
    "md:w-3/12": props.colMd === 3,
    "md:w-4/12": props.colMd === 4,
    "md:w-5/12": props.colMd === 5,
    "md:w-6/12": props.colMd === 6,
    "md:w-7/12": props.colMd === 7,
    "md:w-8/12": props.colMd === 8,
    "md:w-9/12": props.colMd === 9,
    "md:w-10/12": props.colMd === 10,
    "md:w-11/12": props.colMd === 11,
    "md:w-full": props.colMd === 12,
    "lg:w-1/12": props.colLg === 1,
    "lg:w-2/12": props.colLg === 2,
    "lg:w-3/12": props.colLg === 3,
    "lg:w-4/12": props.colLg === 4,
    "lg:w-5/12": props.colLg === 5,
    "lg:w-6/12": props.colLg === 6,
    "lg:w-7/12": props.colLg === 7,
    "lg:w-8/12": props.colLg === 8,
    "lg:w-9/12": props.colLg === 9,
    "lg:w-10/12": props.colLg === 10,
    "lg:w-11/12": props.colLg === 11,
    "lg:w-full": props.colLg === 12,
    "xl:w-1/12": props.colXl === 1,
    "xl:w-2/12": props.colXl === 2,
    "xl:w-3/12": props.colXl === 3,
    "xl:w-4/12": props.colXl === 4,
    "xl:w-5/12": props.colXl === 5,
    "xl:w-6/12": props.colXl === 6,
    "xl:w-7/12": props.colXl === 7,
    "xl:w-8/12": props.colXl === 8,
    "xl:w-9/12": props.colXl === 9,
    "xl:w-10/12": props.colXl === 10,
    "xl:w-11/12": props.colXl === 11,
    "xl:w-full": props.colXl === 12,
    "xxl:w-1/12": props.colXxl === 1,
    "xxl:w-2/12": props.colXxl === 2,
    "xxl:w-3/12": props.colXxl === 3,
    "xxl:w-4/12": props.colXxl === 4,
    "xxl:w-5/12": props.colXxl === 5,
    "xxl:w-6/12": props.colXxl === 6,
    "xxl:w-7/12": props.colXxl === 7,
    "xxl:w-8/12": props.colXxl === 8,
    "xxl:w-9/12": props.colXxl === 9,
    "xxl:w-10/12": props.colXxl === 10,
    "xxl:w-11/12": props.colXxl === 11,
    "xxl:w-full": props.colXxl === 12,
  },
}));
</script>

<template>
  <div v-bind="computedAttributes">
    <slot></slot>
  </div>
</template>
