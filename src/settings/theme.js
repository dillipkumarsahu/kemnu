import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#4D0068",
    },
    secondary: {
      main: "#6B6B6B",
    },
    info: {
      main: "#F7E2FF",
      contrastText: "#4D0068",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    allVariants: {
      color: "#6B6B6B",
    },
  },
});

export default theme;
