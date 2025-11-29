# Bhavesh's Modern 3D Portfolio Website

A modern, responsive, and interactive portfolio website built with React 19, Three.js, and custom CSS. Features 3D animations, smooth transitions, and a dark/light theme toggle.

## 🚀 Features

- **3D Hero Section** - Interactive 3D graphics using Three.js with mouse tracking and floating objects
- **Responsive Design** - Mobile-first approach that works on all devices (desktop, tablet, mobile)
- **Dark/Light Mode** - Theme toggle for better accessibility and user preference
- **Smooth Animations** - CSS animations, transitions, and effects throughout
- **Multiple Sections**:
  - Hero with 3D graphics and CTA buttons
  - About section with personal bio
  - Skills showcase with tech stack
  - Featured projects with descriptions and links
  - Experience timeline
  - Contact form with validation
- **Modern UI** - Gradient text, glowing effects, hover animations, and subtle shadows
- **Performance Optimized** - Lazy loaded components and optimized rendering

## 📋 Project Structure

```
src/
├── components/
│   ├── Hero.js              # 3D hero section with Three.js interactive graphics
│   ├── About.js             # About section with bio
│   ├── Skills.js            # Skills showcase with tech stack
│   ├── Projects.js          # Featured projects grid
│   ├── Experience.js        # Experience timeline
│   ├── Contact.js           # Contact form
│   └── Navigation.js        # Navigation bar with theme toggle
├── App.js                   # Main app component
├── App.css                  # Global styles and animations
└── index.js                 # React entry point
public/
├── index.html               # HTML template
└── manifest.json            # PWA configuration
```

## 🛠️ Tech Stack

- **React 19.2** - Modern UI library with hooks
- **Three.js** - 3D graphics and WebGL rendering
- **CSS3** - Animations, gradients, and responsive design
- **JavaScript ES6+** - Modern JavaScript
- **React Testing Library** - Testing framework

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone repository (or navigate to project directory)
cd /home/bhavesh/Desktop/portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server (runs on http://localhost:3000)
npm start
```

The app will automatically reload when you make changes.

### Build for Production

```bash
# Create optimized production build
npm run build
```

The build folder contains the production-ready files.

### Testing

```bash
# Run tests in watch mode
npm test
```

## 🎨 Customization Guide

### Updating Personal Information

1. **Hero Section** - Edit `src/components/Hero.js`:
   - Update name, subtitle, and buttons
   - Modify social media links

2. **About Section** - Edit `src/components/About.js`:
   - Replace bio and description

3. **Skills** - Edit `src/components/Skills.js`:
   - Add/remove skills from the array
   - Modify icons (using emojis)

4. **Projects** - Edit `src/components/Projects.js`:
   - Update project details, descriptions, tags
   - Add GitHub and live demo links

5. **Experience** - Edit `src/components/Experience.js`:
   - Add/modify job experiences and dates

6. **Contact** - Edit `src/components/Contact.js`:
   - Update email, phone, and social links
   - Modify form handling if needed

### Styling

- **Global Styles** - `src/App.css` contains all theme colors and animations
- **Component Styles** - Each component has its own CSS file
- **Color Scheme** - Modify CSS variables in `:root` in `App.css`
- **Animations** - Keyframe animations defined in `App.css`

### Theme Colors

Edit the CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #6366f1;        /* Indigo */
  --secondary-color: #ec4899;      /* Pink */
  --accent-color: #f59e0b;         /* Amber */
  --dark-bg: #0f172a;              /* Dark background */
  --dark-card: #1e293b;            /* Dark card background */
}
```

## 📦 Deployment

The portfolio can be deployed to various platforms:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
1. Push code to GitHub
2. Connect GitHub repository to Netlify
3. Netlify automatically builds and deploys on push

### GitHub Pages
```bash
# Build static site
npm run build

# Deploy build folder contents to gh-pages branch
```

## 🎯 Key Features Explained

### 3D Graphics (Three.js)
- Interactive icosahedron that responds to mouse movement
- Floating animated spheres with different colors
- Multiple light sources creating realistic shadows
- Real-time rendering with auto-resize on window changes

### Animations
- Fade-in animations on scroll (using CSS animations)
- Hover effects on cards and buttons
- Smooth color transitions
- Floating animations on 3D objects

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Media queries for different breakpoints
- Touch-friendly navigation

## 🧪 Testing

The project includes test setup with React Testing Library. Create tests in `.test.js` files:

```javascript
// Example: components/Hero.test.js
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

test('renders hero section with name', () => {
  render(<Hero />);
  expect(screen.getByText(/Bhavesh/i)).toBeInTheDocument();
});
```

Run tests with `npm test`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000 and start again
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9
npm start
```

### Three.js graphics not showing
- Ensure WebGL is enabled in your browser
- Check browser console for WebGL errors
- Try in a different browser

### Build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Bhavesh** - Full-Stack Developer & Designer

- GitHub: [github.com/bhavesh](https://github.com)
- LinkedIn: [linkedin.com/in/bhavesh](https://linkedin.com)
- Email: [your.email@example.com](mailto:your.email@example.com)

---

**Built with React, Three.js & ❤️**
