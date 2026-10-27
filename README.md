# padmanabhan.in

Source for [www.padmanabhan.in](https://www.padmanabhan.in), "Joy of Traveling": travel, adventure and tech writing by Padmanabhan. Built with [Astro](https://astro.build) and deployed to Hostinger automatically.

## How deployment works

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and uploads `dist/` to Hostinger over FTP. Only changed files are uploaded. The FTP login opens inside `public_html`, so files go straight there.

If a deploy succeeds but the live site doesn't change, clear Hostinger's cache: hPanel → padmanabhan.in → Performance → CDN → Flush cache. You can also run it by hand from the **Actions** tab ("Run workflow").

### One-time setup

In the GitHub repo, go to **Settings → Secrets and variables → Actions** and add:

| Name | Type | Value |
|---|---|---|
| `FTP_SERVER` | Secret | FTP host from hPanel → Files → FTP Accounts (e.g. `ftp.padmanabhan.in` or the IP shown) |
| `FTP_USERNAME` | Secret | FTP username from the same page |
| `FTP_PASSWORD` | Secret | FTP password (reset it there if you don't have it) |

## Adding a post

1. Create `src/content/posts/<url-slug>.md`. The file name becomes the URL: `my-trip.md` → `/my-trip/`.
2. Put the cover photo in `src/assets/posts/` (JPG, PNG or WebP; Astro resizes and converts it).
3. Start the file with:

   ```markdown
   ---
   title: "Kyoto in autumn"
   category: travel        # travel, adventure or tech
   date: 2026-11-02
   description: "One or two sentences shown on cards and in search results."
   cover: ../../assets/posts/kyoto.jpg
   coverAlt: "Maple leaves over a temple path"
   ---

   Your story in Markdown...
   ```

4. Commit and push. The site updates in a couple of minutes.

Set `draft: true` to keep a post off the site while you work on it.

## Other images

- `src/assets/hero.webp` (or .jpg/.png): home page hero photo. A drawn night sky is shown until it exists.
- `src/assets/portrait.jpg`: optional photo on the About page.

## Working locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

Colours and fonts live in `src/styles/global.css`; site name, email and social links in `src/site.ts`.
