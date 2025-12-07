# Deployment Guide

Your portfolio website is ready to deploy! Follow these steps to get it live on Netlify.

## Step 1: Push to GitHub

1. Create a new repository on GitHub (don't initialize with README, .gitignore, or license)

2. Push your code to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. Go to [Netlify](https://app.netlify.com/) and sign up/login

2. Click **"Add new site"** → **"Import an existing project"**

3. Choose **"Deploy with GitHub"** and authorize Netlify to access your GitHub account

4. Select your portfolio repository

5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click **"Deploy site"**

6. Wait for the deployment to complete (usually takes 1-2 minutes)

7. Your site will be live at `https://your-site-name.netlify.app`

### Option B: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

## Step 3: Customize Your Domain (Optional)

1. In Netlify dashboard, go to **Site settings** → **Domain management**

2. Click **"Add custom domain"** and follow the instructions

## Continuous Deployment

Once connected to GitHub, Netlify will automatically deploy your site whenever you push changes to the main branch!

## Testing Locally

Before deploying, you can test the production build locally:

```bash
npm run build
npm run preview
```

This will serve the production build at `http://localhost:4173`



