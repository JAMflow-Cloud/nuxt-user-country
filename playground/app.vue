<template>
  <div>
    Nuxt module playground!

    <p>{{ status }}</p>
    <p v-if="status === 'success'">Your country is: {{ data }}</p>
    <p v-if="status === 'error'">Error: {{ data }}</p>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script setup>
const { data, refresh, status } = await useUserCountry();
</script>
