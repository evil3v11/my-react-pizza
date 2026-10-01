import { useSearchParams } from "react-router";
import { useClickOutside } from "../../hooks";
import { PIZZAS_PER_PAGE, PIZZAS_PER_PAGE_OPTIONS } from "../../lib";

import styles from "./PizzasPerPageSelector.module.scss";

const PizzasPerPageSelector = () => {
  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLSpanElement>();

  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get("limit") || PIZZAS_PER_PAGE;

  const handleChangeLimit = (limit: number) => {
    searchParams.set("page", "1");
    searchParams.set("limit", String(limit));
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className={styles.container}>
        <span className={styles.count}>Кол-во на странице: </span>
        <span
          ref={ref}
          className={styles.limit}
          onClick={() => setIsOpen(!isOpen)}
        >
          {limit}
        </span>
        {isOpen && (
          <ul className={styles.list}>
            {PIZZAS_PER_PAGE_OPTIONS.map((option, i) => (
              <li
                key={i}
                value={option}
                className={styles.option}
                onClick={() => handleChangeLimit(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PizzasPerPageSelector;
