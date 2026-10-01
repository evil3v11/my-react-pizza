import { useEffect, useRef } from "react";

export const useLocalStorage = <T extends Record<string, unknown>>(
  key: string,
  items: T,
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const itemToLS = JSON.stringify(items);
      localStorage.setItem(key, itemToLS);
    }

    isMounted.current = true;
  }, [key, items]);
};
