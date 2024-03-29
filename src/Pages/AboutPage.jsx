import React from "react";
import Footer from "../Components/Footer";
import { Header } from "../Components/Header";
import "../StyleSheets/AboutPageContent.css"
import outstanding from "../PortfolioImages/BanwoOutstanding.png"
import volunteer from "../PortfolioImages/BanwoVolunteering.png"
import junior from "../PortfolioImages/BanwoJuniorCertificate.png"
import alx from "../PortfolioImages/UdacityCertificate.PNG"
import spotlight from "../PortfolioImages/BanwoSpotlight.PNG"
import "../StyleSheets/mobile.css"

export const AboutPageContent = () => {
  return (
    <div>
      <section id="about-me-section">
        <div className="about-me">
          <h1>About Me</h1>
          <p>
            Banwo Olorunsogo is a highly resourceful and intelligent Software
            Developer seeking to develop professional competence in the Software
            Engineering field by solving real life problems with his skills.
          </p>
        </div>
        <div id="work-experience">
          <h1> Work Experience</h1>
          <div>
            <div className="work-experience-top">
              <p>Frontend Developer</p>
              <p className="type">Junior Developer</p>
            </div>
            <div className="work-experience-bottom">
              <p>Voluntrr Services, Birmingham, UK</p>
              <p>May 2023 - Present</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Mechanical Engineer</p>
              <p className="type">Trainee</p>
            </div>
            <div className="work-experience-bottom">
              <p>First Metro Infrastructure Limited. Lagos, Nigeria.</p>
              <p>March 2023 - Present</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Frontend Developer</p>
              <p className="type">Junior Developer</p>
            </div>
            <div className="work-experience-bottom">
              <p>Rashotech Web Services, Oyo, Nigeria</p>
              <p>Aug 2022 - Present</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Frontend Developer</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>Rashotech Web Services, Oyo, Nigeria</p>
              <p>Sept 2021 - Aug, 2022</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Frontend Developer</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>TIIDELab, Abuja, Nigeria</p>
              <p>June - December, 2022</p>
            </div>
            <div className="mid-line" />
          </div>
          <div>
            <div className="work-experience-top">
              <p>Systems Integrator</p>
              <p className="type">Internship</p>
            </div>
            <div className="work-experience-bottom">
              <p>21st Century Evolutions Systems, Lagos, Nigeria </p>
              <p>Feb - Aug, 2021</p>
            </div>
            <div className="mid-line" />
          </div>
        </div>
        <div>
          <div id="work-experience" className="education">
            <h1>Education</h1>
            <div>
              <div className="work-experience-top">
                <p>Bsc. Mechancal Engineering </p>
                <p className="type">Full Time</p>
              </div>
              <div className="work-experience-bottom">
                <p>Lagos State University</p>
                <p>November 2016 - June 2022</p>
              </div>
            </div>
            <div>
              <div className="work-experience-top">
                <p>NanoDegree, FullStack Development</p>
                <p className="type">Full Time</p>
              </div>
              <div className="work-experience-bottom">
                <p>UDACITY</p>
                <p>May - September 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mid-line" />
      <h1 id="sogo">Certifications & Awards</h1>
      <section>
        <div className="grid-wrapper">
          <div>
            <img className="img-1" src={outstanding} alt="" />
          </div>
          <div>
            <img
              className="img-2"
              src={alx}
              alt=""
            />
          </div>
          <div className="tall">
            <img src={junior} alt="" />
          </div>
          <div className="wide">
            <img src={volunteer} alt="" />
          </div>
          <div className="wide">
            <img src={spotlight} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutPageContent />
      <Footer />
    </>
  );
};

export default AboutPage;
