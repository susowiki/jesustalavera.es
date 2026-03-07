<template>
  <header class="app-header" :class="{ scrolled: isScrolled }">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo" aria-label="Home">
        <span class="logo-accent">JT</span>
      </NuxtLink>

      <nav class="nav-desktop" aria-label="Main navigation">
        <NuxtLink to="/" class="nav-link" exact-active-class="active">Home</NuxtLink>
        <NuxtLink to="/resume" class="nav-link" active-class="active">Resume</NuxtLink>
      </nav>

      <button
        class="nav-toggle"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="hamburger" :class="{ open: mobileOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-menu">
      <nav v-if="mobileOpen" class="nav-mobile" aria-label="Mobile navigation">
        <NuxtLink to="/" class="nav-link" exact-active-class="active" @click="mobileOpen = false">Home</NuxtLink>
        <NuxtLink to="/resume" class="nav-link" active-class="active" @click="mobileOpen = false">Resume</NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileOpen.value = false
})
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--header-height);
  background: transparent;
  transition: background var(--transition-base), box-shadow var(--transition-base), backdrop-filter var(--transition-base);
}

.app-header.scrolled {
  background: rgba(10, 14, 26, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--color-border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 800;
  text-decoration: none;
  color: var(--color-text-primary);
  transition: transform var(--transition-fast);
}

.logo:hover {
  transform: scale(1.05);
  color: var(--color-text-primary);
}

.logo-accent {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Desktop nav */
.nav-desktop {
  display: flex;
  gap: var(--space-8);
}

.nav-link {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-2) 0;
  position: relative;
  transition: color var(--transition-fast);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-accent);
  border-radius: 1px;
  transition: width var(--transition-base);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text-primary);
}

.nav-link.active::after,
.nav-link:hover::after {
  width: 100%;
}

/* Mobile toggle */
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: transform var(--transition-base), opacity var(--transition-fast);
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile nav */
.nav-mobile {
  display: none;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-6);
  background: rgba(10, 14, 26, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid var(--color-border);
}

.nav-mobile .nav-link {
  font-size: var(--text-lg);
}

/* Slide menu transition */
.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.slide-menu-enter-from,
.slide-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .nav-toggle {
    display: block;
  }

  .nav-mobile {
    display: flex;
  }
}
</style>
