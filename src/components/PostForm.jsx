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
  IconButton,
  Typography,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

export default function PostForm() {
  const timelineContext = useContext(TimelineContext);
  const { addPost } = timelineContext;

  const [open, setOpen] = useState(false);

  const [validation, setValidation] = useState({});

  const [formImage, setFormImage] = useState({});

  const [formBody, setFormBody] = useState("");

  const [tags, setTags] = useState([]);

  const [tagOpen, setTagOpen] = useState(false);

  const handleClickOpen = () => {
    setValidation({});
    setFormImage({});
    setFormBody("");
    setTags([]);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setFormImage({
        ...formImage,
        file: e.target.files[0],
        url: e.target.files[0].name,
      });
    }
  };

  const urlChange = (e) => {
    setFormImage({ ...formImage, file: null, url: e.target.value });
    document.getElementById("icon-button-file").value = "";
  };

  const handleSubmit = () => {
    if (!!formBody.trim()) {
      const formData = new FormData();
      formData.append("body", formBody);
      formData.append("tags", tags);
      if (formImage.file) {
        formData.append("file", formImage.file);
      } else {
        formData.append("url", formImage.url);
      }
      addPost(formData);
      handleClose();
      setTags([]);
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
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            name="newPhoto"
            onChange={handleImageChange}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <Typography>Upload Image</Typography>
              <PhotoCamera />
            </IconButton>
          </label>
          <TextField
            onChange={urlChange}
            margin="dense"
            id="image"
            label="Image Url"
            fullWidth
            value={formImage?.url}
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
