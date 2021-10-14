import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(0, "auto"),
  },
  banner: {
    maxWidth: "100%",
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      objectFit: "cover",
      height: "400px",
    },
  },
}));
