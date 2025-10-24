# Tuhi & Siyam — 1st Year Anniversary Microsite

A beautiful, responsive anniversary microsite celebrating one year of love, built with React, Three.js, and GSAP.

## Features

- **Immersive 3D Hero**: Interactive Three.js sphere with auto-rotation and orbit controls
- **Floating Photo Cards**: 6 photo cards with parallax tilt effects on hover
- **Paginated Gallery**: 24+ moment images with 3D page-turn animations
- **Lightbox**: Full-screen image viewer with captions and dates
- **Sound Effects**: Optional page-flip and lightbox sounds with user consent
- **Accessibility**: Keyboard navigation, screen reader support, `prefers-reduced-motion` compliance
- **Mobile First**: Fully responsive design optimized for all devices

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Three.js + @react-three/fiber + @react-three/drei (3D graphics)
- Framer Motion (animations)
- React Router (navigation)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory.

## Deployment

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

### Replit

1. Import project to Replit
2. Configure run command: `npm run dev`
3. Click "Run" button

## Customization

### Replacing Images

All images are in `src/assets/`:
- `couple-1.jpg` through `couple-6.jpg` - Home page floating cards
- `moment-1.jpg` through `moment-24.jpg` - Gallery images

Simply replace these files with your own photos (keep the same filenames).

### Editing Content

- **Title**: Edit `index.html` and `src/pages/Home.tsx`
- **Captions**: Update the `moments` array in `src/pages/Moments.tsx`
- **Colors**: Modify design tokens in `src/index.css` (`:root` section)

## Performance

- Images lazy-loaded for faster initial page load
- Code-split routes for optimal bundle size
- Optimized animations respect user motion preferences

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a personal project. Feel free to use as inspiration for your own anniversary sites!

---

Made with ❤️ for Tuhi & Siyam
