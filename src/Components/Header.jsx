import React from "react";
import "../StyleSheets/Header.css"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom";


export const Header = () =>{
  return (
    <header>
  <div className="header-2">
    <div>
      <h1 className="my_logo">Sogobanwo</h1>
    </div>
    <div id="navbar">
      <div id="header_link">
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Projects"}>Projects</Link>
        <Link to={"/Contact"}>Contact</Link>

      </div>
      <div id="header_icon">
        <a href="https://twitter.com/OlorunsogoBanwo" target="_blank" rel="noreferrer noopener">
          <FaTwitter size="20px" />
        </a>
        <a href="https://github.com/sogobanwo/" target="_blank" rel="noreferrer noopener">
           <FaGithub size="20px" />
        </a>
        <a href="https://www.linkedin.com/in/olorunsogo-banwo/" target="_blank" rel="noreferrer noopener">
          <FaLinkedinIn size="20px" />
        </a>
      </div>
    </div>
  </div>
  <div id="middle_line"></div>
</header>


  )
}