import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Search from "./Search";

import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  fade,
  makeStyles,
} from "@material-ui/core";

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
  link: { textDecoration: "none" },
}));

const TimlessAppBar = (props) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  const onClick = () => {
    logout();
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuToogle, setMenuToogle] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setMenuToogle(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuToogle(false);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      // id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={menuToogle}
      onClose={handleMenuClose}
    >
      <NavLink
        className={classes.link}
        style={{ color: "black" }}
        to="/profile"
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </NavLink>
      <NavLink
        className={classes.link}
        style={{ color: "black" }}
        to="/account"
      >
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </NavLink>
      <MenuItem onClick={onClick}>Logout</MenuItem>
    </Menu>
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Search />
          <NavLink className={classes.link} style={{ color: "white" }} to="/">
            <Typography variant="h6">Timeless</Typography>
          </NavLink>
          <NavLink to="/profile" className={classes.link}>
            <Avatar
              alt={props.user.full_name}
              src={props.user.image ? props.user.image : "/"}
              className={classes.large}
              onMouseEnter={(event) => handleProfileMenuOpen(event)}
            />
          </NavLink>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default TimlessAppBar;
