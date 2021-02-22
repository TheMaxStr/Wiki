import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useDebounce from "../hooks/useDebounce";
import { fetchListEvent } from "../redux/actions";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ChoseLangBtn from "../components/ChoseLangBtn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "space-between"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    flexBasis: "25%"
  },
  search: {
    flexBasis: "50%",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: theme.spacing(5),
    width: "100%"
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width")
  }
}));

const SearchAppBar = ({ currentPage, rowsPerPage, lang, fetchListEvent }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 800);

  const handlerChangeSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    fetchListEvent(debouncedSearchQuery);
  }, [fetchListEvent, debouncedSearchQuery, currentPage, rowsPerPage, lang]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            ReactWiki by TheMaxStr
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Поиск…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handlerChangeSearch}
            />
          </div>
          <ChoseLangBtn />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentPage: state.search.currentPage,
    rowsPerPage: state.search.rowsPerPage,
    lang: state.app.lang
  };
};

const mapDispatchToProps = {
  fetchListEvent
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchAppBar);
