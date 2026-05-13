# Deploying BSP Digital Solutions to Vercel

## What Changed from the Lovable/Cloudflare Version

| Before | After |
|--------|-------|
| `@lovable.dev/vite-tanstack-config` | Standard `@tanstack/react-start/config` |
| `@cloudflare/vite-plugin` | Removed |
| `wrangler.jsonc` (Cloudflare Workers) | Removed — replaced with `vercel.json` |
| `.lovable/` folder | Removed |
| `server: { preset: "cloudflare-pages" }` | `server: { preset: "vercel" }` in vite.config.ts |

---

## Option A — Deploy via Vercel Dashboard (Recommended)

### 1. Push code to GitHub

```bash
git init
git add .
git commit -m "initial commit"
# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/bsp-digital-solutions.git
git push -u origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"** and select your repo
3. Vercel will auto-detect settings — but override these:
   - **Framework Preset:** `Other`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.vercel/output` *(leave blank — Vercel reads this from vercel.json)*
   - **Install Command:** `npm install`
4. Click **Deploy**

That's it. Vercel handles the rest — SSR functions, static assets, CDN.

---

## Option B — Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Follow prompts — select your team/scope, confirm settings
# For production deploy:
vercel --prod
```

---

## Custom Domain

1. In your Vercel project → **Settings → Domains**
2. Add your domain (e.g., `bsptech.in`)
3. Update your DNS registrar with the records Vercel shows:
   - `A` record → `76.76.21.21`
   - or `CNAME` → `cname.vercel-dns.com`
4. SSL is automatic — Vercel provisions Let's Encrypt for you

---

## Environment Variables

If you add any `.env` variables later:

1. Vercel Dashboard → Project → **Settings → Environment Variables**
2. Add each key/value
3. Redeploy (or it auto-deploys on next push)

---

## Updating the Site

Every `git push` to `main` triggers an automatic redeploy on Vercel. Preview deployments are created for every pull request automatically.

```bash
# Make changes, then:
git add .
git commit -m "your update"
git push
# Vercel auto-deploys in ~30 seconds
```

---

## Troubleshooting

**Build fails on Vercel:** Check the build logs in the Vercel dashboard. Most common cause is a missing env variable or Node version mismatch. Set Node version in Vercel → Settings → General → Node.js Version → `20.x`.

**Routes return 404:** Make sure `vercel.json` is present at the project root and `framework` is set to `null`. TanStack Start's Vercel preset handles routing itself.

**Blank page / hydration error:** Usually a build cache issue. In Vercel dashboard → Deployments → redeploy with "Clear Cache".
