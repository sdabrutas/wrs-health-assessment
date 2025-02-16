import { lightGreen } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  cssVariables: true,
  palette: {
    primary: {
      main: lightGreen[500],
    }
  },
});

export default theme;
