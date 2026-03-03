import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Layout from './Layout';
import Home from './Home';
import AboutMe from './About';
import Social from './Social';
import SkillsDisplay from './Skill_Display';

// temporary jsx lol
const Projects = () => <h2>My Portfolio Projects</h2>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="socials" element={<Social />} />
          <Route path="skills" element={<SkillsDisplay />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
