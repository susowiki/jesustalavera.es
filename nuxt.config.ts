// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      Outfit: [400, 500, 600, 700, 800],
    },
    display: 'swap',
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    // Only available on the server / at build time
    contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID || '',
    contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Jesús Talavera — Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Personal webpage of Jesús Talavera — Software Engineer. Resume, projects, and more.',
        },
        { name: 'author', content: 'Jesús Talavera' },
        { property: 'og:title', content: 'Jesús Talavera — Software Engineer' },
        {
          property: 'og:description',
          content:
            'Personal webpage of Jesús Talavera — Software Engineer.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://jesustalaveraes.netlify.app' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/resume'],
    },
  },
})
