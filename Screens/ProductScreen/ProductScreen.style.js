import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0),
  },
  formFields: {
    marginBottom: theme.spacing(2),
    "& input": {
      width: "100%",
    },
  },
  productImageContainer: {
    maxWidth: "100%",
    "& img": {
      width: "100%",
      objectFit: "contain",
    },
    [theme.breakpoints.up("md")]: {
      height: "480px",
      "& img": {
        height: "360px",
      },
    },
    [theme.breakpoints.up("lg")]: {
      width: "480px",
      height: "480px",
    },
  },
  slider2: {
    width: "100%",
    margin: theme.spacing(1, 0),
    "& img": {
      width: "100px",
      padding: theme.spacing(0.5),
    },
    [theme.breakpoints.up("md")]: {
      "& img": {
        height: "100px",
      },
    },
  },
  productTitleContainer: {
    padding: theme.spacing(0, 2),
  },
  productTitle: {
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    margin: theme.spacing(4, 0),
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(0),
    },
  },
  descriptionContainer: {
    marginTop: theme.spacing(2),
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  price: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  delivery: {
    fontSize: "1rem",
    marginTop: theme.spacing(1.5),
    fontWeight: "bold",
  },
  shipment: {
    fontSize: "0.75rem",
    marginTop: theme.spacing(1.5),
    fontWeight: "bold",
  },
  qtySection: {
    display: "flex",
    alignItems: "center",
  },
  IconButton: {
    color: theme.palette.primary.main,
    "&:focus": {
      outline: "none",
    },
  },
  productForm: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0),
    },
  },
  thankYouMessage: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
  placeOrderButton: {
    width: "100%",
  },
}));
