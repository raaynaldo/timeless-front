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
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";

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
  const [cameraOn, setCameraOn] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage({
        ...image,
        file: e.target.files[0],
        url: e.target.files[0].name,
      });
      setCameraOn(false);
      setError(null);
    }
  };

  const handlePhoto = (dataUri) => {
    setImage({ ...image, file: null, url: "", currentPhoto: dataUri });
    setError(null);
  };

  const urlChange = (e) => {
    setImage({ ...image, file: null, url: e.target.value });
    document.getElementById("icon-button-file").value = "";
    setCameraOn(false);
    setError(null);
  };

  const submit = () => {
    const formData = new FormData();
    if (image.file) {
      formData.append("file", image.file);
    } else if (image.currentPhoto) {
      formData.append("currentPhoto", image.currentPhoto);
    } else if (image.url) {
      formData.append("url", image.url);
    } else {
      setError("No Picture!");
      return;
    }
    updateUser(formData);
    document.getElementById("icon-button-file").value = "";
    setImage({ file: null, url: "" });
    setCameraOn(false);
    setError(null);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={cameraOn ? 6 : 12} className={classes.root}>
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
              <TextField
                value={image?.url}
                style={{ width: "100%" }}
                onChange={urlChange}
                error={!!error}
                helperText={!!error ? error : ""}
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
              <Button
                variant="contained"
                color="primary"
                component="span"
                onClick={() => {
                  setCameraOn(!cameraOn);
                  setImage({});
                }}
              >
                {cameraOn ? "Close Camera" : "Take a picture!"}
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {cameraOn ? (
          <Grid item xs={5}>
            {image.currentPhoto ? (
              <ImagePreview
                dataUri={image.currentPhoto}
                isFullscreen={false}
                style={{ width: "300" }}
              />
            ) : (
              <Camera
                onTakePhoto={handlePhoto}
                isImageMirror={false}
                idealResolution={{ width: 640, height: 480 }}
                style={{ width: "300" }}
              />
            )}
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
}
