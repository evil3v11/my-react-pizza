import { useSearchParams } from "react-router";
import { PIZZA_CATEGORIES } from "../../lib/constants/pizzas";

const PizzaCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryId = Number(searchParams.get("category")) || 0;

  const handleCategoryChange = (id: number) => {
    searchParams.set("category", String(id));
    setSearchParams(searchParams);
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
