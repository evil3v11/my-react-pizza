import { useRef, useState } from "react";
import { useSearchParams } from "react-router";
import { useDebounce } from "../../hooks";

import styles from "./SearchBar.module.scss";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [localSearch, setLocalSearch] = useState(search);

  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedSearch = useDebounce((search) => {
    searchParams.set("search", String(search));
    setSearchParams(searchParams);
    setLocalSearch(String(search));
  }, 300);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setLocalSearch("");
    searchParams.delete("search");
    setSearchParams(searchParams);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className={styles.container}>
      <Search width={16} height={16} className={styles.icon} />
      <input
        ref={inputRef}
        value={localSearch}
        onChange={handleSearchChange}
        className={styles.input}
        placeholder="Пепперони"
      />
      {localSearch && (
        <X
          width={16}
          height={16}
          className={styles.clearInput}
          onClick={handleClearSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
