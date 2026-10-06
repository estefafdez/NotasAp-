# NotasAp-

Functional prototype for the DAW course, created by Francisco José Caro,
Estefanía Fernández and Sergio Pulido. Original credits are preserved.

## Run

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. The pages load legacy jQuery and jQuery Mobile over
HTTPS, so an internet connection is required. No build step or account is needed.

## Features and limits

- Add a note with a title and description, list notes and delete them.
- Notes are stored in the browser's localStorage. Clearing browser data removes
  them; identical titles overwrite existing notes. Do not store private data.
- Note contents are rendered as text, not HTML.
- The map page asks for location only on a user click, then offers an external
  OpenStreetMap link. Coordinates are shared with that provider only if you open
  the link. Geolocation requires a secure context (HTTPS or localhost) and permission.
- Missing camera/map script references are removed; there is no camera feature.

This is a historical learning prototype using old dependencies, not a
production-ready application. No license has been added or changed.
See CONTRIBUTING.md and SECURITY.md.
