import { useSearchParams } from "react-router";

import { buildVisiblePages } from "../../lib/helpers";
import { TOTAL_PAGES } from "../../lib/constants";

import styles from "./Pagination.module.css";
import {
  ArrowBigLeftDash,
  ArrowLeft,
  ArrowRight,
  ArrowBigRightDash,
} from "lucide-react";

const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (page: number | string) => {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  };

  const visiblePages = buildVisiblePages(TOTAL_PAGES, currentPage);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.icon}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
      >
        <ArrowBigLeftDash height={20} width={20} />
      </button>
      <button
        className={styles.icon}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ArrowLeft height={20} width={20} />
      </button>
      {visiblePages.map((page, i) => {
        if (page === "...")
          return (
            <span key={i} className={styles.span}>
              ...
            </span>
          );
          
        const isActive = page === currentPage;

        return (
          <button
            key={page}
            className={isActive ? styles.active : styles.button}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}
      <button
        className={styles.icon}
        disabled={currentPage === TOTAL_PAGES}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ArrowRight height={20} width={20} />
      </button>
      <button
        className={styles.icon}
        disabled={currentPage === TOTAL_PAGES}
        onClick={() => handlePageChange(TOTAL_PAGES)}
      >
        <ArrowBigRightDash height={20} width={20} />
      </button>
    </div>
  );
};

export default Pagination;
