- `"build": "vite build"`  
    Runs the build process using Vite. Useful for CI/CD pipelines (e.g., GitHub Actions) to prepare the app for deployment on platforms like Vercel or AWS.

- `"dev": "vite"`  
    Starts the development server. Use `npm run dev` for local development and hot-reloading.

- `"preview": "vite preview"`  
    Serves the built project locally, simulating how it will run in production (e.g., after deployment via GitHub Actions).

**Note:**  
Add `"type": "module"` to your `package.json` to ensure your project uses ES modules and runs correctly.