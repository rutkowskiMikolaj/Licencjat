import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <header className="header">
      <h1 className="header__title">LangON</h1>
      <div className="header__menu">
        <nav className={`header__navbar ${isOpen ? "open" : "closed"}`}>
          <div className="header__burger-container">
            <Hamburger color="#2c3333" toggled={isOpen} toggle={setOpen} />
          </div>
          <ul className="header__nav">
            <li className="header__list-item">
              <Link
                to="/"
                className="header__list-link"
                onClick={handleLinkClick}
              >
                home
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to="/learn"
                className="header__list-link"
                onClick={handleLinkClick}
              >
                learn
              </Link>
            </li>
            <li className="header__list-item">
              <Link
                to="/collection"
                className="header__list-link"
                onClick={handleLinkClick}
              >
                collection
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
