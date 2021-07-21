import React from "react";
import NavBar from "../NavBar/NavBar";
import "../css/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="wrapperTitle">
        <p>Envios a todo México</p>
      </div>
      <div className="wrapperNav">
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
