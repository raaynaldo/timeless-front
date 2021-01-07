import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export default function Update(props) {
  const classes = useStyles();

  return (
    <div>
      <ListItem button>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`${props.post}`} />
      </ListItem>
      <Divider />
    </div>
  );
}
