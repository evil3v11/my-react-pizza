import { Link } from "react-router";

import logo from "../../assets/img/pizza-logo.svg";
import CartIcon from "../svg/CartIcon";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link className="header__logo" to="/">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <SearchBar />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>520 ₽</span>
            <div className="button__delimiter" />
            <CartIcon />
            <span>3</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
