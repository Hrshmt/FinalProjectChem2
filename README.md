# Hydro-Gen: The Zero-Emission Roadmap 🔋

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

An interactive educational website exploring the chemistry of hydrogen fuel cells, designed for **Grade 11 Chemistry (Manitoba 30S)**.

![Hydro-Gen Homepage](public/images/hero_hydrogen_molecule.png)

## 🌟 Features

### Interactive Learning
- **PEM Fuel Cell Diagram** — Click on anode, cathode, and membrane to explore half-reactions
- **Boyle's Law Calculator** — Step-by-step pressure calculations for hydrogen storage
- **Animated Visualizations** — Electron flow, proton movement, and molecular animations

### Educational Content
- Comprehensive coverage of redox reactions (LEO/GER)
- Kinetic Molecular Theory and gas laws
- Chemical bonding in H₂, O₂, and H₂O
- Manitoba's green hydrogen potential

### Modern Design
- Futuristic dark theme with neon accents
- Glassmorphism navigation
- Smooth Framer Motion animations
- Fully responsive layout

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hydro-gen.git

# Navigate to project directory
cd hydro-gen

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## 📁 Project Structure

```
hydro-gen/
├── public/
│   ├── hydrogen.svg          # Favicon
│   └── images/               # Generated images
├── src/
│   ├── components.jsx        # All shared UI components
│   ├── FuelCellDiagram.jsx   # Interactive SVG diagram
│   ├── PressureCalculator.jsx # Boyle's Law calculator
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # React entry point
│   ├── index.css             # Global styles & theme
│   └── pages/
│       ├── Home.jsx          # The Vision
│       ├── RedoxEngine.jsx   # Oxidation/Reduction
│       ├── GasLab.jsx        # Gas Laws & Bonding
│       └── ManitobaFuture.jsx # Green Hydrogen
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── CHANGELOG.md
├── LICENSE
└── .gitignore
```

## 🧪 Chemistry Topics Covered

| Topic | Page | Interactive Element |
|-------|------|---------------------|
| Redox Reactions | The Redox Engine | Clickable fuel cell diagram |
| Half-Reactions | The Redox Engine | Anode/Cathode info panels |
| Boyle's Law (P₁V₁ = P₂V₂) | The Gas Lab | Pressure calculator |
| Kinetic Molecular Theory | The Gas Lab | Animated molecules |
| Covalent Bonding | The Gas Lab | Bond energy comparison |
| Electrolysis | The Manitoba Future | Process flow diagram |

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#050505` | Primary dark background |
| Neon Blue | `#00d4ff` | Primary accent, links |
| Electric Green | `#39ff14` | Secondary accent, success states |
| Text Primary | `#ffffff` | Headings, important text |
| Text Secondary | `#b0b0b0` | Body text |

### Typography
- **Headings**: Orbitron (futuristic sans-serif)
- **Body**: Inter (clean, readable)

## 📚 Citations

All chemistry content is properly cited in APA-7 format. Sources include:
- U.S. Department of Energy
- Khan Academy
- OpenStax Chemistry
- Manitoba Hydro
- International Energy Agency

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: React Router 7

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍🎓 About

Created as a final project for **Grade 11 Chemistry (Manitoba 30S)** to demonstrate the real-world applications of chemical concepts in hydrogen fuel cell technology.

---

<p align="center">
  Made with 💚 for clean energy education
</p>
