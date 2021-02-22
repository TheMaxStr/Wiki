import React, { useEffect } from "react";
import { connect } from "react-redux";
import { hideModalWikiPreview } from "../redux/actions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Wiki from "../api/wiki";

const WikiModal = ({ pageid, open, hideModalWikiPreview }) => {
  const [title, setTitle] = React.useState("");
  const [bodyContent, setBodyContent] = React.useState("");

  useEffect(() => {
    if (pageid > 0) {
      setBodyContent("Идет загрузка...");
      Wiki.getPage(pageid).then((data) => {
        setTitle(data.title);
        setBodyContent(data.body);
      });
    }
  }, [pageid]);

  const handleClose = () => {
    hideModalWikiPreview();
  };

  return (
    <>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            dangerouslySetInnerHTML={{ __html: bodyContent }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.app.modalWikiPreview
  };
};

const mapDispathToProps = {
  hideModalWikiPreview
};

export default connect(mapStateToProps, mapDispathToProps)(WikiModal);
