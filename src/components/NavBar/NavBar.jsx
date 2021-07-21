import React from "react";
import LogoBlanco from "../../assets/img/logo_blanco.png";
const NavBar = () => {
  return (
    <nav className="Nav">
      <div className="wrapperLogo">
        <img src={LogoBlanco} alt="logo" className="logo" />
      </div>
      <ul className="wrapperItems">
        <li>Obras</li>
        <li>artistas</li>
      </ul>
      <div className="wrapperIcons">
        <p>icons</p>
      </div>
    </nav>
  );
};

export default NavBar;
