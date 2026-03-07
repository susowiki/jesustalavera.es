<template>
  <div>
    <HeroSection
      :name="author?.name || 'Jesús Talavera'"
      :bio="author?.bio || ''"
      :image-url="author?.imageUrl || ''"
      :twitter="author?.twitter || ''"
      :linkedin="author?.linkedin || ''"
      :github="author?.github || ''"
    />
  </div>
</template>

<script setup lang="ts">
const { data: author } = await useAsyncData('author', () =>
  $fetch('/api/author')
)
</script>
