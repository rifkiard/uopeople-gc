<script setup lang="ts">
const props = defineProps<{
  title: string;
  link: string;
}>();
</script>

<template>
  <a
    target="_blank"
    :href="props.link"
    class="p-4 bg-primary-100/20 hover:bg-primary-100/50 rounded block"
  >
    <h3 class="text-white font-medium text-2xl leading">{{ props.title }}</h3>
    <p class="text-slate-400 underline mt-2 break-all">{{ props.link }}</p>
  </a>
</template>
