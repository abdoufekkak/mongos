import React, { useState } from "react";
import "./style_navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="header-left">
        <div className="logo">
          <img src="./logo.png" alt="" />
        </div>
        <nav className={isActive ? "active" : ""}>
          <ul>
            <li>
              <Link to="G_PROF" className="active">
                G_PROF
              </Link>
            </li>
            <li>
              <Link to="G_Admin" className="active">
                G_ADMIN
              </Link>
            </li>
            <li>
              <Link to="G_CLASSE" className="active">
                G_CLASSE
              </Link>
            </li>
            <li>
              <Link to="G_PLANING" className="active">
                G_PLANING
              </Link>
            </li>
          </ul>
          <div className="login-signup">
            <a href="">LogO</a>
          </div>
        </nav>
      </div>
      <div className="header-right">
        <div className="login-signup">
          <Link to="/LOGIN" className="active">
            logout
          </Link>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
