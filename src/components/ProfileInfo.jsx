import React, { useState } from "react";
import PostForm from "./PostForm";
import FollowButton from "./FollowButton";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { useFadedShadowStyles } from "@mui-treasury/styles/shadow/faded";
import { useGutterBorderedGridStyles } from "@mui-treasury/styles/grid/gutterBordered";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Followers from './Followers'
import axios from "axios";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    paddingBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
  root: {
    width: "100%",
    maxWidth: 360,
  },
  appBar: {
    position: "relative",
  },
  dialog: {
    // width: "20vw"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProfileInfo(props) {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: "rgba(0, 0, 0, 0.08)",
    height: "50%",
  });

  const [followingOpen, setFollowingOpen] = useState(false);
  const [followersOpen, setFollowersOpen] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const openFollowing = () => {
    setFollowingOpen(true);
  };

  const openFollowers = () => {
    setFollowersOpen(true);
  };

  const closeFollowing = () => {
    setFollowingOpen(false);
  };

  const closeFollowers = () => {
    setFollowersOpen(false);
  };

  const getFollowers = async () => {
  const res = await axios.get("/followers/" + props.user_data.id);
  setFollowers(res.data)
  openFollowers()
  }

  const getFollowing = async() => {
    const res = await axios.get("/following/" + props.user_data.id);
    setFollowing(res.data)
    openFollowing()
  }

  return (
    <div>
      <div></div>
      <Card className={cx(styles.card, shadowStyles.root)}>
        <CardContent>
          <Avatar className={styles.avatar} src={"https://i.pravatar.cc/300"} />
          <h3 className={styles.heading}>{props.user_data.full_name}</h3>
          <span className={styles.subheader}>{props.user_data.username}</span>
        </CardContent>
        <Divider light />
        <Box display={"flex"}>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <Button onClick={getFollowers} className={styles.statLabel}>
              Followers
            </Button>
            <Followers title={"Followers"} close={closeFollowers} openStatus={followersOpen} users={followers}/>
            <p className={styles.statValue}>
              {props.user_data.followers_count}
            </p>
          </Box>
          <Box p={2} flex={"auto"} className={borderedGridStyles.item}>
            <Button onClick={getFollowing} className={styles.statLabel}>
              Following
            </Button>
            <Followers title={"Following"} close={closeFollowing} openStatus={followingOpen} users={following}/>
            <p className={styles.statValue}>{props.user_data.followee_count}</p>
          </Box>
        </Box>
        {props.is_user ? (
          <PostForm />
        ) : (
          <FollowButton
            following={props.is_following}
            id={props.user_data.id}
          />
        )}
      </Card>
      );
    </div>
  );
}
