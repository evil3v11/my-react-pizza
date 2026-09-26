import { useDispatch, useSelector } from "react-redux";
import { PIZZA_CATEGORIES } from "../lib/constants/pizzas";
import { setCategoryId } from "../store/slices/filterSlice";
import type { RootState } from "../store/store";
import { setCurrentPage } from "../store/slices/paginationSlice";

const PizzaCategories = () => {
  const { categoryId } = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleCategoryChange = (id: number) => {
    dispatch(setCategoryId(id));
    dispatch(setCurrentPage(1));
  };

  return (
    <div className="categories">
      <ul>
        {PIZZA_CATEGORIES.map((categoryName, i) => (
          <li
            key={categoryName}
            onClick={() => handleCategoryChange(i)}
            className={categoryId === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaCategories;
