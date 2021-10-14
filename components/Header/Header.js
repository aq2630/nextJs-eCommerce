import React, { useState } from "react";
import { useStyles } from "./Header.style.js";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Hidden,
  Toolbar,
  IconButton,
  useScrollTrigger,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../../assets/images/ht-logo.png";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: 2,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles(); // material ui Styles

  const handleDrawer = () => {
    setOpen(!open);
  };

  const navLinks = (
    <>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Toys</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Kitchen Appliances</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Baby Products</a>
        </Link>
      </li>
    </>
  );

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar_wrapper}>
              <Box className={classes.logo}>
                <Link href="/">
                  <a>
                    <Image src={logo} alt="Logo hashtag" />
                  </a>
                </Link>
              </Box>
              <Box>
                <ul className={classes.mainMenu}>
                  <Hidden mdDown>{navLinks}</Hidden>
                  <Hidden mdUp>
                    <li>
                      <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="menu"
                        onClick={handleDrawer}
                      >
                        <MenuIcon />
                      </IconButton>
                    </li>
                  </Hidden>
                </ul>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <IconButton
            className={classes.drawerCloseIcon}
            onClick={handleDrawer}
          >
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
          <div className={classes.drawerMenu} onClick={handleDrawer}>
            <ul>{navLinks}</ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
