import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  toolbar_wrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  drawer: {
    width: "100%",
    position: "relative",
  },
  drawerPaper: { width: "100%" },
  drawerContainer: {
    width: "100%",
    height: "100%",
  },
  logo: {
    flex: 1,
    marginRight: "auto",
  },
  mainMenu: {
    display: "flex",
    alignItems: "center",
    "& li": {
      padding: theme.spacing(0.5),
      color: "#ED1C24",
      listStyleType: "none",
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2),
      },
    },
  },
  drawerCloseIcon: {
    color: theme.palette.primary.main,
    "& svg": {
      width: "40px",
      height: "40px",
    },
  },
  drawerMenu: {
    fontWeight: "bold",
    fontSize: "22px",
    textAlign: "center",
    "& ul": {
      paddingInlineStart: 0,
    },
    "& li": {
      padding: theme.spacing(2),
      listStyleType: "none",
    },
  },
}));
