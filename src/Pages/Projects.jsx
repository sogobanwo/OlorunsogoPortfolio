import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import "../StyleSheets/ProjectsContent.css"
import "../StyleSheets/mobile.css"

export const ProjectsContent = () => {
  return (
    <section id="projects">
  <div className="above-cards">
    <h1>Projects</h1>
    <p>Things i have built so far.</p>
  </div>
  <div className="card">
    <div className="each-card-wrapper">
      <div className="each-card">
        <img src="/image-resources/newsgrid.PNG" width="120px" height="120px" alt="Sogo" />
        <h1>NEWSGRID WEBSITE</h1>
        <p>This is a newsgrid website which has 3 pages and various sections in the different pages built with the use of CSS Grid. It is not Responsive.</p>
        <p>Tech Stack: HTML &amp; CSS</p>
        <a rel="noreferrer" href="https://github.com/sogobanwo/newsgrid" target="_blank">
         <FaGithub size="25px"/>
        </a>
        <a rel="noreferrer" href="https://github.com/sogobanwo/newsgrid" target="_blank">
          <FaGlobe size="25px"/>
        </a>
      </div>
      <div className="each-card">
        <img src="/image-resources/edgeledger-pics.PNG" width="120px" height="120px" alt="Sogo" />
        <h1>Edge-Ledger</h1>
        <p>This is an Investment company static website which has a page and various sections in the page built with the use of CSS Flex. It is mobile Responsive.</p>
        <p>Tech Stack: HTML &amp; CSS</p>
        <a rel="noreferrer" href="https://github.com/sogobanwo/Edge-Ledger" target="_blank">
         <FaGithub size="25px"/>
        </a>
        <a rel="noreferrer" href="https://github.com/sogobanwo/Edge-Ledger" target="_blank">
          <FaGlobe size="25px"/>
        </a>
      </div>
      <div className="each-card">
        <img src="/Image-resources/back.PNG" width="120px" height="120px" alt="Sogo" />
        <h1>PORTFOLIO WEBSITE</h1>
        <p>This is a Portfoliowebsite which has only a page and various sections in this page built with the use of CSS Flex.</p>
        <p>Tech Stack: HTML &amp; CSS</p>
        <a rel="noreferrer" href="https://github.com/sogobanwo/portfolio" target="_blank">
          <FaGithub size="25px"/>
        </a>
        <a rel="noreferrer" href="https://sogobanwo-portfolio.netlify.app/" target="_blank">
          <FaGlobe size="25px"/>
        </a>
      </div>
    </div>
    <div className="each-card-wrapper">
      <div className="each-card">
        <img src="/Image-resources/mechanic.PNG" width="120px" height="120px" alt="Sogo" />
        <h1>A MECHANIC WEBSITE LANDING PAGE</h1>
        <p>This a single page website to serve as the landing page for a mechanic workshop</p>
        <p>Tech Stack: HTML &amp; CSS</p>
        <a rel="noreferrer" href="https://github.com/sogobanwo/Mechanic" target="_blank">
          <FaGithub size="25px"/>
        </a>
        <a rel="noreferrer" href="https://github.com/sogobanwo/Mechanic" target="_blank">
          <FaGlobe size="25px"/>
        </a>
      </div>
      <div className="each-card">
        <img src="/Image-resources/Affliate Marketing Landing Page.PNG" width="120px" height="120px" alt="Sogo" />
        <h1>A MECHANIC WEBSITE LANDING PAGE</h1>
        <p>This a single page website to serve as the landing page for a mechanic workshop</p>
        <p>Tech Stack: HTML &amp; CSS</p>
        <a rel="noreferrer" href="https://github.com/sogobanwo/ade-website" target="_blank">
         <FaGithub size="25px"/>
        </a>
        <a rel="noreferrer" href="https://sales-only.netlify.app/" target="_blank">
          <FaGlobe size="25px"/>
        </a>
      </div>
      <div className="each-card">
        <img src="/Image-resources/kontrako.PNG" width="120px" height="120px" alt="Kontrako" />
        <h1>A MECHANIC WEBSITE LANDING PAGE</h1>
        <p>This a single page website to serve as the landing page for a mechanic workshop</p>
        <p>Tech Stack: HTML &amp; CSS</p>
        <a rel="noreferrer" href="https://github.com/sogobanwo/Kontrako" target="_blank">
          <FaGithub size="25px"/>
        </a>
        <a rel="noreferrer" href="https://github.com/sogobanwo/Kontrako" target="_blank">
         <FaGlobe size="25px"/>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

const Projects = () => {
  return (
    <>
      <Header />
      <ProjectsContent />
      <Footer />
    </>
  );
};

export default Projects;
