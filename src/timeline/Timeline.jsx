import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import TimelineContext from "../context/timeline/timelineContext";
import PostForm from "../components/PostForm";
import VisualTimeline from "./VisualTimeline";
import SectionLine from "./SectionLine";
import { useParams } from "react-router-dom";

import "./output.css";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

// let test = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function Timeline() {
  const params = useParams();
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const timelineContext = useContext(TimelineContext);
  const { posts, loading, getUserPosts } = timelineContext;

  useEffect(() => {
    console.log({ params });
    if (user) {
      if (!params.username) {
        getUserPosts(user.id);
      } else {
        getUserPosts(10);
      }
    }
  }, [user]);

  if (!loading) {
    return (
      <div className="wrapper">
        <PostForm />
        <VisualTimeline sections={Object.keys(posts).reverse()} />
        <SectionLine sections={posts} />
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <CircularProgress size={100} />
      </div>
    );
  }
}
