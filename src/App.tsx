import "./scss/app.scss";

import { MOCK_PIZZAS } from "./lib/constants/pizzas";

import Header from "./components/Header";
import PizzaCategories from "./components/PizzaCategories";
import Sort from "./components/Sort";
import PizzaCard from "./components/PizzaCard";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <PizzaCategories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {MOCK_PIZZAS.map((pizza) => (
              <PizzaCard key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
