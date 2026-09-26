# Pathfinder deployment

## Local
1. Create `.env` in the project root from `.env.example`.
2. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. Run `npm ci`.
4. Run `npm run dev`.

## GitHub
Upload the **contents of this folder** to the root of the GitHub repository.
The repository root must directly contain `package.json`, `index.html`, `src/`, and `supabase/`.
Do not upload `.env` or `node_modules/`.

## Vercel
Import the GitHub repository. Keep the Root Directory at `./` and use the project defaults from `vercel.json`.
Add the environment variables from `.env` in Vercel Project Settings > Environment Variables, then redeploy.
