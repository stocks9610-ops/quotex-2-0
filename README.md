# Quotex Pro 2.0 - Trading Simulation Platform

## ⚠️ Disclaimer
**This is a trading simulation for educational purposes only.**
- NO real money is involved
- Charts and price movements are simulated
- "AI Signals" are for demonstration of platform mechanics only

## 📋 Overview
Quotex Pro 2.0 is a next-generation trading simulator designed to provide a "Ghost Mode" trading experience with professional-grade UI and real-time simulation capabilities.

### ✨ Features
- **Stunning UI**: Dark "Ghost Mode" theme with neon accents
- **Custom Chart Engine**: 60fps canvas-based candlestick chart with smooth animations
- **Firebase Integration**: Real-time database for admin controls and user data
- **Admin Panel**: Complete control center for market manipulation and user management
- **AI Integration**: Demonstrates AI signal analysis concepts
- **Offline Simulation**: Works completely offline without external API dependencies
- **Timezone Logic**: Features localized time for Pakistan Standard Time (PKT)

## 🚀 Quick Start

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/zulutradeofficial2026/quotex2.0.git
   cd quotex2.0
   ```

2. Start local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open in browser:
   - Main App: `http://localhost:8000/index.html`
   - Trading Platform: `http://localhost:8000/quotex.html`
   - Admin Panel: `http://localhost:8000/admin.html`

### Admin Panel Access
- **Development Mode**: Authentication is bypassed
- Click "UNLOCK SYSTEM" without credentials
- Full access to market controls and user management

## 📦 Project Structure
```
quotex2.0/
├── index.html              # Main landing page
├── quotex.html            # Trading simulation interface
├── admin.html             # Admin control panel
├── login.html             # User authentication
├── css/                   # Stylesheets
│   ├── admin.css
│   └── style.css
├── js/                    # JavaScript modules
│   ├── admin-core.js
│   ├── firebase-config.js
│   └── script.js
├── images/                # Assets
├── .github/workflows/     # CI/CD automation
└── DEPLOYMENT.md          # Deployment guide

```

## 🔄 Deployment

### Automated Deployment (Recommended)
This project uses **GitHub Actions** for automatic deployment to **Cloudflare Pages**.

Every push to `main` branch triggers automatic deployment.

**Setup Instructions**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete guide.

### Manual Deployment
```bash
# Commit your changes
git add .
git commit -m "feat: your feature description"

# Push to GitHub (triggers auto-deployment)
git push origin main
```

## 🛡️ Safety & Version Control

- ✅ All changes are tracked in Git
- ✅ Automatic backups on every commit
- ✅ Easy rollback to any previous version
- ✅ Cloudflare CDN for global availability

## 🔧 Configuration

### Firebase Setup
Firebase configuration is in `js/firebase-config.js`. The project uses:
- **Authentication**: Email/Password (bypassed in dev mode)
- **Realtime Database**: For admin signals and user data
- **Project**: `jay-shree-shyam0back`

### Admin Controls
The admin panel provides:
- Market signal manipulation (UP/DOWN/NEUTRAL)
- Withdrawal request management
- Global settings configuration
- Real-time user monitoring

## 📊 Development Status

✅ **Core Platform**: Fully functional  
✅ **Admin Panel**: Complete with auth bypass  
✅ **Firebase Integration**: Active and configured  
✅ **Git Repository**: Synced and backed up  
✅ **CI/CD Pipeline**: GitHub Actions configured  
⏳ **Cloudflare Deployment**: Awaiting secrets configuration  

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Make your changes and commit: `git commit -m 'feat: add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📝 License

This is a demonstration project for educational purposes.

## 🔗 Links

- **Repository**: https://github.com/zulutradeofficial2026/quotex2.0
- **Live Demo**: (Will be available after Cloudflare setup)
- **Documentation**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Last Updated**: 2025-12-31  
**Version**: 2.0  
**Status**: Active Development
