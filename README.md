# Sanchit Mishra — Developer Portfolio

A responsive, single-page developer portfolio built with React, Vite, and
Tailwind CSS. The page currently includes a Navbar, Hero, About, Skills,
Projects, Experience/Education, Contact, and Footer.

## Getting started

```sh
npm install
cp .env.example .env
npm run dev
```

On Windows PowerShell, copy the example with:

```powershell
Copy-Item .env.example .env
```

Set `VITE_FORMSPREE_ENDPOINT` in `.env` to the Formspree form endpoint before
using the contact form. The local `.env` file is ignored by Git. Configure the
same variable in the deployment provider's build environment for production.

## Available scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build in `dist`.
- `npm run preview` serves the production build locally.
- `npm run lint` checks the source with Oxlint.

## Project structure

- `src/components/` contains the Navbar, page sections, Footer, and shared
  Container component.
- `src/App.jsx` composes the page sections.
- `src/index.css` defines the Tailwind import, design tokens, and global styles.
- `vite.config.js` configures the React and Tailwind Vite plugins.

Project entries and education details contain editable temporary content; review
them before presenting the portfolio as finalized.
