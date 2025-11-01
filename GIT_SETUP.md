# Git Setup Guide

## ✅ What's Been Done

1. **Google Analytics Added** - Tracking ID: `G-E63W60ZT7G`
2. **Git Initialized** - Repository is ready
3. **README.md Created** - Complete project documentation
4. **.gitignore Already Exists** - Properly configured to exclude build files and node_modules

## 🚀 Push to GitHub

### Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., "cv-portfolio" or "portfolio-website")
3. **Don't** initialize with README (we already have one)
4. Copy the repository URL

### Step 2: Add Remote and Push

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Create initial commit (if not done yet)
git add .
git commit -m "Initial commit: SvelteKit portfolio with Google Analytics"

# Push to GitHub
git branch -M main
git push -u origin main
```

### Example:
```bash
git remote add origin https://github.com/arturas/portfolio.git
git add .
git commit -m "Initial commit: SvelteKit portfolio with Google Analytics"
git branch -M main
git push -u origin main
```

## 📦 What's Included in Git

✅ Source code (`src/` folder)
✅ Configuration files (`package.json`, `svelte.config.js`, etc.)
✅ Static files (`.htaccess`, `as-favicon.png`, images)
✅ Documentation (`README.md`, `PERFORMANCE_FIXES.md`)

❌ `node_modules/` (excluded via .gitignore)
❌ `build/` folder (excluded - generated on each build)
❌ `.svelte-kit/` (excluded - temporary build files)

## 🔄 Future Updates

To push changes to GitHub:

```bash
# Check status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your commit message here"

# Push to GitHub
git push
```

## 🌐 Deploy from GitHub

Many hosting platforms can deploy directly from GitHub:
- **Vercel**: Connect your GitHub repo, auto-deploy on push
- **Netlify**: Connect your GitHub repo, auto-deploy on push
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **Cloudflare Pages**: Connect GitHub repo for automatic deployments

For your current shared hosting, continue uploading the `build/` folder manually.

## 📝 Common Git Commands

```bash
# View changes
git status

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Pull latest changes
git pull

# View remotes
git remote -v
```
