import { memo } from "react";
import { PlusIcon } from "lucide-react";
import type { AddToCartButtonProps } from "../../types";

const AddToCartButton = memo(
  ({ quantity, onAddItemToCart }: AddToCartButtonProps) => (
    <button
      className="button button--outline button--add"
      onClick={onAddItemToCart}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlusIcon />
      <span>
        Добавить
        {quantity > 0 && <i>{quantity}</i>}
      </span>
    </button>
  ),
);
export default AddToCartButton;
