# Mosuzo Studio

Bilingual official website for Mosuzo Studio: Simplified Chinese at the root and English at `/en/`.

Mosuzo Studio builds Windows tools for screen capture, recording, image work, window inspection and demos:

- [Shotera](https://github.com/mosuzo-studio/Shotera/releases) — screenshot, scrolling capture and screen recording. The official site is being restored; downloads are on GitHub Releases.
- [SnipArc](https://sniparc.mosuzo.com/) — screenshot and annotation for everyday communication.
- [WindowSift](https://windowsift.mosuzo.com/) — trace a window to its process and inspect window properties.
- [ImagePerch](https://imageperch.mosuzo.com/) — browse, trim and edit long images.
- [KeySplera](https://keysplera.mosuzo.com/) — show keys and clicks on screen during recordings and demos.

All products: https://mosuzo.com/products/ · GitHub: https://github.com/mosuzo-studio

Product data and bilingual copy live in `src/data.ts` and `src/Site.astro`.

## Development

Node.js 22.12+. Run `npm ci`, `npm run check` and `npm run build`. Use `npm run dev` for local development.

The production repository is `mosuzo-studio/mosuzo-studio.github.io`. Pushing `master` triggers the GitHub Pages workflow, and the production site serves pages and assets from the root of `mosuzo.com`.

Product visuals reuse existing assets from each product site: Shotera uses its existing demo images and SnipArc uses a real screenshot of the Chinese UI. QQ, WeChat and Xiaohongshu links are added only after a public account is verified. Purchase, activation and support entries follow the actual availability.

## Domain maintenance

Manage `mosuzo.com` and HTTPS in Settings → Pages of the production repository. The current DNS target is `mosuzo-studio.github.io`. After verifying the domain or changing DNS, run Deploy studio site manually from Actions.
