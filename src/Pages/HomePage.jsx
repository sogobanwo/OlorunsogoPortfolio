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
        <h1>SETTERAPP</h1>
        <p>A social media management application which enables users to make post on different their various social media account from one platform.</p>
        <p>Tech Stack: ReactJs & CSS</p>
        <a href="https://github.com/sogobanwo/SetterApp" target="_blank" rel="noopener noreferrer">
          <FaGithub size="25px"/>
        </a>
        <a href="https://setterapp.vercel.app/" target="_blank" rel="noopener noreferrer">
         <FaGlobe size="25px" />
        </a>
      </div>
      <div>
        <div className="each-card">
          <img src={TaskManager} width="120px" height="120px" alt="Sogo" />
          <h1>TASK MANAGER</h1>
          <p>An application which helps users manage their task and be able to check their progress as when they are done they can easily check and delete the task done.</p>
          <p>Tech Stack: ReactJS & CSS</p>
          <a href="https://github.com/sogobanwo/Task-Management-App" target="_blank" rel="noopener noreferrer">
           <FaGithub size="25px"/>
          </a>
          <a href="https://banwo-task-manager.netlify.app/" target="_blank" rel="noopener noreferrer">
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
