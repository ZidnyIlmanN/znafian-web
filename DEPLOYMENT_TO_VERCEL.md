# Project Deployment to Vercel

This project is a Vue 3 application built with vue-cli-service.

## Deployment Steps to Vercel

1. Ensure you have the Vercel CLI installed:
   ```bash
   npm install -g vercel
   ```

2. Build the project locally (optional, Vercel can build during deployment):
   ```bash
   npm run build
   ```

3. Deploy the project to Vercel:
   ```bash
   vercel
   ```

4. During deployment, Vercel will:
   - Run the build command: `npm run build`
   - Use the `dist` directory as the output directory to serve the static files.

## Notes

- The project previously used Firebase hosting configured to serve from the `public` directory. This is no longer used for Vercel deployment.
- The `server.js` file is not required for Vercel static hosting and can be excluded or removed.
- The `vercel.json` file configures the build and output directory for Vercel.

For more information, visit the [Vercel documentation](https://vercel.com/docs).
