import { PIZZA_TYPES } from "../lib/constants";

type PizzaOptionsSelectorProps = {
  types: number[];
  sizes: number[];
  activeType: number;
  activeSizeIdx: number;
  onTypeChange: (type: number) => void;
  onSizeIdxChange: (sizeIdx: number) => void;
};

const PizzaOptionsSelector = ({
  types,
  sizes,
  activeType,
  activeSizeIdx,
  onTypeChange,
  onSizeIdxChange,
}: PizzaOptionsSelectorProps) => {
  return (
    <div className="pizza-card__selector" style={{ textAlign: "center" }}>
      <ul>
        <div
          style={{
            width: `calc(${100 / types.length}% - 2px)`,
            transform: `translateX(${activeType * 100}%)`,
          }}
        />
        {types.map((type) => (
          <li key={type} onClick={() => onTypeChange(type)}>
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
          <li key={size} onClick={() => onSizeIdxChange(i)}>
            {size} см
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaOptionsSelector;
