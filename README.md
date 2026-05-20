# Jonathan Carroll — DevOps Portfolio

A minimalist, dark, terminal-inspired portfolio site built with React + Vite.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
├── components/
│   ├── Navbar/     # Fixed nav with mobile hamburger menu
│   ├── Hero/       # Full-screen landing with typewriter effect
│   ├── About/      # Bio + key highlights
│   ├── Skills/     # Categorized skill tags
│   ├── Projects/   # Project cards with tech stacks
│   ├── Journey/    # Vertical timeline of learning milestones
│   └── Contact/    # Email / GitHub / LinkedIn links
├── hooks/
│   └── useTypewriter.js
├── App.jsx
├── main.jsx
└── index.css       # CSS variables + global reset
```

## Customization

| What to change | Where |
|---|---|
| Name, title, tagline | `src/components/Hero/Hero.jsx` |
| Bio and highlights | `src/components/About/About.jsx` |
| Skill categories and tags | `src/components/Skills/Skills.jsx` |
| Project cards | `src/components/Projects/Projects.jsx` |
| Timeline milestones | `src/components/Journey/Journey.jsx` |
| Contact links | `src/components/Contact/Contact.jsx` |
| Colors and fonts | `src/index.css` (CSS variables) |
| GitHub / LinkedIn URLs | `Hero.jsx` and `Contact.jsx` |

## Stack

- **React 18** + **Vite 5**
- Plain CSS with **CSS Modules** (no external CSS framework)
- Google Fonts: Inter + JetBrains Mono

## Deployment Ready

This site is intentionally structured to be containerized and deployed through a CI/CD pipeline:

```
Docker → GitHub Actions → Kubernetes (Helm) → Nginx ingress
```

A `Dockerfile` and Kubernetes manifests are intended to live alongside this repo as part of the broader infrastructure project.
