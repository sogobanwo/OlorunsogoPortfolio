import React from 'react'
import { Link } from 'react-router-dom'
import "../StyleSheets/Footer.css"
import "../StyleSheets/mobile.css"

const Footer = () => {
  return (
    <footer>
    <div id="middle_line1"></div>
    <div>
      <div id="footer_bottom">
        <div id="footer_link">
          <Link to={"/"} id="footer_left">Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Projects"}>Projects</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
        <div>
          <p id="copyright">Portfolio | Banwo Olorunsogo © 2022, All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer