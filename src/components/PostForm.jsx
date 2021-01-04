import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddTagSection from "./AddTagSection";
import axios from "axios";

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
    const postData = {
      body: formBody,
      image: formImage,
      tags: tags
    };

    const config ={
      "Content-Type": "application/json"
    };
    axios.post(`/posts/`, postData, config).then(res => console.log(res.json))
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Make New Memory
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Remember this Moment!</DialogTitle>
        <DialogContent>
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
          {tags.map(tag => <Chip label={tag}/>)}
          {tagOpen ? (
            <AddTagSection setShowing={setTagOpen} addToTags={setTags} />
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTagOpen(true)} color="primary">
            Add a Tag
          </Button>
          <Button onClick={handleClose} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
