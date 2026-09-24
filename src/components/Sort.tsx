import { useState } from "react";
import { useClickOutside } from "../hooks";
import { PIZZA_SORT_BY_OPTIONS } from "../lib/constants";

import ArrowIcon from "./svg/ArrowIcon";

const Sort = () => {
  const [sortBy, setSortBy] = useState(PIZZA_SORT_BY_OPTIONS[0]);

  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLDivElement>();

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowIcon />
        <b>Сортировка по:</b>
        <span ref={ref} onClick={() => setIsOpen(!isOpen)}>
          {sortBy}
        </span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {PIZZA_SORT_BY_OPTIONS.map((sortByOption, i) => (
              <li
                key={i}
                onClick={() => setSortBy(sortByOption)} // closes select by default because of ref
                className={sortBy === sortByOption ? "active" : ""}
              >
                {sortByOption}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
