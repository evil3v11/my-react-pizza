import { useEffect, useRef, useState } from "react";

/** 
  Clicking outside ref'ed elements will remove them from the view. 
  Useful with modals, dropdowns, selects, etc.
**/
export const useClickOutside = <T extends HTMLElement>() => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return { ref, isOpen, setIsOpen };
};
