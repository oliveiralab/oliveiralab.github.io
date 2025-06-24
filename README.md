# Oliveira Lab - Academic Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features automatic deployment to GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone https://github.com/yourusername/oliveiralab.github.io.git
   cd oliveiralab.github.io
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Navigate to `http://localhost:5173`

## 🔧 Deployment

### Automatic Deployment (GitHub Actions)

This repository is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages:**
   - Go to repository Settings > Pages
   - Set Source to "GitHub Actions"

2. **Deploy:**
   - Push to main branch or create a pull request
   - GitHub Actions will automatically build and deploy

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

##  Built With

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Router** - Routing

## 📁 Project Structure

```
├── components/          # Reusable UI components
├── pages/              # Page components
├── contexts/           # React contexts
├── data/               # Static data files
├── .github/workflows/  # GitHub Actions
└── dist/               # Built files (auto-generated)
```
