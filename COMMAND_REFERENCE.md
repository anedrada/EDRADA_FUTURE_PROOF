# ⚡ Command Reference Card

Quick copy-paste commands for your deployment journey!

---

## 🟢 Before You Start

```bash
# Navigate to project
cd /workspaces/EDRADA_FUTURE_PROOF

# See current status
git status
```

---

## 🔵 Local Development

```bash
# Install dependencies (first time only)
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Stop dev server
# Press Ctrl+C in terminal

# Test production build locally
npm run build
npm run preview
```

---

## 🟣 Git Configuration (First Time Only)

```bash
# Set your name globally
git config --global user.name "Your Full Name"

# Set your email globally
git config --global user.email "your.email@example.com"

# Verify it worked
git config --global --list
```

---

## 🟠 Local Git Setup

```bash
# Make sure you're in the right folder
pwd  # Should show: /workspaces/EDRADA_FUTURE_PROOF

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial portfolio setup - React + Vite with personal content"

# See commit history
git log --oneline
```

---

## 🟡 Connect to GitHub (First Time)

```bash
# Rename branch to main
git branch -M main

# Add GitHub remote
# REPLACE: YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# Push to GitHub
git push -u origin main

# Verify it worked
git remote -v
```

---

## 🟢 Regular Git Workflow (Daily Use)

```bash
# After making changes locally:

# See what changed
git status

# Stage changes
git add .

# Commit with message
git commit -m "Your clear message here"

# Push to GitHub (Vercel auto-deploys!)
git push origin main

# View recent commits
git log --oneline -5
```

---

## 🔴 Emergency: Fix Mistakes

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# See what files changed in last commit
git show --name-only

# Revert to specific commit
git checkout <commit-hash>

# Force push (use carefully!)
git push origin main --force
```

---

## 📋 Useful Git Commands

```bash
# See all commits
git log

# See last N commits
git log -n 5

# See commits in pretty format
git log --oneline --graph

# Who changed what
git blame <filename>

# See difference between versions
git diff

# See staged changes
git diff --cached

# Stash unsaved changes temporarily
git stash

# Apply stashed changes
git stash pop
```

---

## 🌐 GitHub Browser Commands

```bash
# View your repository
https://github.com/YOUR_USERNAME/my-portfolio

# View specific file
https://github.com/YOUR_USERNAME/my-portfolio/blob/main/package.json

# View commits
https://github.com/YOUR_USERNAME/my-portfolio/commits/main

# View your profile
https://github.com/YOUR_USERNAME
```

---

## 🚀 Vercel Deployment

### Manual Deployment (One Time)
```
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Select "my-portfolio"
5. Click "Deploy"
6. Copy your live URL
```

### After First Deployment (Automatic)
```bash
# Just push to GitHub - Vercel handles the rest!
git add .
git commit -m "Update portfolio"
git push origin main
# Vercel automatically rebuilds and deploys ✨
```

---

## 📊 Vercel URLs

```
Dashboard: https://vercel.com/dashboard
Your Project: https://vercel.com/dashboard/projects
Settings: https://vercel.com/dashboard/settings

Example Live URLs:
https://my-portfolio-abc123xyz.vercel.app
https://my-portfolio-abc123xyz.vercel.app/
```

---

## 🔧 Troubleshooting Commands

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check git version
git --version

# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Kill process using port 5173
lsof -i :5173
kill -9 <PID>

# Check git remote
git remote -v

# Check current branch
git branch

# Check git status
git status

# See all changes
git diff HEAD
```

---

## 📝 Commit Message Examples

```bash
# Good commit messages:
git commit -m "Add Learning component with progress bars"
git commit -m "Update project descriptions"
git commit -m "Fix responsive design for mobile"
git commit -m "Add Currently Learning section"
git commit -m "Update contact information"

# Avoid:
git commit -m "update"
git commit -m "fix"
git commit -m "changes"
git commit -m "test"
```

---

## 🎯 Quick Deployment Checklist

```bash
# 1. Test locally
npm run dev
# (Test in browser, then Ctrl+C)

# 2. Test build
npm run build
npm run preview
# (Test production build, then Ctrl+C)

# 3. Commit
git add .
git commit -m "Your message"

# 4. Push
git push origin main

# 5. Watch Vercel auto-deploy
# (Visit vercel.com/dashboard)
```

---

## 🌟 Advanced: Using Branches

```bash
# Create and switch to new branch
git checkout -b feature/new-section

# Make your changes and commit
git add .
git commit -m "Add blog section"

# Push branch to GitHub
git push origin feature/new-section

# Switch back to main
git checkout main

# Delete local branch
git branch -d feature/new-section
```

---

## 📚 Environment Variables (If Needed Later)

```bash
# Create .env file
touch .env

# Add variables (never commit!)
API_KEY=your_api_key_here
DATABASE_URL=your_db_url_here

# In Vercel dashboard:
# Settings → Environment Variables
# Add same variables there
# Redeploy for changes to take effect
```

---

## 🎓 Learning More

```bash
# See what npm scripts available
npm run

# Check package.json dependencies
cat package.json | grep -A 20 "dependencies"

# View git config
git config --list

# See git documentation
git help <command>
# Example: git help push
```

---

## 🆘 Support

When something goes wrong:
1. Read the error message carefully
2. Try one of the troubleshooting commands above
3. Check DEPLOYMENT_GUIDE.md
4. Review ACTIVITY_COMPLETE_GUIDE.md
5. Look at QUICK_START.md

---

## 💾 Backup Your Work

```bash
# Your code is backed up in:
1. Your local .git folder
2. GitHub (remote)
3. Vercel (deployed)

# To clone your repo on another computer:
git clone https://github.com/YOUR_USERNAME/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

---

## ⏰ Common Time Estimates

```
npm install:        ~2-3 minutes
npm run dev:        ~5-10 seconds to start
npm run build:      ~20-30 seconds
git push:           ~3-5 seconds
Vercel deployment:  ~1-2 minutes (first time)
                    ~30 seconds (updates)
```

---

## 📱 Mobile Testing

```bash
# While npm run dev is running:

# Get your local IP
ipconfig getifaddr en0  # Mac
hostname -I             # Linux
ipconfig                # Windows

# Access on phone on same WiFi:
http://192.168.X.X:5173
```

---

## 🎯 Your Next Command

**Ready to go live?**

Open a terminal and type:
```bash
cd /workspaces/EDRADA_FUTURE_PROOF
npm install
npm run dev
```

Then follow the deployment steps from QUICK_START.md! 🚀

---

*Last Updated: January 2026*
