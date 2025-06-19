# MyPortfolio React Version

This is a professional, scalable React + TypeScript portfolio project bootstrapped with Vite and styled using Tailwind CSS.

## Features

- Modular, reusable components (Header, Footer, HeroSection, Projects, Blogs, Skills, etc.)
- All styles implemented with Tailwind utility classes
- Organized assets: `/assets/images`, `/assets/icons`, `/assets/fonts`
- Easy to add new skills and projects via reusable components

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure

- `src/components/` — Reusable React components
- `src/sections/` — Page sections (Hero, Projects, etc.)
- `src/assets/images/` — Project images
- `src/assets/icons/` — Icons
- `src/assets/fonts/` — Fonts

## Customization

- Add new skills or projects by updating the relevant data files/components in `src/components/` or `src/sections/`.

---

Replace placeholder assets and content with your own for a personalized portfolio.

plugins: {
// Add the react-x and react-dom plugins
'react-x': reactX,
'react-dom': reactDom,
},
rules: {
// other rules...
// Enable its recommended typescript rules
...reactX.configs['recommended-typescript'].rules,
...reactDom.configs.recommended.rules,
},
})

```

```
