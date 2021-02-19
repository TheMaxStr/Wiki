import React from "react";
import { connect } from "react-redux";
import { showModalWikiPreview, delSearchItem } from "../../redux/actions";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import LaunchIcon from "@material-ui/icons/Launch";
import DeleteIcon from "@material-ui/icons/Delete";
import Moment from "moment";

const Row = ({ data, showModalWikiPreview, delSearchItem }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <a href={data.link}>{data.title}</a>
      </TableCell>
      <TableCell style={{ width: 110 }} align="right">
        {Moment(data.timestamp).format("D.M.YYYY")}
      </TableCell>
      <TableCell
        style={{ width: 610 }}
        align="right"
        dangerouslySetInnerHTML={{ __html: data.snippet }}
      ></TableCell>
      <TableCell style={{ width: 610 }} align="right">
        <IconButton
          color="primary"
          aria-label="show wiki page"
          onClick={() => showModalWikiPreview(data.pageid)}
        >
          <LaunchIcon />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="del wiki page"
          onClick={() => delSearchItem(data.pageid)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const mapDispathToProps = {
  showModalWikiPreview,
  delSearchItem
};

export default connect(null, mapDispathToProps)(Row);
