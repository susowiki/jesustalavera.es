<template>
  <div id="app-root">
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Root app component
</script>

<style scoped>
#app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding-top: var(--header-height);
}
</style>
