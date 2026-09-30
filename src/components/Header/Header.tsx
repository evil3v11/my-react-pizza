import { useSelector } from "react-redux";
import { cartSelector } from "../../store/slices/cartSlice";

import { Link, useLocation } from "react-router";
import SearchBar from "./SearchBar";
import CartIcon from "../svg/CartIcon";
import logo from "../../assets/img/pizza-logo.svg";

const Header = () => {
  const { totalPrice, totalCount } = useSelector(cartSelector);
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
        <SearchBar />
        <div className="header__cart">
          {!isOnCartPage && (
            <Link to="/cart" className="button button--cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter" />
              <CartIcon />
              <span>{totalCount}</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
