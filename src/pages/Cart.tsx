import { useSelector } from "react-redux";
import { useAppDispatch, cartSelector, clearCart } from "../store";

import { Trash } from "lucide-react";
import { Link } from "react-router";
import CartIcon from "../components/svg/CartIcon";
import EmptyCartState from "../components/Cart/EmptyCartState";
import CartItem from "../components/Cart/CartItem";

const Cart = () => {
  const { items, totalCount, totalPrice } = useSelector(cartSelector);
  const dispatch = useAppDispatch();

  if (!items.length) return <EmptyCartState />;

  return (
    <div className="container container-cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <CartIcon />
            Корзина
          </h2>
          <div className="cart__clear" onClick={() => dispatch(clearCart())}>
            <Trash style={{ color: "lightgray" }} />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__item">
          {items.map((item, i) => (
            <CartItem key={i} {...item} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              Всего пицц: <b>{totalCount} шт.</b>{" "}
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <span>Вернуться назад</span>
            </Link>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
