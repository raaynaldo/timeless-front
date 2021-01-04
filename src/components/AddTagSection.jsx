import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";

export default function AddTagSection(props) {
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addToTags((prevTags) => {
        prevTags.push(tag);
        return prevTags;
    });
    setTag("");
    props.setShowing(false);
    // e.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography>Add a Tag</Typography>
        <TextField
          onChange={(e) => setTag(e.target.value)}
          autoFocus
          margin="dense"
          id="image"
          label="Tag Name"
          fullWidth
        />
        <Button variant="outlined" color="primary" type="submit">
          Add Tag to Post
        </Button>
      </form>
    </div>
  );
}
