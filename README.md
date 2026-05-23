# Ali Raza Portfolio

Personal portfolio website for Ali Raza, focused on web development, ecommerce, Shopify, WordPress, WooCommerce, Squarespace, SEO, and business website work.

## Built With

- React
- Vite
- Tailwind CSS
- Framer Motion
- Web3Forms
- GitHub Pages

## Local Setup

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

## Contact Form

The contact form uses Web3Forms, so submissions are sent securely without displaying a public email address or phone number on the site.

## Deployment

The site is configured for GitHub Pages and includes a GitHub Actions workflow for automatic deployment from the `main` or `master` branch.

In GitHub Pages settings, set the source to `GitHub Actions`. Do not serve directly from the repository root, because Vite must publish the built `dist` output.
