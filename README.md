
# ✏️ GoDraw - The Sketchy Infinite Whiteboard

<div align="center">
  <img src="https://github.com/shahriaravi/godraw-frontend/blob/main/public/images/fullLogo.png" alt="GoDraw Logo" width="100" />
  <br/>
  
  [![Made in India](https://img.shields.io/badge/Made%20in-India-orange)](https://en.wikipedia.org/wiki/Make_in_India)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-brightgreen)](https://github.com/rishabh21g/godraw)
  [![Framework](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
</div>

<br/>

**GoDraw** is a lightning-fast, hand-drawn style digital whiteboard built for creators who want to sketch ideas at the speed of thought. 

Unlike sterile corporate tools, GoDraw brings the fun back to brainstorming with a unique **"Sketchy UI"** design system that looks and feels like paper. It is free, open-source, and works directly in your browser without requiring a login.

---

## ✨ Features

*   **🎨 Sketchy Design System:** A completely custom UI built with **Tailwind CSS** and **Shantell Sans** that mimics hand-drawn paper sketches.
*   **⚡ Lightning Fast:** Optimized rendering using **Next.js** and **Framer Motion** for 60fps performance.
*   **♾️ Infinite Canvas:** Pan, zoom, and expand your ideas without boundaries.
*   **🚫 No Login Required:** Just open the link and start drawing immediately.
*   **📱 Responsive:** Fully optimized for Desktop, Tablets, and Mobile devices with a custom mobile drawer.
*   **📂 Export Options:** Save your work as **PNG**, **SVG**, or **PDF**.

---

## 🛠️ Tech Stack

This project has been completely re-engineered with a modern React stack:

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animation:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Font:** [Shantell Sans](https://fonts.google.com/specimen/Shantell+Sans) (Google Fonts)
*   **Utils:** `clsx`, `tailwind-merge` for robust class handling.

---

## 🚀 Getting Started

Follow these steps to run the sketchiest whiteboard on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rishabh21g/godraw.git
    cd godraw
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:3000` to see the app in action.

---

## 📂 Project Structure

```bash
godraw/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── page.tsx          # Landing page assembly
│   └── globals.css       # Tailwind directives & custom CSS variables
├── components/
│   ├── decorations/      # SVG Doodles (Pencils, Squiggles, Stars)
│   ├── layout/           # Header, Footer
│   ├── sections/         # Hero, Features, Pricing, etc.
│   └── ui/               # Reusable atoms (SketchyButton, SketchyInput)
├── lib/
│   └── utils.ts          # CN utility for class merging
├── public/               # Static assets (images, icons)
└── tailwind.config.ts    # Custom branding configuration


---

## 🤝 Contributing

GoDraw is a community-driven project. We love pull requests!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
