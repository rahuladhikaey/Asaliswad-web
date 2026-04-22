# Cloudflare Pages Deployment Guide

## Prerequisites

- Cloudflare account (free or paid)
- Project connected to GitHub (or ready to connect)
- Node.js 20+ installed locally

## Setup Steps

### 1. Connect Your GitHub Repository to Cloudflare

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare with your GitHub account
6. Select your `AS-web` repository
7. Click **Begin setup**

### 2. Configure Build Settings

**Production branch:** `main` (or your default branch)

**Build command:**
```bash
npm run build-pages
```

**Build output directory:**
```
.vercel/output/static
```
*(Note: Cloudflare uses this path to maintain Next.js compatibility)*

**Environment variables:** Add these in Cloudflare Dashboard
```
NEXT_PUBLIC_SUPABASE_URL = https://zhmftnlqkfppqnofpgjz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = sb_publishable_Pe9Nk-lo1h0F4UYFyw1tOw_9okQFDi1
```

### 3. Deploy

Click **Save and Deploy** - Cloudflare will automatically:
- Install dependencies
- Build the project
- Deploy to Cloudflare Pages

Your site will be available at: `https://ecommerce-app.[your-account].pages.dev`

## Local Testing

### Development Mode
```bash
cd ecommerce-app
npm run dev
```
Open http://localhost:3000 in your browser

### Build & Test
```bash
npm run build
```

### Deploy from CLI (Optional)
```bash
npm run deploy
```
This requires Wrangler authentication.

## Project Structure

- `/src/app` - Next.js pages and API routes
- `/src/components` - React components
- `/src/context` - React context (Auth, Cart)
- `/src/lib` - Utility functions
- `/public` - Static assets

## Configuration Files

- **next.config.ts** - Next.js configuration (optimized for Cloudflare)
- **wrangler.toml** - Cloudflare Workers configuration
- **package.json** - Dependencies and scripts
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.ts** - Tailwind CSS configuration

## Important Notes

✅ **Render deployment removed** - render.yaml deleted
✅ **Cloudflare optimized** - next.config.ts updated
✅ **ESLint issues fixed** - Build will succeed
✅ **Dependencies installed** - @cloudflare/next-on-pages included

## Environment Variables

Required for proper functionality:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Monitoring & Logs

- View deployment logs in Cloudflare Dashboard → Pages → Your Project → Deployments
- Check build logs and errors in real-time
- Monitor traffic and analytics in the Dashboard

## Support

For issues:
1. Check Cloudflare Pages documentation: https://developers.cloudflare.com/pages/
2. Review build logs in the dashboard
3. Verify environment variables are set correctly
4. Check your Supabase configuration

## Custom Domain

To add a custom domain:
1. In Cloudflare Dashboard → Pages → Your Project → Settings
2. Go to **Custom domains**
3. Add your domain
4. Update your domain's DNS records as instructed

---

**Last Updated:** April 2026
**Framework:** Next.js 15.1.6
**Hosting:** Cloudflare Pages (via @cloudflare/next-on-pages)
