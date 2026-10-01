import type { PizzaListErrorProps } from "../types";

const PizzaListError = ({ onRefetch }: PizzaListErrorProps) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <span>Произошла ошибка при загрузке пицц :(</span>
    <button
      style={{ marginLeft: "8px" }}
      className="button"
      onClick={onRefetch}
    >
      Попробовать снова
    </button>
  </div>
);

export default PizzaListError;
