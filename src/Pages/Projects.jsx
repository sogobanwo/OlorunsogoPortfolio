import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import "../StyleSheets/ProjectsContent.css";
import "../StyleSheets/mobile.css";
import goal from "../PortfolioImages/goal.PNG"
import Movix from "../PortfolioImages/movix.PNG";
import short from "../PortfolioImages/short.PNG";
import SetterApp from "../PortfolioImages/SetterAppPics.png";
import task from "../PortfolioImages/TaskManager.png";
import bloom from "../PortfolioImages/ProjectBloomart.png";
import fyyur from "../PortfolioImages/FyyurApp.jpg";
import trivia from "../PortfolioImages/TriviaApi.png";
import coffee from "../PortfolioImages/CoffeeShop.png";

export const ProjectsContent = () => {
  return (
    <section id="projects">
      <div className="above-cards">
        <h1>Projects</h1>
        <p>Some of the projects i have worked on.</p>
      </div>
      <div className="card">
        <div className="each-card-wrapper">
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
          <div className="each-card">
            <img src={goal} width="120px" height="120px" alt="Sogo" />
            <h1>Goal SetterApp</h1>
            <p>
              This is a MERN stack app used to set goals with a fully functional
              CRUD operation. Authentication done specific to each User.
            </p>
            <p>Tech Stack: MongoDB, ExpressJs, ReactJs, Redux & NodeJs</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/GoalSetter-App"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
          </div>
        </div>
        <div className="each-card-wrapper">
          <div className="each-card">
            <img src={SetterApp} width="120px" height="120px" alt="Sogo" />
            <h1>SETTERAPP</h1>
            <p>
              A social media management application which enables users to make
              post on different their various social media account from one
              platform.
            </p>
            <p>Tech Stack: ReactJs & CSS</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/SetterApp"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
            <a
              rel="noreferrer"
              href="https://setterapp.vercel.app/"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
          </div>
          <div className="each-card">
            <img src={task} width="120px" height="120px" alt="Sogo" />
            <h1>TASK MANAGER</h1>
            <p>
              An application which helps users manage their task and be able to
              check their progress as when they are done they can easily check
              and delete the task done.
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
          <div className="each-card">
            <img src={bloom} width="120px" height="120px" alt="Sogo" />
            <h1>PROJECT BLOOMART</h1>
            <p>
              Project Bloomart is an e-commerce website developed by TIIDELab
              pre-fellow where you can buy and sell tangible goods, digital
              products or services online.
            </p>
            <p>Tech Stack: HTML,CSS & JavaScript</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/PROJECT-BLOOMART"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
            <a
              rel="noreferrer"
              href="https://bloomartproject.netlify.app/"
              target="_blank"
            >
              <FaGlobe size="25px" />
            </a>
          </div>
        </div>
        <div className="each-card-wrapper">
          <div className="each-card">
            <img src={fyyur} width="120px" height="120px" alt="Sogo" />
            <h1>FYYUR</h1>
            <p>
              Fyyur is a musical venue and artist booking site that facilitates
              the discovery and bookings of shows between local performing
              artists and venues. This site lets you list new artists and
              venues, discover them, and list shows with artists as a venue
              owner.
            </p>
            <p>Tech Stack: HTML, CSS, Python & JavaScript</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/fyurr"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
          </div>
          <div className="each-card">
            <img src={trivia} width="120px" height="120px" alt="Sogo" />
            <h1>TRIVIA APP</h1>
            <p>
              This Trivia App is invested in creating bonding experiences for
              employees and students. This can be used to hold trivia on a
              regular basis and play the game so they can start holding trivia
              and seeing who's the most knowledgeable of the bunch.
            </p>
            <p>Tech Stack: ReactJS, CSS & Python</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/TriviaApi"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
          </div>
          <div className="each-card">
            <img src={coffee} width="120px" height="120px" alt="Kontrako" />
            <h1>COFFEE SHOP</h1>
            <p>
              Coffee shop is a new digitally enabled cafe for students to order
              drinks, socialize, and study hard. It display graphics
              representing the ratios of ingredients in each drink, allow public
              users to view drink names and graphics, allow the shop baristas to
              see the recipe information and allow the shop managers to create
              new drinks and edit existing drinks
            </p>
            <p>Tech Stack: CSS, JavaScript, Python</p>
            <a
              rel="noreferrer"
              href="https://github.com/sogobanwo/Coffee-Shop"
              target="_blank"
            >
              <FaGithub size="25px" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

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
