import { useEffect, useRef } from "react";

export const useDebounce = <F extends (...args: unknown[]) => void>(
  fn: F,
  ms: number,
) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (...args: Parameters<F>) => {
    if (timeoutRef.current) timeoutRef.current = undefined;
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => fn(...args), ms);
  };
};
