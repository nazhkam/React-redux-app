import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../components";
import pizzaLogo from "../assets/img/pizza-logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Link to='/cart' ><Button /></Link>
      </div>
    </div>
  );
}

export default Header;
