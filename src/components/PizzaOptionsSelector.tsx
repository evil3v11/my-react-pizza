import { memo } from "react";

import { PIZZA_TYPES } from "../lib";
import type { PizzaOptionsSelectorProps } from "../types";

const PizzaOptionsSelector = memo(
  ({
    types,
    sizes,
    activeType,
    activeSizeIdx,
    handleTypeChange,
    handleSizeIdxChange,
  }: PizzaOptionsSelectorProps) => (
    <div className="pizza-card__selector" style={{ textAlign: "center" }}>
      {/* can be exported to a reusable component */}
      <ul>
        <div
          style={{
            width: `calc(${100 / types.length}% - 2px)`,
            transform: `translateX(${activeType * 100}%)`,
          }}
        />
        {types.map((type) => (
          <li key={type} onClick={() => handleTypeChange(type)}>
            {PIZZA_TYPES[type]}
          </li>
        ))}
      </ul>
      <ul>
        <div
          style={{
            width: `calc(${100 / sizes.length}% - 2px)`,
            transform: `translateX(${activeSizeIdx * 100}%)`,
          }}
        />
        {sizes.map((size, i) => (
          <li key={size} onClick={() => handleSizeIdxChange(i)}>
            {size} см
          </li>
        ))}
      </ul>
    </div>
  ),
);

export default PizzaOptionsSelector;
