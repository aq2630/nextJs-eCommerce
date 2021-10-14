import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "../assets/theme";
import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
