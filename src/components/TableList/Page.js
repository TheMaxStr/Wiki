import React from "react";
import { connect } from "react-redux";
import { setCurrentPage, setRowsPerPage } from "../../redux/actions";
import TablePagination from "@material-ui/core/TablePagination";
import PageAction from "./PageAction";

const Page = ({
  count,
  rowsPerPage,
  currentPage,
  setCurrentPage,
  setRowsPerPage
}) => {
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, { label: "Все", value: count }]}
      colSpan={3}
      count={count}
      rowsPerPage={rowsPerPage}
      page={currentPage}
      labelRowsPerPage="Кол-во на страницу:"
      SelectProps={{
        inputProps: { "aria-label": "кол-во на страницу" },
        native: true
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      ActionsComponent={PageAction}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.search.count || 0,
    rowsPerPage: state.search.rowsPerPage,
    currentPage: state.search.currentPage
  };
};

const mapDispatchToProps = {
  setCurrentPage,
  setRowsPerPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
