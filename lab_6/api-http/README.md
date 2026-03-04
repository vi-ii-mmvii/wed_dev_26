# Album Browser

Angular application for Lab 6 — Routing & HTTP. Fetches albums and photos from the JSONPlaceholder API.

## How to run

```bash
npm install
ng serve
```

Open `http://localhost:4200/` in your browser.

## Features

- 6 routes: Home, About, Albums list, Album detail, Album photos, root redirect
- AlbumService with HttpClient for all API communication
- CRUD operations: Read (list & detail), Update (edit title), Delete (remove from list)
- Loading indicators and empty state handling
- Responsive photo grid layout
- Active route highlighting in navigation
