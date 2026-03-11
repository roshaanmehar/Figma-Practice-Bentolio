# Bentolio – Julia Huang Portfolio

Next.js implementation of the [Bentolio portfolio design](https://www.figma.com/design/RKToLiFiIThNoEy7Za0pVZ/) from Figma.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design tokens (from Figma)

- **Background:** `#f9f1f0`
- **Primary (cards):** `#fadcd9`
- **Secondary (contact card):** `#f8afa6`
- **Text:** `#000000`
- **Rounded:** `20px`

## Assets

Images are currently loaded from Figma’s CDN (see `src/lib/constants.ts`). **These URLs expire after about 7 days.** For production:

1. Download the assets from the Figma file or from the running app.
2. Save them under `public/` (e.g. `public/portrait.jpg`, `public/musea.jpg`).
3. Update `src/lib/constants.ts` to use local paths (e.g. `/portrait.jpg`).

## Project structure

- `src/app/page.tsx` – Main portfolio page and grid layout
- `src/components/` – Header, SloganIntro, Portrait, About, Work, Contact, Socials
- `src/lib/constants.ts` – Asset URLs and shared config
