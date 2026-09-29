# IFRIT CORE - Setup Instructions

## Installation & Deployment Guide

### Step 1: Clone the Repository
```bash
git clone https://github.com/S-Mahar-Pro/Ifrit.Core.git
cd Ifrit.Core
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages:
- **react** (18.2.0) - UI library
- **next** (14.0.0) - Framework
- **tailwindcss** (3.4.0) - Styling
- **typescript** (5.0.0) - Type safety
- **axios** (1.6.0) - HTTP client

### Step 3: Local Development
```bash
npm run dev
```

The application will start at `http://localhost:3000`

### Step 4: Build for Production
```bash
npm run build
```

### Step 5: Deploy to Netlify

#### Option A: Using Netlify CLI (Recommended)
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Deploy to Netlify
netlify deploy --prod
```

#### Option B: Connect GitHub to Netlify (Recommended for Auto-Deploy)
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select `S-Mahar-Pro/Ifrit.Core`
5. Set Build command: `npm run build`
6. Set Publish directory: `.next`
7. Click "Deploy site"

#### Option C: Manual Upload
```bash
npm run build
netlify deploy --prod --dir=.next
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your settings:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
VOICE_ENABLED=true
VOICE_LANGUAGES=en,ur,sd
AI_ENGINE_SANDBOX=true
DEPLOYMENT_PLATFORM=netlify
PROD_ENV=false
```

---

## Master Credentials

- **Username**: `Mahar69658607`
- **Password**: `Mahar@69$`

---

## NPM Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests with Jest |

---

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Node Modules
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run build -- --verbose
```

---

## Deployment Status

✅ GitHub Repository: https://github.com/S-Mahar-Pro/Ifrit.Core
⏳ Ready for Netlify: Follow Step 5 above

---

**System**: IFRIT CORE
**Owner**: Mahar69658607
**Status**: Production Ready 🚀
