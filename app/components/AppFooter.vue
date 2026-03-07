<template>
  <footer class="app-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">JT</span>
        <p class="footer-copy">&copy; {{ currentYear }} Jesús Talavera. All rights reserved.</p>
        <p class="footer-tech">
          Built with <strong>Vue / Nuxt 4</strong>, <strong>Contentful</strong> & <strong>Netlify</strong>
        </p>
      </div>

      <div class="footer-links">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-social"
          :aria-label="link.name"
        >
          <span v-html="link.icon"></span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface Props {
  twitter?: string
  linkedin?: string
  github?: string
}

const props = withDefaults(defineProps<Props>(), {
  twitter: '',
  linkedin: '',
  github: '',
})

const currentYear = new Date().getFullYear()

const socialLinks = computed(() => {
  const links = []
  if (props.twitter) {
    links.push({
      name: 'Twitter',
      url: props.twitter,
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>',
    })
  }
  if (props.linkedin) {
    links.push({
      name: 'LinkedIn',
      url: props.linkedin,
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
    })
  }
  if (props.github) {
    links.push({
      name: 'GitHub',
      url: props.github,
      icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
    })
  }
  return links
})
</script>

<style scoped>
.app-footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-8) 0;
  margin-top: auto;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.footer-logo {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: var(--text-lg);
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.footer-copy {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.footer-tech {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  opacity: 0.8;
  margin-top: var(--space-1);
}

.footer-tech strong {
  color: var(--color-text-secondary);
  font-weight: 500;
}

.footer-links {
  display: flex;
  gap: var(--space-4);
}

.footer-social {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  transition: color var(--transition-fast), border-color var(--transition-fast), background var(--transition-fast);
}

.footer-social:hover {
  color: var(--color-accent-light);
  border-color: var(--color-accent);
  background: var(--color-accent-glow);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }

  .footer-brand {
    flex-direction: column;
    gap: var(--space-2);
  }
}
</style>
