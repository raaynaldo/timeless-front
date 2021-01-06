import React, { useContext, useState } from "react";
import AddTagSection from "./AddTagSection";
import TimelineContext from "../context/timeline/timelineContext";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

export default function PostForm() {
  const timelineContext = useContext(TimelineContext);
  const { addPost } = timelineContext;

  const [open, setOpen] = useState(false);

  const [validation, setValidation] = useState({});

  const [formImage, setFormImage] = useState("");

  const [formBody, setFormBody] = useState("");

  const [tags, setTags] = useState([]);

  const [tagOpen, setTagOpen] = useState(false);

  const handleClickOpen = () => {
    setValidation({});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (!!formBody.trim()) {
      const postData = {
        body: formBody,
        image: formImage,
        tags: tags,
      };
      addPost(postData);
      handleClose();
    } else {
      setValidation({ body: "can't be blank" });
    }
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
            autoFocus
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
            required
            error={!!validation.body}
            helperText={!!validation.body ? validation.body : ""}
          />
          <TextField
            onChange={(e) => setFormImage(e.target.value)}
            margin="dense"
            id="image"
            label="Image Url"
            fullWidth
          />
          {tags.map((tag) => (
            <Chip label={tag} />
          ))}
          {tagOpen ? (
            <AddTagSection setShowing={setTagOpen} addToTags={setTags} />
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTagOpen(true)} color="primary">
            Add a Tag
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
