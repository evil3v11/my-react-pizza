import { FaceSlightlyFrowning } from "lucide-react";
import { useSearchParams } from "react-router";

const PizzaListEmpty = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <>
      <FaceSlightlyFrowning color="#ffffff" height={40} width={40} />
      {search ? (
        <h1>По запросу "{search}" пицц не найдено :(</h1>
      ) : (
        <h1>Таких пицц не найдено :(</h1>
      )}
    </>
  );
};

export default PizzaListEmpty;
