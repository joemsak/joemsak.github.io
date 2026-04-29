# joesak.com

Personal site. Static build with Vite, Tailwind CSS v4, and a sliver of TypeScript. Deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — type-check and build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — lint TypeScript with ESLint
- `npm run format` — format with Prettier
- `npm run format:check` — check formatting without writing
- `npm test` — run tests with Vitest

## Deploy

`main` deploys via `.github/workflows/static.yml`.
