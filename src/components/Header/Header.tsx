import { useSelector } from "react-redux";
import { useLocalStorage } from "../../hooks";
import { cartSelector } from "../../store";

import type { Cart } from "../../types";

import { Link, useLocation } from "react-router";
import SearchBar from "./SearchBar";
import CartIcon from "../svg/CartIcon";
import logo from "../../assets/img/pizza-logo.svg";

const Header = () => {
  const cart = useSelector(cartSelector);
  useLocalStorage<Cart>("cart", cart);

  const pathname = useLocation().pathname;
  const isOnCartPage = pathname === "/cart";

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
        {!isOnCartPage && <SearchBar />}
        <div className="header__cart">
          {!isOnCartPage && (
            <Link to="/cart" className="button button--cart">
              <span>{cart.totalPrice} ₽</span>
              <div className="button__delimiter" />
              <CartIcon />
              <span>{cart.totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
