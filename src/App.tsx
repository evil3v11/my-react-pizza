import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

import "./scss/app.scss";

import RootLayout from "./RootLayout";
import Home from "./pages/Home";

const Cart = lazy(() => import("./pages/Cart"));
const PizzaPage = lazy(() => import("./pages/PizzaPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <Routes>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route
        path="cart"
        element={
          <Suspense fallback={<div>Загрузка корзины...</div>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="pizza/:pizzaId"
        element={
          <Suspense fallback={<div>Загрузка страницы питсы...</div>}>
            <PizzaPage />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Загрузка страницы 404...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  </Routes>
);

export default App;
