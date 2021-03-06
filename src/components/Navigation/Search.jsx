import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import { avoidUnnecessarySearch } from "../../utils/SearchUtil";
import { blue } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "white",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    color: "white",
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
    marginRight: "10px"
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Search() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState("");

  const [results, setResults] = React.useState([]);

  const [loading, setLoading] = React.useState(false);

  const search = async (val) => {
    setLoading(true);
    const res = await avoidUnnecessarySearch(`/users?username=${val}`);
    const users = res;
    setLoading(false);
    setResults(users);
  };

  const handleChange = async (e) => {
    search(e.target.value);
    setValue(e.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="white"
        aria-label="close"
        onClick={handleClickOpen}
        style={{ color: "white" }}
      >
        <SearchIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Search for a User
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
              />
            </div>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              style={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          {results
            ? results.map((user, index) => {
                return (
                  <div onClick={handleClose}>
                    <Link
                      color={"primary"}
                      style={{ textDecoration: "none", color: "black" }}
                      to={"/profile/" + user.username}
                    >
                      <ListItem button>
                        <Avatar
                          className={classes.avatar}
                          src={user.image ? user.image : "/"}
                          alt={user.full_name}
                        >
                          <PersonIcon />
                        </Avatar>
                        <ListItemText
                          key={index}
                          primary={user.full_name}
                          secondary={user.username}
                        />
                      </ListItem>
                    </Link>
                    <Divider />
                  </div>
                );
              })
            : null}
        </List>
      </Dialog>
    </div>
  );
}
