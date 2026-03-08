<template>
  <div class="timeline">
    <h3 class="timeline-title">{{ title }}</h3>
    <div class="timeline-items">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="timeline-item animate-fade-in-up"
        :class="'delay-' + ((index % 5) + 1)"
      >
        <div class="timeline-marker">
          <span class="timeline-dot"></span>
          <span v-if="index < items.length - 1" class="timeline-line"></span>
        </div>
        <div class="timeline-card glass-card">
          <a v-if="item.logo && item.logoUrl" :href="item.logoUrl" target="_blank" rel="noopener noreferrer" class="timeline-logo-link">
            <img :src="item.logo" :alt="item.company || item.role" class="timeline-logo" />
          </a>
          <img v-else-if="item.logo" :src="item.logo" :alt="item.company || item.role" class="timeline-logo" />
          <div class="timeline-card-content">
            <div class="timeline-header">
              <h4 class="timeline-role">{{ item.role }}</h4>
              <span class="timeline-period">{{ item.period }}</span>
            </div>
            <p class="timeline-company">{{ item.company }}</p>
            <div v-if="item.description" class="timeline-desc" v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TimelineItem {
  role: string
  company: string
  period: string
  description?: string
  logo?: string
  logoUrl?: string
}

interface Props {
  title: string
  items: TimelineItem[]
}

defineProps<Props>()
</script>

<style scoped>
.timeline {
  margin-bottom: var(--space-12);
}

.timeline-title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-8);
  color: var(--color-accent-light);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.timeline-title::before {
  content: '';
  display: block;
  width: 4px;
  height: 24px;
  background: var(--gradient-accent);
  border-radius: 2px;
}

.timeline-items {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  display: flex;
  gap: var(--space-6);
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: var(--space-6);
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-full);
  background: var(--color-accent);
  box-shadow: 0 0 12px var(--color-accent-glow);
  flex-shrink: 0;
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(180deg, var(--color-accent) 0%, transparent 100%);
  margin-top: var(--space-2);
}

.timeline-card {
  padding: var(--space-6);
  margin-bottom: var(--space-4);
  flex: 1;
  display: flex;
  gap: var(--space-6);
  align-items: flex-start;
}

.timeline-logo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 4px solid var(--color-bg-secondary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-logo-link {
  flex-shrink: 0;
  display: block;
}

.timeline-logo-link:hover .timeline-logo {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.timeline-card-content {
  flex: 1;
  min-width: 0;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-2);
}

.timeline-role {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text-primary);
}

.timeline-period {
  font-size: var(--text-xs);
  color: var(--color-accent-light);
  background: rgba(99, 102, 241, 0.1);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  white-space: nowrap;
  font-weight: 500;
}

.timeline-company {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-3);
  font-weight: 500;
}

.timeline-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

:deep(.timeline-desc p) {
  margin-bottom: var(--space-2);
}

:deep(.timeline-desc p:last-child) {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .timeline-header {
    flex-direction: column;
    gap: var(--space-1);
  }

  .timeline-marker {
    display: none;
  }

  .timeline-card {
    margin-left: 0;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-4);
  }

  .timeline-logo {
    width: 100px;
    height: 100px;
  }

  .timeline-header {
    align-items: center;
  }
}
</style>
