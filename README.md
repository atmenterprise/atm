# Apps That Matter

Apps That Matter builds AI and data solutions, custom applications, and business websites. This repository contains the company’s responsive website, built with React, TypeScript, Vite, and Tailwind CSS.

## What’s included

- AI, data engineering, and digital experience services.
- The Products page lists **OpenMarkdown by Apps That Matter** and **ATM Content Studio**.
- Selected projects: **ATM Content Studio**, **OpenMarkdown by Apps That Matter**, and custom websites for **JazBooM & Melabagan Banquets**.
- A Calendly booking pop-up for 30-minute calls, alongside email enquiries.
- GitHub, LinkedIn, Facebook, and X social links.
- Disclaimer and privacy dialogs.
- Reusable ATM logo assets, favicons, and an Apple touch icon.

## Local development

Use **Node.js 24** and npm, matching the deployment workflow.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/).

The website is a static frontend. No API keys, environment file, or backend server are required. An internet connection is needed for Google Fonts and the Calendly scheduler.

## Checks and production build

```sh
# Check TypeScript
npm run lint

# Generate the production website in dist/
npm run build

# Preview the production build locally
npm run preview
```

Use the URL printed by Vite. The configured base path is `/` for the GitHub Pages custom domain.

## Project structure

```text
src/
  App.tsx                      Page content, navigation, and interactions
  index.css                    Site styles and responsive layouts
  components/
    Logo.tsx                   Shared logo asset rendering
    BookingDialog.tsx          Calendly scheduling dialog and booking URL
    LegalDialog.tsx            Disclaimer and privacy content
public/
  atm-logo*                    Reusable logo variants
  favicon*                     Browser icons
  apple-touch-icon.png         Apple home-screen icon
index.html                     Page metadata and favicon links
vite.config.ts                 Build configuration and deployment base path
.github/workflows/deploy.yml   GitHub Pages deployment
```

Vite copies files from `public/` into the build output. Reference public assets using `import.meta.env.BASE_URL` in application code and `%BASE_URL%` in `index.html`, so URLs work under the deployed base path.

## Updating the website

- **Content and projects:** edit `src/App.tsx`. Project interface graphics are labeled illustrative concepts.
- **Design:** edit `src/index.css`.
- **Brand assets:** update the relevant files in `public/`. The inline, square, and icon variants are selected by `src/components/Logo.tsx`.
- **Scheduling:** update `bookingUrl` in `src/components/BookingDialog.tsx`. The current booking page is [Apps That Matter on Calendly](https://calendly.com/atmenterprise23/30min). The scheduler loads when a visitor opens the booking dialog; a direct link is available as a fallback.
- **Contact and social links:** edit `src/App.tsx`.
- **Privacy and disclaimer:** edit `src/components/LegalDialog.tsx` and keep the notice consistent with any changes to data collection or integrations.
- **Page title, description, and favicons:** edit `index.html`.

## Deployment

The [GitHub Actions workflow](.github/workflows/deploy.yml) runs when changes are pushed to `main`. It installs dependencies with `npm ci`, builds the site, and publishes `dist/` to the `gh-pages` branch.

Configure GitHub Pages to serve from the root of the `gh-pages` branch. The workflow requires permission to write repository contents.

For a different repository path or hosting at a domain root, update `base` in `vite.config.ts` before building. Keep the deployed site’s privacy information aligned with the hosting provider in use.

## License

See [LICENSE](LICENSE).
