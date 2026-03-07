<template>
  <div class="resume-page">
    <div class="container">
      <div class="resume-header section animate-fade-in-up">
        <h1 class="section-title">Resume</h1>
        <p class="section-subtitle">My professional background and skills.</p>
      </div>

      <ResumeTimeline
        title="Experience"
        :items="experience"
      />

      <ResumeTimeline
        title="Education"
        :items="education"
      />

      <SkillBadges
        title="Skills"
        :items="skills"
        :skills="skills"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Resume — Jesús Talavera',
  meta: [
    {
      name: 'description',
      content: 'Resume and professional experience of Jesús Talavera, Software Engineer.',
    },
  ],
})

const { data: resume } = await useAsyncData('resume', () =>
  $fetch('/api/resume')
)

const experience = computed(() => (resume.value as any)?.experience || [])
const education = computed(() => (resume.value as any)?.education || [])
const skills = computed(() => (resume.value as any)?.skills || [])
</script>

<style scoped>
.resume-page {
  padding-bottom: var(--space-16);
}

.resume-header {
  padding-top: var(--space-12);
  padding-bottom: var(--space-8);
}
</style>
