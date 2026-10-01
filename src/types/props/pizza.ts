import type { Pizza } from "../entities";
import type { usePizzaOptions } from "../../hooks";

export type PizzaListErrorProps = { onRefetch: () => void };

export type PizzaOptionsSelectorProps = ReturnType<typeof usePizzaOptions> &
  Pick<Pizza, "sizes" | "types">;
