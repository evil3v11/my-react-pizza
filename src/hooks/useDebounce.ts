import { useCallback, useEffect, useRef } from "react";

export const useDebounce = <F extends (...args: unknown[]) => void>(
  fn: F,
  ms: number,
) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return useCallback((...args: Parameters<F>) => {
    clearTimeout(timeoutRef.current)
    if (timeoutRef.current) timeoutRef.current = undefined;
    timeoutRef.current = setTimeout(() => fn(...args), ms);
  }, [fn, ms]);
};