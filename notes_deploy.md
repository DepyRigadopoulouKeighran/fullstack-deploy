# Serving a React Application with Express

- This document outlines the process of configuring an Express server to serve a React application, handle API routes and support client-side routing by providing a fallback to the React apps `index.html` for unmatched routes.

## Serve Static Files

To serve your built React application

1. **Prepare Your React Build**:

   - Ensure your React application is built using `npm run build`. This generates a `build` or `dist` directory with your static files (HTML, CSS, JavaScript).

2. **Configure Express to Serve Static Files**:
   - Use `express.static` middleware to serve the static files generated by our React build process.

```js
    import path from `path`;
    import {fileURLToPath} from `url`;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    app.use(express.static(path.join(__dirname, `dist`)))

```