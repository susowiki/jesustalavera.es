<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-inner">
      <div class="hero-content animate-fade-in-up">
        <p class="hero-greeting">Hello, I'm</p>
        <h1 class="hero-name">{{ name }}</h1>
        <p class="hero-tagline">Software Engineer</p>
        <p v-if="bio" class="hero-bio">{{ bio }}</p>

        <div class="hero-actions delay-3 animate-fade-in-up">
          <NuxtLink to="/resume" class="btn btn-primary">View Resume</NuxtLink>
          <div class="hero-socials">
            <a
              v-if="twitter"
              :href="twitter"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
            </a>
            <a
              v-if="linkedin"
              :href="linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="hero-image-wrapper animate-fade-in delay-2" v-if="imageUrl">
        <div class="hero-image-glow"></div>
        <img :src="imageUrl" :alt="name" class="hero-image" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  name: string
  bio?: string
  imageUrl?: string
  twitter?: string
  linkedin?: string
}

defineProps<Props>()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-hero);
  z-index: 0;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  padding: var(--space-16) 0;
}

.hero-greeting {
  font-size: var(--text-lg);
  color: var(--color-accent-light);
  font-weight: 500;
  margin-bottom: var(--space-2);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-name {
  font-size: var(--text-6xl);
  font-weight: 800;
  margin-bottom: var(--space-4);
  background: var(--gradient-accent);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 6s ease infinite;
}

.hero-tagline {
  font-size: var(--text-2xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
  font-weight: 400;
}

.hero-bio {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  max-width: 500px;
  line-height: 1.8;
  margin-bottom: var(--space-8);
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

/* CTA Button */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-8);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--text-sm);
  letter-spacing: 0.02em;
  transition: transform var(--transition-fast), box-shadow var(--transition-base);
  cursor: pointer;
  border: none;
  text-decoration: none;
}

.btn-primary {
  background: var(--gradient-accent);
  color: #fff;
  box-shadow: 0 4px 20px var(--color-accent-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px var(--color-accent-glow);
  color: #fff;
}

.hero-socials {
  display: flex;
  gap: var(--space-3);
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
}

.social-icon:hover {
  color: var(--color-accent-light);
  border-color: var(--color-accent);
  background: var(--color-accent-glow);
  transform: translateY(-2px);
}

/* Profile image */
.hero-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.hero-image-glow {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: var(--radius-full);
  background: var(--gradient-accent);
  opacity: 0.15;
  filter: blur(60px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero-image {
  width: 300px;
  height: 300px;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 3px solid var(--color-border);
  position: relative;
  z-index: 1;
  transition: transform var(--transition-slow), box-shadow var(--transition-slow);
}

.hero-image:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-glow);
}

@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
    padding: var(--space-8) 0;
  }

  .hero-content {
    order: 2;
  }

  .hero-image-wrapper {
    order: 1;
  }

  .hero-bio {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-image {
    width: 200px;
    height: 200px;
  }

  .hero-image-glow {
    width: 220px;
    height: 220px;
  }
}
</style>
