import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Update from "../components/Update";
import axios from "axios";
import NoFollowerAlert from "../components/NoFollowerAlert";
import ActionCable from "actioncable";
import Loading from '../components/Loading'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UpdateFeed(props) {
  let connection;

  const createSocket = () => {
    const cable = ActionCable.createConsumer(
      "ws://localhost:3001/api/v1/" + "cable"
    );
    connection = cable.subscriptions.create(
      { channel: "UpdatesChannel", user_id: user.id },
      {
        connected: () => console.log("connected"),
        received: (data) => {
          console.log("please tell me");
          handleDataFromConnection(data);
        },
      }
    );
  };
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDataFromConnection = (data) => {
    console.log(data.post);
    setPosts((prev) => [data.post, ...prev]);
  };

  useEffect(async () => {
    if (user) {
      const res = await axios.get("/followee_posts");
      const data = res.data.posts;
      setPosts(data);
      createSocket();
      setLoading(false);
    }
  }, [user]);
  console.log({ posts });
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <List component="nav" aria-label="main mailbox folders">
          {posts.length == 0 ? (
            <NoFollowerAlert />
          ) : (
            posts.map((post, index) => {
              return <Update post={post} key={index} />;
            })
          )}
        </List>
      )}
    </div>
  );
}
