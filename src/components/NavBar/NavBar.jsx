import React, { useState } from "react";
import Hamburger from "hamburger-react";
import LogoBlanco from "../../assets/img/logo_blanco.png";
import search from "../../assets/img/search.png";
import user from "../../assets/img/user.png";
import like from "../../assets/img/like.png";
import cart from "../../assets/img/cart_shop.png";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="Nav">
      <div className="wrapperLogo">
        <img src={LogoBlanco} alt="logo" className="logo" />
      </div>
      <div className="wrapperHamburgerMenu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <div className="wrapperMenu">
          <ul className="wrapperItems">
            <li>Obras</li>
            <li>artistas</li>
          </ul>
          <div className="wrapperIcons">
            <div className="icons">
              <img src={search} className="" alt="search" />
            </div>
            <div className="icons">
              <img src={user} className="" alt="user" />
            </div>
            <div className="icons">
              <img src={like} className="" alt="like" />
              <p className="noItems">2</p>
            </div>
            <div className="icons">
              <img src={cart} className="" alt="cart-shop" />
              <p className="noCart">2</p>
            </div>
          </div>
        </div>
      )}
      <div className="wrapperMenu">
        <ul className="wrapperItems">
          <li>Obras</li>
          <li>artistas</li>
        </ul>
        <div className="wrapperIcons">
          <div className="icons">
            <img src={search} className="" alt="search" />
          </div>
          <div className="icons">
            <img src={user} className="" alt="user" />
          </div>
          <div className="icons">
            <img src={like} className="" alt="like" />
            <p className="noItems">2</p>
          </div>
          <div className="icons">
            <img src={cart} className="" alt="cart-shop" />
            <p className="noCart">2</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
