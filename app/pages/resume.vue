<template>
  <div class="resume-page">
    <div class="container">
      <div class="resume-header section animate-fade-in-up">
        <div class="resume-title-wrap">
          <div>
            <h1 class="section-title">Resume</h1>
            <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
          </div>
          
          <div class="resume-actions">
            <a
              v-if="resumeUrl"
              :href="resumeUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary download-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="download-icon">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </a>
            <p v-if="formattedUpdatedAt" class="resume-updated">
              Last updated: {{ formattedUpdatedAt }}
            </p>
          </div>
        </div>
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

const subtitle = computed(() => (resume.value as any)?.title || 'My professional background and skills.')
const experience = computed(() => (resume.value as any)?.experience || [])
const education = computed(() => (resume.value as any)?.education || [])
const skills = computed(() => (resume.value as any)?.skills || [])
const resumeUrl = computed(() => (resume.value as any)?.resumeUrl || '')

const formattedUpdatedAt = computed(() => {
  const timestamp = (resume.value as any)?.updatedAt
  if (!timestamp) return ''
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  }).format(new Date(timestamp))
})
</script>

<style scoped>
.resume-page {
  padding-bottom: var(--space-16);
}

.resume-header {
  padding-top: var(--space-12);
  padding-bottom: var(--space-8);
}

.resume-title-wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--space-6);
}

.resume-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-3);
}

.resume-updated {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  font-style: italic;
  opacity: 0.8;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.download-icon {
  flex-shrink: 0;
}
</style>
