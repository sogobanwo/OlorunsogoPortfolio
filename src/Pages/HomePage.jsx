import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import "../StyleSheets/HompageContent.css"
import sogo from "../PortfolioImages/Sogo Picture.jpg"
import html from "../PortfolioImages/htmlpics.png"
import css from "../PortfolioImages/csspics.png"
import bootstrap from "../PortfolioImages/logos_bootstrap.png"
import JS from "../PortfolioImages/javascriptpics.png"
import git from "../PortfolioImages/gitpics.png"
import github from "../PortfolioImages/githubpics.png"
import react from "../PortfolioImages/Reactpics.png"
import python from "../PortfolioImages/Pythonpics.png"
import flask from "../PortfolioImages/Flaskpics.png"
import SetterApp from "../PortfolioImages/SetterAppPics.png"
import TaskManager from "../PortfolioImages/TaskManager.png"

export const HomePageContent =()=>{
  return(
    <>
   <div>
  <section className="intro">
    <div id="text-wrapper">
      <div id="big-text">
        <h1>Hi👋,</h1>
        <h1>I'm Banwo Olorunsogo.</h1>
        <h1>I build things for the web.</h1>
      </div>
      <p>Banwo Olorunsogo is a highly resourceful and intelligent Software Developer seeking to develop professional competence in the Software Engineering field by solving real life problems with his skills.</p>
    </div>
    <div id="right-anime">
      <img src={sogo} alt="Olorunsogo-Banwo" width="200px" height="200px" />
    </div>
  </section>
  {/* demacation of the sections */} 
  <div id="middle_line" />
   {/* second section */} 
  <section id="tech-stack">
    <div className="tech-stack-header">
      <h1>My Tech Stack</h1>
      <p>Technologies i have been working with recently.</p>
    </div>
    <div className="tech-images">
      <img src={html} alt="html" width={50} height={50} />
      <img src={css} alt="css" width={50} height={50} />
      <img src={bootstrap} alt="bootstrap" width={50} height={50} />
      <img src={JS} alt="javascript" width={50} height={50} />
      <img src={react} alt="vscode" width={50} height={50} />
      <img src={python} alt="vscode" width={50} height={50} />
      <img src={flask} alt="vscode" width={50} height={50} />
      <img src={git} alt="git" width={50} height={50} />
      <img src={github} alt="github" width={50} height={50} />
    </div>
  </section>

   {/* demacation of the sections */} 
  <div id="middle_line" />
  {/* third section */}
  <section className="third-section">
    <div>
      <h1 className="project-header">My Latest Projects</h1>
    </div>
    <div className="index-card">
      <div className="each-card">
        <img src={SetterApp} width="120px" height="120px" alt="Sogo" />
        <h1>NEWSGRID WEBSITE</h1>
        <p>This is a newsgrid website which has 3 pages and various sections in the different pages built with the use of CSS Grid. It is not Responsive.</p>
        <p>Tech Stack: HTML &amp; CSS</p>
        <a href="https://github.com/sogobanwo/newsgrid" target="_blank" rel="noopener noreferrer">
          <FaGithub size="25px"/>
        </a>
        <a href="https://github.com/sogobanwo/newsgrid" target="_blank" rel="noopener noreferrer">
         <FaGlobe size="25px" />
        </a>
      </div>
      <div>
        <div className="each-card">
          <img src={TaskManager} width="120px" height="120px" alt="Sogo" />
          <h1>PORTFOLIO WEBSITE</h1>
          <p>This is a Portfoliowebsite which has only a page and various sections in this page built with the use of CSS Flex.</p>
          <p>Tech Stack: HTML &amp; CSS</p>
          <a href="https://github.com/sogobanwo/portfolio" target="_blank" rel="noopener noreferrer">
           <FaGithub size="25px"/>
          </a>
          <a href="https://sogobanwo-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            <FaGlobe size="25px"/>
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}


const HomePage = () => {
  return (
    <>
      <Header />
      <HomePageContent />
      <Footer />
    </>
  );
};

export default HomePage;
