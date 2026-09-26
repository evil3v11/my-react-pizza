export const buildVisiblePages = (totalPages: number, currentPage: number) => {
  if (totalPages <= 5)
    return Array.from({ length: totalPages }, (_, i) => i + 1);

  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, currentPage + 2);

  if (currentPage <= 3) end = 5;
  else if (currentPage >= totalPages - 2) start = totalPages - 4;

  const pages = [];

  if (start > 1) pages.push(1);
  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  if (end < totalPages - 1) pages.push("...");
  if (end < totalPages) pages.push(totalPages);

  return pages;
};
