import { useState } from "react";

import { PIZZA_CATEGORIES } from "../lib/constants/pizzas";

const PizzaCategories = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="categories">
      <ul>
        {PIZZA_CATEGORIES.map((category, i) => (
          <li
            key={category}
            onClick={() => setActiveIdx(i)}
            className={activeIdx === i ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaCategories;
