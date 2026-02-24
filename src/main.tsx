import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Layout from './Layout';
import Home from './Home';

// temporary jsx lol
const Skills = () => <h2>My Technical Skills</h2>;
const Projects = () => <h2>My Portfolio Projects</h2>;
const Socials = () => <h2>My Socials</h2>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="socials" element={<Socials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
