<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.name"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" :key="$route.name"  v-if="!$route.meta.keepAlive"/>
  </router-view> 
</template>
<script setup>
</script>
<style scoped>
</style>