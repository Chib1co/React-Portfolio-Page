import React, {useRef, useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import "bootstrap/js/src/collapse.js";

function Navbar() {

  // const navBar = document.querySelector('.navbar');

  const navBar = useRef(null);


  useEffect(() => {

    window.addEventListener('scroll', function (event) {
      // when we scroll, turn nav bar bg color to white
  
      const scrolledY = window.pageYOffset;
      // const [scrolledY, setscrolledY] = useState(0)
  
      if (scrolledY > 0) {
        navBar.current.classList.add('bg-white');
        navBar.current.classList.remove('bg-transparent');
  
  
      } else {
        navBar.current.classList.remove('bg-white');
        navBar.current.classList.add('bg-transparent');
      }
  
    })
  }, []);

  const location = useLocation();

  const includePositionFixed = location.pathname === '/' ? 'position-fixed': '';

  return (
    <nav ref={navBar}  className={"navbar " + includePositionFixed + " bg-transparent navbar-expand-lg navbar-light"}>
      <div className="navbar-text">Tomomi Inoue</div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav" id="menu">
          <li className="nav-item">
            <Link to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "Aboutme"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home/About me
                   </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
                   </Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link active" href="contact.html">Contact<span class="sr-only">(current)</span></a> */}
            <Link to="/contactme"
              className={
                window.location.pathname === "/contactme"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact me
                   </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;