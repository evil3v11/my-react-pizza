import PizzaCategories from "../components/PizzaCategories";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";
import PizzasPerPageSelector from "../components/Pagination/PizzasPerPageSelector";

const Home = () => {
  return (
    <div className="container">
      <div className="content__top">
        <PizzaCategories />
        <Sort />
      </div>
      <div className="content__header">
        <h2 className="content__title">Все пиццы</h2>
        <PizzasPerPageSelector />
      </div>
      <PizzaList />
    </div>
  );
};

export default Home;
