import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../store/slices/paginationSlice";

import { buildVisiblePages } from "../../lib/helpers";
import { TOTAL_PAGES } from "../../lib/constants";

import type { RootState } from "../../store/store";

import styles from "./Pagination.module.css";
import {
  ArrowBigLeftDash,
  ArrowLeft,
  ArrowRight,
  ArrowBigRightDash,
} from "lucide-react";

const Pagination = () => {
  const { currentPage } = useSelector((state: RootState) => state.pagination);
  const dispatch = useDispatch();

  const visiblePages = buildVisiblePages(TOTAL_PAGES, currentPage);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.icon}
        disabled={currentPage === 1}
        onClick={() => dispatch(setCurrentPage(1))}
      >
        <ArrowBigLeftDash height={20} width={20} />
      </button>
      <button
        className={styles.icon}
        disabled={currentPage === 1}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
      >
        <ArrowLeft height={20} width={20} />
      </button>
      <>
        {visiblePages.map((page, i) => {
          if (page === "...") return <span className={styles.span}>...</span>;
          const isActive = page === currentPage;

          return (
            <button
            key={i}
            className={isActive ? styles.active : styles.button}
              onClick={() => dispatch(setCurrentPage(page))}
            >
              {page}
            </button>
          );
        })}
      </>
      <button
        className={styles.icon}
        disabled={currentPage === TOTAL_PAGES}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
      >
        <ArrowRight height={20} width={20} />
      </button>
      <button
        className={styles.icon}
        disabled={currentPage === TOTAL_PAGES}
        onClick={() => dispatch(setCurrentPage(TOTAL_PAGES))}
      >
        <ArrowBigRightDash height={20} width={20} />
      </button>
    </div>
  );
};

export default Pagination;
