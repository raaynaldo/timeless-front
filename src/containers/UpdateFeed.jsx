import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Update from "../components/Update";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UpdateFeed() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const res = await axios.get("/followee_posts");
    const data = res.data;
    setPosts(data);
  }, [])

  return (
    <div>
      <List component="nav" aria-label="main mailbox folders">
        {posts.map((post, index) => {
            <Update post={post} key={index}/>
        })}
      </List>
    </div>
  );
}
