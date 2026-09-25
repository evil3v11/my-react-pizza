import PizzaCategories from "../components/PizzaCategories";
import Sort from "../components/Sort";
import PizzaList from "../components/PizzaList";

const Home = () => {
  return (
    <div className="container">
      <div className="content__top">
        <PizzaCategories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <PizzaList />
    </div>
  );
};

export default Home;
