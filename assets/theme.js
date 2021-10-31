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
      gray: {
        100: "#F3F4F6",
        700: "#374151",
      },
    },
  })
);

export default theme;
