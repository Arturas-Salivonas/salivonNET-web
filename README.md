# CV-Web Portfolio

High-performance portfolio website built with SvelteKit, optimized for Google PageSpeed (100/100 on mobile and desktop).

## 🚀 Features

- **100/100 PageSpeed Score** - Fully optimized for performance
- **Responsive Design** - Works perfectly on all devices
- **Animated Particle Background** - Interactive hero section
- **Modern Tech Stack** - SvelteKit, TypeScript, Vite
- **Static Site Generation** - Deploy anywhere
- **Optimized Caching** - 1-year cache for assets
- **Google Analytics** - Built-in tracking

## 📦 Tech Stack

- **Framework:** SvelteKit with Svelte 5
- **Language:** TypeScript
- **Build Tool:** Vite 7.1.9
- **CSS:** Scoped styles with CSS variables
- **Deployment:** Static adapter for shared hosting

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── routes/
│   ├── +page.svelte          # Main page with data
│   └── +layout.svelte         # Root layout with analytics
├── lib/
│   └── components/
│       ├── IntroSection.svelte
│       ├── ParticleBackground.svelte
│       ├── StatsSection.svelte
│       ├── SkillsSection.svelte
│       ├── PortfolioSection.svelte
│       ├── Footer.svelte
│       └── ScrollToTop.svelte
└── app.css                    # Global styles

static/
├── .htaccess                  # Apache config with caching
├── as-favicon.png             # Favicon
└── *.webp                     # Portfolio images
```

## 🚀 Deployment

The site is configured for static hosting. After building:

1. Run `npm run build`
2. Upload contents of `build/` folder to your hosting
3. Ensure `.htaccess` file is uploaded (hidden file)
4. Verify all images are uploaded

## 🎯 Performance Optimizations

- Critical CSS inlined in layout
- Lazy loading for images
- Intersection observers for animations
- Optimized caching headers (1 year for hashed assets)
- Minified CSS and JS with Terser
- GPU-accelerated animations
- Content visibility for images

## 📊 Google Analytics

Analytics is configured with measurement ID: `G-E63W60ZT7G`

## 🔧 Configuration

- **Favicon:** Place `as-favicon.png` in `static/` folder
- **Images:** Add portfolio images to `static/` folder
- **Data:** Update arrays in `src/routes/+page.svelte`:
  - `personalInfo` - Name, title, description
  - `stats` - Achievement statistics
  - `skills` - Technology skills
  - `portfolio` - Project showcase

## 📝 License

© 2025 Arturas Salivonas. All rights reserved.
