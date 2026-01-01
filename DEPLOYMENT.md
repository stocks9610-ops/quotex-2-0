# Deployment Guide - Cloudflare Pages Integration

## 🚀 Automated Deployment Setup

This project is configured for **automatic deployment** to Cloudflare Pages via GitHub Actions.

### Prerequisites

1. **Cloudflare Account** with Pages enabled
2. **GitHub Repository** (already set up: `zulutradeofficial2026/quotex2.0`)
3. **Cloudflare API Token** and **Account ID**

---

## 📋 One-Time Setup Instructions

### Step 1: Get Cloudflare Credentials

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **My Profile** → **API Tokens**
3. Click **Create Token** → Use **Edit Cloudflare Workers** template
4. Add **Cloudflare Pages** permissions:
   - Account → Cloudflare Pages → Edit
5. Copy the generated **API Token**
6. Get your **Account ID** from the Pages dashboard URL or Workers & Pages overview

### Step 2: Add GitHub Secrets

1. Go to your GitHub repository: `https://github.com/zulutradeofficial2026/quotex2.0`
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: [Your Cloudflare API Token]
4. Add another secret:
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: [Your Cloudflare Account ID]

### Step 3: Create Cloudflare Pages Project

1. In Cloudflare Dashboard, go to **Workers & Pages**
2. Click **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository: `zulutradeofficial2026/quotex2.0`
4. Configure build settings:
   - **Project name**: `quotex-trading-platform` (must match workflow file)
   - **Production branch**: `main`
   - **Build command**: (leave empty - static site)
   - **Build output directory**: `/` (root directory)
5. Click **Save and Deploy**

---

## 🔄 How Auto-Deployment Works

Once configured, the deployment process is **fully automated**:

1. **Developer pushes code** to `main` branch
2. **GitHub Actions triggers** automatically
3. **Code is deployed** to Cloudflare Pages
4. **Live site updates** within 30-60 seconds

### Manual Deployment Trigger

You can also trigger deployment manually:
1. Go to **Actions** tab in GitHub
2. Select **Deploy to Cloudflare Pages** workflow
3. Click **Run workflow** → **Run workflow**

---

## 🛡️ Safety Features

### Git-Based Recovery
- Every deployment is backed by a Git commit
- Rollback to any previous version via GitHub
- Full commit history preserved

### Incremental Commits Strategy
```bash
# After implementing a feature
git add .
git commit -m "feat: add new trading feature"
git push origin main
# Deployment happens automatically
```

### Emergency Rollback
```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

---

## 📊 Monitoring Deployment

### Check Deployment Status
1. **GitHub Actions**: `https://github.com/zulutradeofficial2026/quotex2.0/actions`
2. **Cloudflare Dashboard**: Workers & Pages → quotex-trading-platform

### Live URL
After successful deployment, your site will be available at:
```
https://quotex-trading-platform.pages.dev
```

You can also add a custom domain in Cloudflare Pages settings.

---

## 🔧 Troubleshooting

### Deployment Fails
1. Check GitHub Actions logs for errors
2. Verify Cloudflare API token has correct permissions
3. Ensure Account ID is correct
4. Check Cloudflare Pages build logs

### Site Not Updating
1. Clear browser cache
2. Check Cloudflare Pages deployment history
3. Verify correct branch is being deployed
4. Wait 2-3 minutes for CDN propagation

---

## 📝 Development Workflow

### Recommended Git Flow
```bash
# 1. Make changes locally
# 2. Test locally (python3 -m http.server 8000)
# 3. Commit changes
git add .
git commit -m "descriptive message"

# 4. Push to GitHub (triggers auto-deployment)
git push origin main

# 5. Verify deployment in GitHub Actions
# 6. Check live site
```

### Feature Branch Strategy (Optional)
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: implement new feature"

# Push feature branch (won't trigger deployment)
git push origin feature/new-feature

# Create Pull Request on GitHub
# After review, merge to main (triggers deployment)
```

---

## 🎯 Current Project Status

✅ **Git Repository**: Connected and synced  
✅ **GitHub Actions**: Workflow configured  
✅ **Firebase Integration**: Active  
✅ **Admin Panel**: Functional with auth bypass for development  
⏳ **Cloudflare Secrets**: Awaiting configuration  
⏳ **First Deployment**: Pending secrets setup  

---

## 🚨 Important Notes

1. **Never commit sensitive data** (API keys, passwords) to Git
2. **Always use GitHub Secrets** for credentials
3. **Test locally first** before pushing to main
4. **Write descriptive commit messages** for easy rollback
5. **Monitor deployment logs** after each push

---

## 📞 Next Steps

1. ✅ Review this deployment guide
2. ⏳ Add Cloudflare secrets to GitHub
3. ⏳ Create Cloudflare Pages project
4. ⏳ Push to main branch to trigger first deployment
5. ⏳ Verify live site is working
6. ✅ Continue development with confidence!
