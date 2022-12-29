<script setup lang="ts">
const props = defineProps<{
  withoutXs?: boolean;
  withoutSm?: boolean;
  withoutMd?: boolean;
  withoutLg?: boolean;
  withoutXl?: boolean;
  withoutXxl?: boolean;
}>();
</script>

<template>
  <div
    :class="{
      'w-full': props.withoutXl,
      'w-content-xs': !props.withoutXs,
      'sm:w-full': props.withoutSm,
      'sm:w-content-sm': !props.withoutSm,
      'md:w-full': props.withoutMd,
      'md:w-content-md': !props.withoutMd,
      'lg:w-full': props.withoutLg,
      'lg:w-content-lg': !props.withoutLg,
      'xl:w-full': props.withoutXl,
      'xl:w-content-xl': !props.withoutXl,
      'xxl:w-full': props.withoutXxl,
      'xxl:w-content-xxl': !props.withoutXxl,
      'mx-auto': true,
      'print:w-full': true,
      'print:md:w-full': true,
      'print:lg:w-full': true,
      'print:xxl:w-full': true,
      'print:xxxl:w-full': true,
    }"
  >
    <slot></slot>
  </div>
</template>
