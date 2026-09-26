import { useDispatch, useSelector } from "react-redux";
import { useClickOutside } from "../../hooks";
import { setLimit } from "../../store/slices/paginationSlice";
import { PIZZAS_PER_PAGE_OPTIONS } from "../../lib/constants";
import type { RootState } from "../../store/store";

import styles from "./PizzasPerPageSelector.module.css";

const PizzasPerPageSelector = () => {
  const { ref, isOpen, setIsOpen } = useClickOutside<HTMLSpanElement>();

  const { limit } = useSelector((state: RootState) => state.pagination);
  const dispatch = useDispatch();

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
                onClick={() => dispatch(setLimit(option))}
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
