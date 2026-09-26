import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { setSearch, clearSearch } from "../../store/slices/searchSlice";
import { setCurrentPage } from "../../store/slices/paginationSlice";

import type { RootState } from "../../store/store";

import styles from "./SearchBar.module.css";
import { Search, X } from "lucide-react";

const SearchBar = () => {
  const search = useSelector((state: RootState) => state.search.value);
  const [localSearch, setLocalSearch] = useState(search);
  const dispatch = useDispatch();

  const debouncedSearch = useDebounce((search) => {
    dispatch(setSearch(search));
    dispatch(setCurrentPage(1));
  }, 400);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleClearSearch = () => {
    setLocalSearch("");
    dispatch(clearSearch());
  };

  return (
    <div className={styles.container}>
      <Search width={16} height={16} className={styles.icon} />
      <input
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
