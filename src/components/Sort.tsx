import { useSearchParams } from "react-router";
import { useClickOutside } from "../hooks";
import { PIZZA_SORT_BY_OPTIONS } from "../lib/constants";

import ArrowIcon from "./svg/ArrowIcon";
import type { SortOption } from "../types";

const Sort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");

  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLDivElement>();

  const sortIdx = PIZZA_SORT_BY_OPTIONS.findIndex((s) => s.value === sortBy);

  const handleSortChange = (sortBy: SortOption) => {
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowIcon />
        <b>Сортировка по:</b>
        <span ref={ref} onClick={() => setIsOpen(!isOpen)}>
          {sortIdx !== -1
            ? PIZZA_SORT_BY_OPTIONS[sortIdx].name
            : "популярности"}
        </span>
      </div>
      {isOpen && (
        <div style={{ zIndex: "200" }} className="sort__popup">
          <ul>
            {PIZZA_SORT_BY_OPTIONS.map(({ name, value }, i) => (
              <li
                key={i}
                onClick={() => handleSortChange(value)} // closes select by default because of ref
                className={sortIdx === i ? "active" : ""}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
