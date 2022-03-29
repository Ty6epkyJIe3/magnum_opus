import React, { FC } from "react";
import { PaginationStyled, PageButtonStyled } from "./Pagination.styles";

interface PaginationProps {
  changePage: (amount: number) => void;
  page: number;
  total_pages: number;
}

export const Pagination: FC<PaginationProps> = ({
  changePage,
  page,
  total_pages,
}) => {
  const handleChangePage = (chosen_page: number) => changePage(chosen_page);

  function arrayOfPages(p: number, t: number): number[] {
    let arr: number[] = [];
    if (t > 6) {
      if (p <= 3) {
        arr = [1, 2, 3, 4, 5, t];
      } else if (p >= t - 2) {
        arr = [1, t - 4, t - 3, t - 2, t - 1, t];
      } else {
        arr = [1, p - 2, p - 1, p, p + 1, p + 2, t];
      }
    } else {
      for (let i = 1; i <= t; i++) {
        arr.push(i);
      }
    }
    return arr;
  }

  const pages_arr = arrayOfPages(page, total_pages);

  return (
    <PaginationStyled>
      {pages_arr.map((p) => (
        <PageButtonStyled
          className={p === page ? "active" : ""}
          key={p}
          onClick={() => handleChangePage(p)}
        >
          {p}
        </PageButtonStyled>
      ))}
    </PaginationStyled>
  );
};
