import { Pagination } from "@material-ui/lab";
import React from "react";

const PaginationBar = ({ pageNum, setPageNum, totalPageNum, loading }) => {
  const handleClickOnPage = (event, page) => {
    if (!loading) {
      setPageNum(page);
    }
  };
  return (
    <Pagination
      style={{ margin: "20px", display: "flex", justifyContent: "center" }}
      showFirstButton
      showLastButton
      size={"large"}
      count={totalPageNum}
      variant="outlined"
      color="secondary"
      onChange={handleClickOnPage}
      page={pageNum}
    />
  );
};

export default PaginationBar;
