import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function MobileNavbar({ isHamburgerOpen, close }) {

  return (
    <div className={isHamburgerOpen ? "mb-nav-container slide-down" : "mb-nav-container slide-up"}>
      <ul className="mobile-navbar">
      <Link to="/">
        <li onClick={() => close(false)} className="mobile-navbar__link">
          Country data
        </li>
    </Link>
    <Link to="/allcountries">
        <li onClick={() => close(false)} className="mobile-navbar__link">
          All countries
        </li>
        </Link>
    <Link to="/news" >
        <li onClick={() => close(false)} className="mobile-navbar__link">
          Latest news
        </li>
        </Link>
      </ul>
    </div>
  );
}

export default MobileNavbar;
