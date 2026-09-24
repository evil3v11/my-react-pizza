import logo from "../assets/img/pizza-logo.svg";

import CartIcon from "./svg/CartIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <a href="/cart.html" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter"></div>
            <CartIcon />
            <span>3</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
