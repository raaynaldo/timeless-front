import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  TextField,
  Grid,
  IconButton,
} from "@material-ui/core/";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import AuthContext from "../context/auth/authContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    display: "none",
  },
  card_root: {
    width: 400,
  },
  card_media: {
    height: 300,
  },
}));

export default function MyAccount() {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { user, updateUser } = authContext;

  const [image, setImage] = useState({ file: null, url: "" });
  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0])
      setImage({
        ...image,
        file: e.target.files[0],
        url: e.target.files[0].name,
      });
  };

  const urlChange = (e) => {
    setImage({ ...image, file: null, url: e.target.value });
    document.getElementById("icon-button-file").value = "";
  };

  const submit = () => {
    const formData = new FormData();
    if (image.file) {
      formData.append("file", image.file);
    } else {
      formData.append("url", image.url);
    }
    updateUser(formData);
    document.getElementById("icon-button-file").value = "";
    setImage({ file: null, url: "" });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
      </Grid>
      {/* <img src={user?.image ? user?.image : "/"} /> */}
      <Card className={classes.card_root}>
        <CardActionArea>
          <CardMedia
            className={classes.card_media}
            image={user?.image ? user?.image : "/"}
            alt={user?.full_name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user?.full_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {user?.username}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <input
            accept="image/*"
            className={classes.input}
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
              <PhotoCamera />
            </IconButton>
          </label>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {image?.name}
          </Typography> */}
          <TextField
            value={image?.url}
            style={{ width: "100%" }}
            onChange={urlChange}
          />
        </CardActions>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={submit}
          >
            update
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
