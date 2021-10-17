import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2, 0),
  },
  addProductContainer: {
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
      boxShadow: "0 0 10px 5px #f3f3f3",
      borderRadius: "4px",
    },
  },
  backLink: {
    cursor: "pointer",
    "& div": {
      display: "flex",
      alignItems: "center",
    },
  },
  formElements: {
    marginBottom: theme.spacing(2),
  },
  fileInput: {
    width: "100%",
    outline: "1px solid #dedede",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1, 1.75),
    borderRadius: theme.spacing(0.5),
  },
  addProductButton: {
    width: "100%",
  },

  placeOrderButton: {
    width: "100%",
  },
}));
