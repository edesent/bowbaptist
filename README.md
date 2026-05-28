# Bow Baptist Church — Website

The website for **Bow Baptist Church**, Weathersfield Bow, Vermont.
Built and maintained by Pastor Eli (www.elijahdesent.com).

> **If you are an AI assistant (Claude, ChatGPT, etc.) editing this site for the
> pastor: read this whole file first.** It tells you where everything lives and
> the rules to follow. The pastor is not a programmer — explain changes in plain
> English, never paste raw code at him, and make the smallest edit that does the job.

---

## ⚠️ Two important rules

1. **This is Next.js 16 (App Router) + Tailwind CSS v4.** It is newer than most
   training data. Before writing code, check `node_modules/next/dist/docs/` and the
   existing files — match the patterns already here. See `AGENTS.md`.
2. **Every change pushed to the `main` branch goes LIVE within about 30 seconds**
   (Vercel auto-deploys). There is no separate "draft" site. Double-check wording
   and times before saving.

---

## What this site is

A single-scroll home page plus a few interior pages, all in the "Green Mountain"
Vermont theme (pine green + oak wood + barn-red accents + cream, with hand-drawn
mountain artwork — no stock photos).

**Pages**

| Page | File |
| --- | --- |
| Home (everything scrolls on one page) | `src/app/page.tsx` |
| Our History | `src/app/history/page.tsx` |
| Our Pastor | `src/app/pastor/page.tsx` |
| What We Believe | `src/app/beliefs/page.tsx` |
| How to Be Saved | `src/app/how-to-be-saved/page.tsx` |

The home page is assembled from sections in `src/components/`:
`MountainHero` → `Welcome` → `ServiceTimes` → `Visit` (What to Expect) →
`About` (the three cards) → `ScriptureBanner` → `Contact` → `Footer`.

---

## How to make common edits

**Service times** — edit the `services` list near the top of
`src/components/ServiceTimes.tsx`. The same times also appear in
`src/components/Footer.tsx` (the `serviceTimes` list) and in `src/app/page.tsx`
(the `churchSchema` block, which helps Google show the right info). Update all
three to keep them in sync.

**Address or phone number** — they appear in `Contact.tsx`, `Footer.tsx`,
`ServiceTimes.tsx`, and the `churchSchema` in `page.tsx`. Search the project for
`546-4902` or `1102 Route 5` to find every spot.

**The pastor's photo and bio** — in `src/app/pastor/page.tsx`. Right now there is
a placeholder drawing where the photo goes and gently-written placeholder text
(look for the `PLACEHOLDER BIO` comment). To add a real photo: put the image file
in the `public/` folder (e.g. `public/pastor.jpg`) and replace the placeholder
`<svg>` block with `<img src="/pastor.jpg" alt="Pastor Wesley Allen" className="w-full block" />`.

**Wording anywhere** — find the page or section file above and change the text
between the tags. Don't touch the `className="..."` parts (those are styling).

**The Facebook link** — in `src/components/Footer.tsx`, the `FACEBOOK_URL` value
at the top is a placeholder pointing to a Facebook search. Replace it with the
church's real Facebook page address.

**The giving link** — `GIVE_URL` in `src/components/Footer.tsx` (and the "Give"
link in `src/components/Navbar.tsx`) points to the church's Anedot giving page.

**Photos in general** — drop image files into the `public/` folder and reference
them as `/your-file-name.jpg`.

**Colors** — the whole palette lives in `src/app/globals.css` under
`@theme inline`. Changing a value there (e.g. `--color-barn`) updates that color
everywhere on the site.

---

## The mountain artwork

The hills, the little white meetinghouse, and the "mountain-line" dividers between
sections are all drawn in code (SVG), not photographs — so they stay crisp at any
size and load instantly.

- The big hero scene: `src/components/MountainHero.tsx`
- The ridge dividers and the small "peaks" accent under headings: `src/components/Ridge.tsx`
- The interior-page banners: `src/components/PageHero.tsx`

---

## Running it on your own computer (optional)

```bash
npm install      # first time only
npm run dev      # start a local preview at http://localhost:3000
npm run build    # check that everything compiles before going live
```

## Deploying

Pushing to the `main` branch on GitHub triggers an automatic deploy to Vercel.
That's it — no extra steps.
