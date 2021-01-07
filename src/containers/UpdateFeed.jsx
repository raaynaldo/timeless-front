import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Update from "../components/Update";
import axios from "axios";
import NoFollowerAlert from '../components/NoFollowerAlert'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UpdateFeed() {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    if (user) {
      const res = await axios.get("/followee_posts");
      const data = res.data.posts;
      setPosts(data);
    }
  }, [user]);

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        {posts.length == 0 ? (
          <NoFollowerAlert />
        ) : (
          posts.map((post, index) => {
            return <Update post={post} key={index} />;
          })
        )}
      </List>
    </div>
  );
}
