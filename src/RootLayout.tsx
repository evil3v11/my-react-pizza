import { Outlet } from "react-router";
import Header from "./components/Header/Header";

const RootLayout = () => (
  <div className="wrapper">
    <Header />
    <main className="content">
      <Outlet />
    </main>
  </div>
);

export default RootLayout;
