import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Page from "./Page";
import Row from "./Row";
import WikiModal from "../WikiModal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
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

// const mapStateToProps = (state) => {
//   return {
//     rows: state.search.list || [],
//     counts: state.search.count || 0
//   };
// };

// export default connect(mapStateToProps)(TableList);

export default () => {
  const rows = useSelector((state) => state.search.list);
  const counts = useSelector((state) => state.search.counts);
  const loading = useSelector((state) => state.search.loading);

  return loading ? (
    <LinearProgress />
  ) : (
    <TableList rows={rows} counts={counts} />
  );
};
