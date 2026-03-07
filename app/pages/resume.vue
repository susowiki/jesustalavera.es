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

// Placeholder resume data
// To make this dynamic, create a "Resume" content type in Contentful
// and fetch it the same way the Author data is fetched.
const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2022 – Present',
    description: 'Leading frontend architecture and building scalable web applications with modern frameworks.',
  },
  {
    role: 'Software Engineer',
    company: 'Another Company',
    period: '2019 – 2022',
    description: 'Developed and maintained full-stack applications, improved CI/CD pipelines, and mentored junior developers.',
  },
  {
    role: 'Junior Developer',
    company: 'First Company',
    period: '2017 – 2019',
    description: 'Started career building web applications and learning best practices in software development.',
  },
]

const education = [
  {
    role: 'Computer Science Degree',
    company: 'University',
    period: '2013 – 2017',
    description: 'Studied computer science with a focus on software engineering and web technologies.',
  },
]

const skills = [
  'JavaScript',
  'TypeScript',
  'Vue.js',
  'Nuxt',
  'React',
  'Node.js',
  'CSS',
  'HTML',
  'Git',
  'REST APIs',
  'GraphQL',
  'Docker',
  'CI/CD',
  'Agile',
]
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
