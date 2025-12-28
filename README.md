# BrandBuzz UI Clone

A responsive React-based frontend project that replicates the BrandBuzz landing page UI.  
This project focuses on clean component architecture, modern CSS styling, and full responsiveness across devices.

---

## Project Overview

BrandBuzz UI Clone is a single-page marketing website built using React.  
The goal of this project is to practice real-world UI development by converting a static design into a fully responsive, component-driven React application.

The project includes multiple sections commonly found in agency landing pages, such as hero banners, services, testimonials, call-to-action, and footer.

---

## Tech Stack

- React (Functional Components)
- CSS (Vanilla CSS, no UI libraries)
- JavaScript (ES6+)
- Vite or Create React App (depending on setup)

---

## Features

- Fully responsive design (desktop, tablet, mobile)
- Clean and reusable React components
- Horizontal testimonial slider without external libraries
- Consistent design system (colors, spacing, typography)
- Mobile-first layout handling
- Easy to extend and maintain

---

## Folder Structure

src/
├── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── Services.jsx
│ ├── Solutions.jsx
│ ├── Agency.jsx
│ ├── Testimonials.jsx
│ └── Footer.jsx
├── assets/
│ ├── hero.png
│ ├── solution.png
│ └── agency.png
├── App.jsx
├── index.css
└── main.jsx

---

## Sections Implemented

1. Navbar
2. Hero Section
3. Services Section
4. Solutions Workflow Section
5. Our Agency Section
6. Client Testimonials (Slider)
7. Call-To-Action Banner
8. Footer

---

## Installation & Setup

1. Clone the repository
   git clone <repository-url>

2. Navigate to the project directory
   cd brandbuzz-ui-clone

3. Install dependencies
   npm install

4. Start the development server
   npm run dev

5. Open the app in your browser
   http://localhost:5173

---

## Customization

- Modify content directly inside component files.
- Global styles can be updated in `index.css`.
- New sections can be added by creating new components inside `components/`.

---

## Responsiveness

The project uses CSS Grid and Flexbox along with media queries to ensure:

- Multi-column layouts on large screens
- Stacked layouts on tablets and mobile devices
- Touch-friendly sliders and buttons

---

## Future Enhancements

- Add animations using Framer Motion
- Convert styles to Tailwind CSS
- Add dark mode support
- Integrate backend or CMS
- Improve accessibility (ARIA roles, keyboard navigation)
- SEO optimization

---

## License

This project is for educational and practice purposes only.
