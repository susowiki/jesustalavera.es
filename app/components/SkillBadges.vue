<template>
  <div class="skill-badges">
    <h3 class="badges-title">{{ title }}</h3>
    <div class="badges-grid">
      <span
        v-for="(skill, index) in skills"
        :key="skill"
        class="badge animate-fade-in"
        :class="'delay-' + ((index % 5) + 1)"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  skills: string[]
}

defineProps<Props>()
</script>

<style scoped>
.skill-badges {
  margin-bottom: var(--space-12);
}

.badges-title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-6);
  color: var(--color-accent-light);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.badges-title::before {
  content: '';
  display: block;
  width: 4px;
  height: 24px;
  background: var(--gradient-accent);
  border-radius: 2px;
}

.badges-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-5);
  background: var(--color-bg-glass);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
  cursor: default;
}

.badge:hover {
  color: var(--color-accent-light);
  border-color: var(--color-accent);
  background: rgba(99, 102, 241, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--color-accent-glow);
}
</style>
