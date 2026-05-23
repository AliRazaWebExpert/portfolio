# Developer Portfolio

A modern, production-ready developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The content is centralized in a single config file so you can quickly personalize the site for your own profile.

## Tech Stack

- React + Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- React Icons
- GitHub Pages deployment via `gh-pages`

## Project Structure

```text
.
|-- index.html
|-- package-lock.json
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- public
|   |-- brand-mark.svg
|   |-- social-preview.svg
|-- src
|   |-- App.jsx
|   |-- main.jsx
|   |-- components
|   |   |-- AboutSection.jsx
|   |   |-- BackgroundEffects.jsx
|   |   |-- ContactSection.jsx
|   |   |-- Container.jsx
|   |   |-- ExperienceSection.jsx
|   |   |-- Footer.jsx
|   |   |-- HeroSection.jsx
|   |   |-- LoadingScreen.jsx
|   |   |-- Navbar.jsx
|   |   |-- ProjectsSection.jsx
|   |   |-- ScrollToTop.jsx
|   |   |-- Section.jsx
|   |   |-- SkillsSection.jsx
|   |-- data
|   |   |-- portfolio.js
|   |-- hooks
|   |   |-- useActiveSection.js
|   |   |-- useTheme.js
|   |-- styles
|   |   |-- index.css
```

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Create a production build:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Customization

Update `src/data/portfolio.js` to personalize:

- Name, title, tagline, and hero CTAs
- About section copy and strengths
- Skills and proficiency levels
- Featured projects and links
- Experience timeline entries
- Contact information and social links

## GitHub Pages Deployment

1. Update the Open Graph URL in `index.html` to your final GitHub Pages URL.
2. Keep `base: './'` in `vite.config.js` for portable static asset paths.
3. Install dependencies and build:

   ```bash
   npm install
   npm run build
   ```

4. Deploy to GitHub Pages:

   ```bash
   npm run deploy
   ```

5. In GitHub repository settings, ensure Pages serves from the branch published by `gh-pages`.

## Notes

- The contact form is intentionally UI-only and ready to be connected to a service such as Formspree or Netlify Forms.
- The site is mobile-first, responsive, keyboard-friendly, and includes a light/dark theme toggle.
- The build is static and suitable for GitHub Pages hosting.
