import PizzaCategories from "../components/Filters/PizzaCategories";
import Sort from "../components/Filters/Sort";
import PizzaList from "../components/PizzaList";
import PizzasPerPageSelector from "../components/Pagination/PizzasPerPageSelector";

const Home = () => (
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

export default Home;
