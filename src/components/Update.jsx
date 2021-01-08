import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export default function Update(props) {
  const classes = useStyles();

  const makeChips = () => {
    return props.post.tags.map((tag, index) => (
      <Chip key={index} label={"#" + tag.name} />
    ));
  };

  const dateOption = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const dateOption2 = {
    hour: "short",
    minute: "short",
  };

  const date = new Date(props.post.post_date).toLocaleDateString(
    "en-US",
    dateOption
  );
  const date2 = new Date(props.post.post_date).toLocaleTimeString();

  return (
    <div>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/profile/" + props.post.user.username}
      >
        <ListItem style={{ height: "10vh" }} button>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              src={props.post.user.image ? props.post.user.image : "/"}
              alt={props.post.user.full_name}
            >
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={`${props.post.user.username} posted on ${date} at ${date2}`}
          />
          {makeChips()}
        </ListItem>
      </Link>
      <Divider />
    </div>
  );
}
