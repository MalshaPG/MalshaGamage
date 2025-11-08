// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SkillsEducation from './pages/SkillsEducation';
import Contact from './pages/Contact';
import './index.css';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      {/* Animated gradient background */}
      <div className="relative min-h-screen text-white font-sans overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animate -z-10"></div>

        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-transparent backdrop-blur-md shadow-md sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-blue-700">Malsha Gamage</h1>
          <div className="space-x-6">
            <Link
              to="/"
              className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              to="/skills-education"
              className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:text-blue-600"
            >
              Skills & Education
            </Link>
            <Link
              to="/contact"
              className="inline-block transform transition duration-300 hover:-translate-y-0.5 hover:text-blue-600"
            >
              Contact
            </Link>

          </div>
        </nav>

        {/* Page Content */}
        <div className="relative z-10 px-6 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills-education" element={<SkillsEducation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
