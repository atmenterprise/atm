---
name: social-launch
description: Write social media posts (LinkedIn, Facebook, X/Twitter, Instagram, Threads, Bluesky, Mastodon) and render a one-page promotional image for a product, release or announcement. Use when the user asks for a social post, launch announcement, release post, promo graphic, social card, or a "one-pager" image to share a product.
---

# Social launch kit

Produces two things for a product or release:

1. **Posts**: one per requested platform, written to that platform's limits and habits.
2. **A one-pager image**: a single static PNG (headline, screenshot, three or four benefits, call to action) rendered from an HTML template with headless Chrome.

Everything goes in one folder, by default `marketing/<product-slug>/<YYYY-MM-DD>-<topic>/` in the repo:

```
posts.md            all posts, each in a fenced text block ready to paste
one-pager.html      the filled-in template (keep it, so the image can be re-rendered)
one-pager-*.png     rendered images, one per size
```

## 1. Gather facts before writing anything

Every claim in a post or image must come from a source you have read in this session. Never invent features, numbers, prices, users, dates or quotes.

- **Product facts:** read the product's landing page source and README. In this repo: `src/OpenMarkdown.tsx`, `koonj/index.html`, `src/products.ts` (name, status, summary, URL) and `README.md`.
- **Status:** `src/products.ts` marks each product `available` or `soon`. Never write "available now", "try it today" or give an install command for a product marked `soon`; use "coming soon" or "join early access" instead.
- **Links:** use the public URLs (site base is `https://www.appsthatmatter.uk/`). Get repo, app and package URLs from constants in the page source, not from memory.
- **Visuals:** look for real screenshots first (for example `public/openmarkdown/images/editor.png`). Never mock up a product UI that does not exist.

Ask the user only for what you cannot find: the angle (first release, new feature, milestone), the platforms, and who is posting (a person's profile or the company page). If they don't say, default to LinkedIn, Facebook and X, posted by the founder on LinkedIn and by the company elsewhere.

### Naming rule (legal)

The first mention of OpenMarkdown in any post or image must be **"OpenMarkdown by Apps That Matter"**, because another product uses a similar name. Later mentions can say "OpenMarkdown". Never refer to or compare with other products of a similar name. Apply the same pattern to any product the user flags for trademark reasons.

## 2. Write the posts

Read `references/platforms.md` for each platform's limits, format and hashtag habits before writing. The rules that matter most:

- **Hook first.** LinkedIn cuts the post off after about 210 characters ("…see more"), and other feeds cut off sooner. The first one or two lines must say what is new and why the reader should care. Don't open with "I'm excited to announce".
- **One idea per line.** Short paragraphs, scannable lists, and at most one emoji per line to mark list items.
- **Concrete over vague.** Prefer "updates within half a second" to "blazing fast". Never use the words revolutionary, game-changing or seamless.
- **Plain text only.** No platform renders Markdown, so `**bold**` shows up as literal asterisks. Use line breaks and emoji bullets instead.
- **One call to action**, with one link. Say who it's for and what it costs (free, open source, no account) if that's true.
- **Hashtags at the end:** 3 to 6 on LinkedIn, 2 to 5 on Facebook, 1 or 2 on X, 5 to 15 on Instagram.
- **Check the length.** Count characters for any platform with a hard limit (X 280, Bluesky 300, Threads 500, Mastodon 500), for example with `node -e "console.log([...process.argv[1]].length)" "<text>"`. On X a URL always counts as 23 characters.

Write `posts.md` with a heading per platform, each post in a ```` ```text ```` block, and below it a line or two of posting tips (attach the image or the demo video, put the link in the first comment on LinkedIn, the best image size for that platform).

## 3. Make the one-pager image

1. Copy `assets/one-pager.html` from this skill into the output folder as `one-pager.html`.
2. Edit only the parts marked `EDIT` in the template:
   - **Product name**, the "by …" line, and the logo (inline the SVG, or use an `<img>` with an absolute `file://` path).
   - **Badge**: "New release", "Now available", "Coming soon", "v2.0", etc.
   - **Headline**: at most about 8 words. Wrap the payoff phrase in `<span class="hl">…</span>` for the yellow marker highlight.
   - **Subhead**: one sentence, at most about 25 words.
   - **Screenshot**: an absolute `file://` path to a real product image. If there is none, delete the `<figure>` and the layout closes up.
   - **Benefits**: three or four short lines, each up to about 8 words, with the strongest first.
   - **Call to action**: the URL without `https://`, plus a short trust line ("Free · Open source · No account needed").
   - **Theme (optional)**: the CSS variables at the top of the template (`--paper`, `--ink`, `--accent`, `--muted`). The defaults are the Apps That Matter brand.
3. Render it:
   ```bash
   node .claude/skills/social-launch/scripts/render.mjs <folder>/one-pager.html --sizes portrait,square,landscape
   ```
   The presets are `portrait` 1080×1350 (best for LinkedIn, Facebook and Instagram feeds), `square` 1080×1080, `landscape` 1200×675 (X) and `link` 1200×627 (link previews). The template adapts its layout to each shape, so one HTML file serves every size. Output goes next to the HTML as `one-pager-<size>.png`.
4. **Look at every PNG** with the Read tool before showing it to the user. Check that no text is clipped or overflowing, the headline is not orphaning a single word, the screenshot is visible, and the contrast is readable. Shorten the copy and render again until it's clean. Don't report an image you haven't viewed.

## 4. Hand over

Tell the user where the folder is, paste the posts (or the main one) in your reply, and say which image to attach to which platform. Don't post anything to social media yourself, and don't upload images anywhere. The user publishes.
