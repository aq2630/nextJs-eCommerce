import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#ED1C24",
      },
      secondary: {
        main: "#000",
      },
    },
  })
);

export default theme;
