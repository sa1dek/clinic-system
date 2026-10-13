# OrthoCare Showcase

A static, multi-page project showcase for the **Orthopedic Clinic Management System** desktop application.

## Tech
- HTML5
- CSS3 (Liquid Glass-inspired panels, responsive layout, subtle motion)
- Vanilla JavaScript
- No frontend framework required

## Pages
- `index.html` — overview
- `pages/features.html` — application features
- `pages/architecture.html` — architecture and AI request flow
- `pages/ai-assistant.html` — AI medical assistant
- `pages/database.html` — database and security
- `pages/technical-guide.html` — dependencies, setup, developer guide
- `pages/gallery.html` — screenshot placeholders

## Run locally
Open `index.html` in a browser. For a local server, run one of:
- `python -m http.server 8000` from this directory, then open `http://localhost:8000`
- Use VS Code Live Server.

## Add screenshots
Place anonymized screenshots in `assets/images/screenshots/`. The gallery page includes named placeholders and instructions for replacing them with `<img>` elements. Do not publish real patient data.

## Notes
- This is a documentation/showcase website, not the Python desktop app itself.
- Technical details are based on the supplied project README and should be checked against source code before claiming implementation has been audited.
- Replace the illustrative dashboard values on the homepage with screenshots or clearly labeled real data if you adapt the preview.
