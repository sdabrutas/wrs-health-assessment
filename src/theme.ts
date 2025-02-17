import { lightGreen } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: lightGreen[500],
        }
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#002984',
        },
      }
    },
  },
  cssVariables: true,
});

export default theme;
