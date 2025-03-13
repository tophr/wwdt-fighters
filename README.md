# Bootstrap + Vite + Handlebars

## Setup based on Bootstrap 5.3 Official Vite Integration
[https://getbootstrap.com/docs/5.3/getting-started/vite/](https://getbootstrap.com/docs/5.3/getting-started/vite/)


### Installation

```
git clone https://github.com/PivotDev/pivot-bootstrap-vite.git your-app-name
cd your-app-name
```

### Initial Setup and Dev
```
npm install
npm run dev
```

### Build for Staging
```
npm run build:dev
```

### Build and Preview Production Build Locally
```
npm run build
npm run preview
```

## Features:

- Bootstrap 5.3.0
- Vite 4.3.9
- Vite Plugin Handlebars 1.6.0
- Handlebars Helpers 0.10.11

## Handlebars Helpers:
This starter includes [https://github.com/jonathas/handlebars-helpers](https://github.com/jonathas/handlebars-helpers), a collection of more than 130 Handlebars helpers in ~20 categories.

## Enable dark mode (Bootstrap 5.3 Docs)
Enable the built in dark color mode across your entire project by adding the `data-bs-theme="dark"` attribute to the `<html>` element. This will apply the dark color mode to all components and elements, other than those with a specific `data-bs-theme` attribute applied. [https://getbootstrap.com/docs/5.3/customize/color-modes/#enable-dark-mode](https://getbootstrap.com/docs/5.3/customize/color-modes/#enable-dark-mode)

## Deploying a Static Site

### Building the App:
[https://vitejs.dev/guide/static-deploy.html#building-the-app](https://vitejs.dev/guide/static-deploy.html#building-the-app)

### Netlify:
[https://vitejs.dev/guide/static-deploy.html#netlify](https://vitejs.dev/guide/static-deploy.html#netlify)