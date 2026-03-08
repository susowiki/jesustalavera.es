# Jesús Talavera — Personal Website

Personal webpage and portfolio of Jesús Talavera, a Software Engineer. This site features my professional experience, projects, and contact information.

## 🚀 How It Works

This project is a modern web application leveraging Server-Side Generation (SSG) for high performance and SEO:

- **Framework**: [Nuxt](https://nuxt.com/) (Vue 3, TypeScript).
- **CMS**: Dynamic content is managed and fetched via **Contentful** (Headless CMS).
- **Styling & Design**: Modern custom CSS paired with Google Fonts (Inter, Outfit) via the `@nuxtjs/google-fonts` module.
- **Rendering**: The site uses Nitro's prerendering built into Nuxt for static site generation on the main routes (`/` and `/resume`).
- **Deployment**: Configured to be easily deployable on Netlify.

## 💻 How to Run It Locally

### Prerequisites

You will need the following installed:
- [Node.js](https://nodejs.org/) (version >= 20.0.0)
- `npm` (or your preferred package manager like `pnpm`, `yarn`, or `bun`)
- A [Contentful](https://www.contentful.com/) space with proper data models, and its access token.

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd jesustalavera.es
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the example environment file to `.env`:
   ```bash
   cp .env.example .env
   ```
   Then, open the `.env` file and fill in your specific Contentful Space ID and Access Token:
   ```env
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_access_token
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   The development site will be accessible on `http://localhost:3000`.

### Building for Production

To build the static application locally, run:

```bash
npm run build
```

To preview the generated production build:

```bash
npm run preview
```
Check out the [Contentful Data Models](contentful-models.md) documentation to learn more about `AuthorV2`, `Resume`, and `ResumeCard` content types.
