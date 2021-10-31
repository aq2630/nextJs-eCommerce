import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    position: "relative",
    backgroundColor: theme.palette.gray[100],
  },

  whatsAppLink: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    "& button": {
      backgroundColor: "#25d366",
      "&:hover": {
        backgroundColor: "#25d366",
      },
    },
  },
  whatsAppIcon: {
    color: "white",
  },
  iconButton: {
    "&:focus": {
      outline: "none",
    },
  },
  phoneIcon: {
    margin: theme.spacing(1.5, 0),
  },
  footerLinks: {
    marginTop: theme.spacing(2),
    listStyleType: "none",
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(0),
    },
    "& li": {
      marginBottom: theme.spacing(1.5),
      textDecoration: "none",
      "& a": {
        cursor: "pointer",
        fontWeight: "bold",
      },
    },
  },
  copyrights: {
    textAlign: "center",
    color: "white",
    backgroundColor: theme.palette.gray[700],
    padding: theme.spacing(1.5),
  },
}));
