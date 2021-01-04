import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddTagSection from "./AddTagSection";

export default function PostForm() {
  const [open, setOpen] = useState(false);

  const [formImage, setFormImage] = useState("");

  const [formBody, setFormBody] = useState("");

  const [tags, setTags] = useState([]);

  const [tagOpen, setTagOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTag = () => {};

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            onChange={(e) => setFormImage(e.target.value)}
            autoFocus
            margin="dense"
            id="image"
            label="Image Url"
            fullWidth
          />
          <TextField
            multiline
            rows={2}
            rowsMax={4}
            onChange={(e) => setFormBody(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Body"
            type="body"
            fullWidth
          />

          {tagOpen ? (
            <AddTagSection setShowing={setTagOpen} addToTags={setTags} />
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={addTag} color="primary">
            Add a Tag
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
