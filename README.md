# Google APM Interview Prep

A personal, offline-friendly prep site for the Google Associate Product Manager (APM) round-one interview: a day-by-day plan, answer framework, skill modules, question bank, timed practice, mock-interview kit, teardown log and more.

It's plain HTML, CSS and JavaScript. There's no backend, no build step and no external libraries.

## Open it locally

1. Download or clone this folder.
2. Double-click `index.html` (or drag it into Chrome, Firefox, Edge or Safari).

That's it. It works offline. Your progress (checkboxes, notes, scores, mocks, teardowns, story drafts, links) is saved in your browser's `localStorage`.

> **Back up your progress.** `localStorage` belongs to one browser on one device. Use **Settings & backup → Export progress (JSON)** regularly, and **Import** to restore on another browser or device. Clearing browser data deletes your progress.

If you'd rather serve it (optional):

```bash
cd apm-prep
python3 -m http.server 8000
```

Then open http://localhost:8000. Progress saved under `file://` and under `http://localhost` is stored separately; use Export/Import to move it between them.

## Edit the content

All text lives in **`data/content.js`**: the plan, questions, hints, sample outlines, skill modules, products, resources and checklists. Edit it in any text editor and reload the page. You never need to touch `js/app.js` or `css/style.css` to change content.

- **Add a question:** copy an entry in `questions`, give it a new unique `id` (e.g. `q45`), and set `cat` to one of the `categories` ids. `outline` is optional.
- **Change the plan:** edit the `plan` array. Each task's checkbox is keyed by date + position, so if you reorder tasks within a day, their ticks follow the position, not the text.
- **Change the interview date:** do this in the app under **Settings & backup**. `meta.defaultInterviewDate` is only the initial default.

## Deploy free on GitHub Pages

1. Create a new repository on GitHub (it can be private if your plan supports Pages for private repos; otherwise public).
2. Put the contents of this folder at the root of the repo (`index.html` at the top level) and push:

   ```bash
   git init
   git add .
   git commit -m "APM prep site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
4. After a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.

Progress on the hosted site is stored in that browser separately from your local copy; use Export/Import to move it.

> Note: a public repo makes the site's *content* public (not your progress, which never leaves your browser).

## Files

```
apm-prep/
├── index.html        Page shell (header, sidebar, main area)
├── css/style.css     Layout, light/dark theme, mobile and print styles
├── js/app.js         Routing, rendering, storage, timer, export/import
├── data/content.js   All content: edit this
└── README.md
```

## Tips

- **Print the cheat sheet:** open **Answer framework** and press **Print cheat sheet** (or Ctrl/Cmd+P). Only the one-page cheat sheet is printed.
- **Practice mode:** the timer highlights which framework step you should be on. Turn on the soft chime to hear phase changes. When time is up, the self-review checklist opens.
- **Keyboard:** Tab through everything; the "Skip to content" link appears on first Tab; Esc closes the mobile menu.
