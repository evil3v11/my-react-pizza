import { useState } from "react";

import { PIZZA_TYPES } from "../lib/constants";
import type { Pizza } from "../types";

import PlusIcon from "./svg/PlusIcon";

const PizzaCard = ({
  title,
  price,
  types,
  sizes,
  imageUrl,
  // category,
  // rating,
}: Pizza) => {
  const [activeTypeIdx, setActiveTypeIdx] = useState(0);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  return (
    <div className="pizza-card">
      <img className="pizza-card__image" src={imageUrl} alt={title} />
      <h4 className="pizza-card__title">{title}</h4>
      <div className="pizza-card__selector">
        <ul>
          {types.map((typeIdx) => (
            <li
              key={typeIdx}
              onClick={() => setActiveTypeIdx(typeIdx)}
              className={activeTypeIdx === typeIdx ? "active" : ""}
            >
              {PIZZA_TYPES[typeIdx]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li
              key={size}
              onClick={() => setActiveSize(size)}
              className={activeSize === size ? "active" : ""}
            >
              {size} см
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-card__bottom">
        <div className="pizza-card__price">от {price} ₽</div>
        <button className="button button--outline button--add">
          <PlusIcon />
          <span>
            Добавить
            <i>0</i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
