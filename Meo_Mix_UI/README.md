# 🍹 Meo Mix Official Website — Premium Beverage Web Experience

![Meo Mix Banner](public/assets/logo/meo_mix_logo.png)

A world-class, immersive, 3D interactive web application for **Meo Mix** — India's premium refreshing fruit drink brand. Built with **React 19**, **Vite**, **Three.js / React Three Fiber**, **GSAP**, **Framer Motion**, and **Lenis Smooth Scroll**.

---

## ✨ Features & Highlights

- 🍾 **Interactive 3D Stage**: Real-time 3D floating beverage bottles powered by **React Three Fiber** and **Three.js** with ambient lighting and particle effects.
- 🎨 **Dynamic Flavour Theme Engine**: Seamlessly morph background gradients, lighting glows, fruit particles, and accent color tokens across all 8 flagship flavours without page reloads.
- 🌊 **60fps Smooth Scroll**: Integrated **Lenis momentum scrolling** synchronized with **GSAP ScrollTrigger** for cinematic section-to-section transitions.
- 🥭 **8 Signature Flavours**:
  - **Royal Mango** (`#FDBA21` / `#D97706`)
  - **Tropical Pineapple** (`#F5A623` / `#C97B0F`)
  - **Fresh Musk Melon** (`#6CCB5F` / `#2E7D32`)
  - **Zesty Orange** (`#FF8C1A` / `#C96100`)
  - **Exotic Lychee** (`#F4B7C7` / `#C2185B`)
  - **Pink Guava** (`#FF6FA8` / `#AD1457`)
  - **Ruby Pomegranate** (`#D81B60` / `#880E4F`)
  - **Desi Nimbu Pani** (`#49B649` / `#1B5E20`)
- 📊 **Animated Counters & Interactive Cards**: Staggered scroll reveals, particle bursts, and glassmorphic micro-interactions.
- 📱 **Fully Responsive & Accessible**: Optimized for Mobile, Tablet, Laptop, and Ultra-Wide screens with zero layout shifts and prefers-reduced-motion support.

---

## 🛠️ Tech Stack

| Category | Technology / Library |
| :--- | :--- |
| **Core Framework** | React 19, Vite, React Router DOM v7 |
| **3D & Canvas** | Three.js, `@react-three/fiber`, `@react-three/drei` |
| **Animations** | GSAP 3 (ScrollTrigger), Framer Motion, Canvas Confetti |
| **Scrolling Engine** | Lenis Smooth Scroll |
| **Carousels & UI** | Swiper.js, React Icons (Lucide / Feather / Ionic) |
| **Styling** | SCSS / SASS, CSS Modules, Modern CSS Design Tokens |
| **SEO & Meta** | React Helmet Async |

---

## 📁 Project Structure

```text
Meo_Mix_UI/
├── public/
│   └── assets/
│       ├── logo/            # meo_mix_logo.png, meo_mix_logo_white.png
│       ├── products/        # High-res WebP commercial bottle assets
│       ├── fruits/          # SVG fruit slices, leaves, splashes
│       └── video/           # Ambient background video loop
├── src/
│   ├── assets/              # Component assets
│   ├── modules/
│   │   ├── about/           # Brand narrative & interactive bottle trio
│   │   ├── canvas/          # Three.js 3D Bottle & Particle Canvas
│   │   ├── contact/         # Luxury contact form & office details
│   │   ├── distributor/     # Distributor partnership portal & steps
│   │   ├── landing/         # Hero section, Flavour selector, Why Meo Mix, Testimonials, FAQ
│   │   └── products/        # Product showcase & modal nutrition views
│   ├── routes/              # Page routes (Home, About, Products, Distributor, Contact)
│   ├── shared/              # Reusable Navbar, Footer, Preloader, Buttons, Modals
│   ├── styles/              # SCSS variables, mixins, & global reset
│   ├── App.jsx              # App root & Lenis initialization
│   └── main.jsx             # React DOM root entry
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js 18+** installed on your system.

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd Meo_Mix_UI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

Open your browser and visit: `http://localhost:5173` (or the network IP printed in the terminal).

---

## 📦 Available Scripts

In the project directory, you can run:

- `npm run dev` — Starts the development server with Hot Module Replacement (HMR).
- `npm run build` — Compiles and builds the production bundle into the `dist/` directory.
- `npm run preview` — Locally previews the production build.
- `npm run lint` — Runs Oxlint for fast code linting.

---

## 🔒 Brand & Asset Guidelines

- **Logo Assets**: The Meo Mix logo (`meo_mix_logo.png` & `meo_mix_logo_white.png`) are locked commercial assets and must not be redrawn or modified.
- **Product Packaging**: Bottle renders are official commercial product images mapped to exact brand color specifications.

---

## 📄 License & Credits

© **Meo Mix Beverages Pvt. Ltd.** All rights reserved. Crafted with care in India 🇮🇳.
