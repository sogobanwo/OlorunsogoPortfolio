import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import "../StyleSheets/HompageContent.css"
import sogo from "../PortfolioImages/Sogo Picture.jpg"

import Tailwind from "../PortfolioImages/Tailwind.png"
import TypeScript from "../PortfolioImages/TypeScript.png"
import Redux from "../PortfolioImages/Redux.png"
import Next from "../PortfolioImages/NextJs.png"
import Firebase from "../PortfolioImages/Firebase.png"

import bootstrap from "../PortfolioImages/logos_bootstrap.png"
import JS from "../PortfolioImages/javascriptpics.png"
import git from "../PortfolioImages/gitpics.png"
import react from "../PortfolioImages/Reactpics.png"
import Movix from "../PortfolioImages/movix.PNG";
import short from "../PortfolioImages/short.PNG";
import "../StyleSheets/mobile.css"

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
    <img src={JS} alt="javascript" width={50} height={50} />
    <img src={TypeScript} alt="TypeScript" width={50} height={50} />
      <img src={react} alt="ReactJs" width={50} height={50} />
      <img src={Next} alt="NextJs" width={50} height={50} />
      <img src={Redux} alt="Redux" width={50} height={50} />
      <img src={Tailwind} alt="Tailwind" width={50} height={50} />
      <img src={bootstrap} alt="bootstrap" width={50} height={50} />
      <img src={git} alt="git" width={50} height={50} />
      <img src={Firebase} alt="Firebase" width={50} height={50} />
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
            <img src={Movix} width="120px" height="120px" alt="Sogo" />
            <h1>Movix</h1>
            <p>
              A website for the displaying of a plethora of Movies. It also
              displays video trailers of popular movies and profiles of their
              main actors
            </p>
            <p>Tech Stack: ReactJs, TailwindCSS, Redux & FireBase</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/Movix"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
            <a
              rel="noreferrer"
              href="https://movix-sogobanwo.vercel.app/"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
          </div>
          <div className="each-card">
            <img src={short} width="120px" height="120px" alt="Sogo" />
            <h1>URL Shortener</h1>
            <p>
              A web app for shortening links that are long. You can easily copy
              the shortened link to clipboard and paste where evert you need it.
            </p>
            <p>Tech Stack: ReactJS & CSS</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/Task-Management-App"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
            <a
              rel="noreferrer"
              href="https://banwo-task-manager.netlify.app/"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
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
