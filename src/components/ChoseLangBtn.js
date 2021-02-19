import React from "react";
import { connect } from "react-redux";
import { switchLang } from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 40
  },
  select: {
    color: "#fff",
    "&:before": {
      borderColor: "#fff"
    },
    "&:after": {
      borderColor: "#fff"
    }
  },
  icon: {
    fill: "#fff"
  }
}));

const ChoseLangBtn = ({ switchLang, lang }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    switchLang(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={lang}
        onChange={handleChange}
        className={classes.select}
        inputProps={{
          classes: {
            icon: classes.icon
          }
        }}
      >
        <MenuItem value="ru">ru</MenuItem>
        <MenuItem value="en">en</MenuItem>
      </Select>
    </FormControl>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.lang
  };
};

const mapDispatchToProps = {
  switchLang
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoseLangBtn);
