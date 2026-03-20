import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Layout from './Layout';
import Home from './Home';
import AboutMe from './About';
import Social from './Social';
import SkillsDisplay from './Skill_Display';
import ProjectDisplay from './Projects';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="socials" element={<Social />} />
          <Route path="skills" element={<SkillsDisplay />} />
          <Route path="projects" element={<ProjectDisplay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
