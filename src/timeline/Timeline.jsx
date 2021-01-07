import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import TimelineContext from "../context/timeline/timelineContext";
import ProfileInfo from "../components/ProfileInfo";
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
  const {
    posts,
    user_data,
    is_following,
    loading,
    error,
    getCurrentUserProfile,
    getOtherUserProfile,
  } = timelineContext;

  useEffect(() => {
    console.log({ params });
    if (user) {
      if (!params.username) {
        getCurrentUserProfile();
      } else {
        getOtherUserProfile(params.username);
      }
    }
  }, [user, params]);

  console.log({ is_following });
  if (!loading && !error) {
    return (
      <div className="wrapper">
        <ProfileInfo user_data={user_data} is_user={user.id == user_data.id} is_following={is_following} />
        <VisualTimeline sections={Object.keys(posts).reverse()} />
        <SectionLine sections={posts} user={{full_name: user.full_name, image: user.image}} />
      </div>
    );
  } else if (error) {
    console.log(error);
    return <h1>{error}</h1>;
  } else {
    return (
      <div className={classes.root}>
        <CircularProgress size={100} />
      </div>
    );
  }
}
