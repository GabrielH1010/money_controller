import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { primary } from "styles/colorProvider";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: { main: primary },
  },
});

const App = () => (
  <>
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <ToastContainer />
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  </ThemeProvider>

  </>
);

export default App;
