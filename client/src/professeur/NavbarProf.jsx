import React, { useState } from "react";

import { Link } from "react-router-dom";
const NavbarProf = () => {
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
          <Link to="user/PLANING" className="active">
            PLANING
          </Link>
        </li>
            <li>
              <Link to="user/L_Module" className="active">
              L_Etudiant
              </Link>
            </li>
            <li>
              <Link to="user/A_Etudiant" className="active">

                Affiche_Etudiant
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

export default NavbarProf;
