# React Portfolio

A modern, responsive portfolio website built with React.js and Vite.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections Included**:
  - Header with navigation
  - Hero section with call-to-action buttons
  - About me section with stats
  - Projects showcase with filtering
  - Skills & technologies
  - Contact form
  - Footer

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with responsive design
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Header.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── About.jsx
│   ├── About.css
│   ├── Projects.jsx
│   ├── Projects.css
│   ├── Skills.jsx
│   ├── Skills.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Footer.jsx
│   └── Footer.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

1. **Update personal information**: Edit the content in `Hero.jsx`, `About.jsx`, and `Contact.jsx`
2. **Change projects**: Modify the `projects` array in `Projects.jsx`
3. **Update skills**: Edit the `skills` object in `Skills.jsx`
4. **Customize colors**: Update CSS color values in respective CSS files
5. **Add your images**: Place images in the `public` folder and reference them

## Features to Add

- Image gallery for projects
- Blog section
- Testimonials section
- Dark mode toggle
- Multi-language support
- Integration with email service for contact form

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!
