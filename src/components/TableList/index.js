import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Page from "./Page";
import Row from "./Row";
import WikiModal from "../WikiModal";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const TableList = ({ rows, counts }) => {
  const classes = useStyles();

  return (
    <>
      <WikiModal />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableBody>
            {rows.map((row) => (
              <Row key={row.pageid} data={row} />
            ))}

            {rows.length === 0 && (
              <TableRow style={{ height: 55 }}>
                <TableCell colSpan={6}>Нет результата поиска</TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <Page />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rows: state.search.list,
    counts: state.search.count
  };
};

export default connect(mapStateToProps)(TableList);
