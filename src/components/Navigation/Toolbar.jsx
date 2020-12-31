import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";

import {
  AppBar,
  Avatar,
  Button,
  InputBase,
  Toolbar,
  Typography,
  fade,
  makeStyles,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    // marginLeft: 0,
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));

const TimlessAppBar = (props) => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  const onClick = () => {
    logout();
  };

  const classes = useStyles();
  return (
    <div>
      <AppBar position="staic" className={classes.root}>
        <Toolbar className={classes.toolbar}>
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
            />
          </div>
          <Typography variant="h6">Timeless</Typography>
          <Button color="inherit" onClick={onClick}>
            Logout
          </Button>
          <Avatar
            alt={props.user.full_name}
            src="/static/images/avatar/1.jpg"
            className={classes.large}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TimlessAppBar;
