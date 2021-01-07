import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import { blue } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export default function Followers(props) {
  const classes = useStyles();

  const generateUsers = () => {
    return props.users.map((user, index) => (
      <Link
        key={index}
        style={{ textDecoration: "none", color: "black" }}
        to={"/profile/" + user.username}
      >
        <ListItem button onClick={props.close} key={index}>
          <ListItemAvatar>
            <Avatar
              className={classes.avatar}
              alt={user.full_name}
              src={user.image ? user.image : "/"}
              className={classes.large}
            >
              {/* <PersonIcon /> */}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.username} />
        </ListItem>
      </Link>
    ));
  };

  return (
    <Dialog
      onClose={props.close}
      aria-labelledby="simple-dialog-title"
      open={props.openStatus}
      style={{ maxHeight: "75%", overflow: "auto" }}
    >
      <List style={{ overflow: "auto", minWidth: "75%", paddingTop: 0 }}>
        <ListSubheader color={"primary"} style={{ background: "white" }}>
          {`${props.title}  `}
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.close}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </ListSubheader>
        {props.users.length == 0 ? (
          <ListItem>
            <ListItemText primary={"No " + props.title} />
          </ListItem>
        ) : (
          generateUsers()
        )}
      </List>
    </Dialog>
  );
}
