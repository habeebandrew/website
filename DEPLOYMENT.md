# Deployment Guide for Habeeb Portfolio

## 🚀 Vercel Deployment

### Prerequisites
- Node.js 18.x or later
- Vercel account
- Git repository

### Environment Variables
Add these environment variables in your Vercel dashboard:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_APP_NAME=Habeeb Andraws Portfolio
VITE_APP_URL=https://habeeb-andraws.vercel.app
```

### Deployment Steps

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm install --legacy-peer-deps && npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install --legacy-peer-deps`
   - Node.js Version: `18.x`

3. **Environment Variables**: Add the variables listed above
4. **Deploy**: Trigger deployment

### Common Issues & Solutions

#### 1. React 19 Compatibility Issues
**Problem**: Dependencies not compatible with React 19
**Solution**: The `.npmrc` file handles this with `legacy-peer-deps=true`

#### 2. Build Failures
**Problem**: Build fails during deployment
**Solution**: Use the custom build command with legacy peer deps

#### 3. Routing Issues
**Problem**: 404 errors on page refresh
**Solution**: The `vercel.json` handles SPA routing with rewrites

### Manual Deploy Commands
```bash
# Local build test
npm run build

# Production build
npm run build:prod

# Preview build
npm run preview
```

### File Structure
```
├── .npmrc              # npm configuration for legacy peer deps
├── .env.example        # Environment variables template
├── .env.production     # Production environment template
├── vercel.json         # Vercel deployment configuration
└── dist/               # Build output directory
```

### Troubleshooting
If deployment fails:
1. Check Vercel build logs
2. Verify environment variables are set
3. Ensure Node.js version is 18.x
4. Check that `.npmrc` file is committed to repository