import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { useMemo } from "react";

export default function ThemeProvider({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: {
        primary: {
          lighter: "#C8FACD",
          light: "#5BE584",
          main: "#00172D",
          dark: "#007B55",
          darker: "#005249",
        },
        secondary: {
          lighter: "#D6E4FF",
          light: "#84A9FF",
          main: "#3366FF",
          dark: "#1939B7",
          darker: "#091A7A",
        },
        info: {
          lighter: "#D0F2FF",
          light: "#74CAFF",
          main: "#1890FF",
          dark: "#0C53B7",
          darker: "#04297A",
        },
        success: {
          lighter: "#E9FCD4",
          light: "#AAF27F",
          main: "#54D62C",
          dark: "#229A16",
          darker: "#08660D",
        },
        warning: {
          lighter: "#FFF7CD",
          light: "#FFE16A",
          main: "#FFC107",
          dark: "#B78103",
          darker: "#7A4F01",
        },
        error: {
          lighter: "#FFE7D9",
          light: "#FFA48D",
          main: "#FF4842",
          dark: "#B72136",
          darker: "#7A0C2E",
        },
      },
      typography: {
        fontFamily: [
          '"Poppins"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        fontSize: 12,
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      shape: {
        borderRadius: 10,
      },
    }),
    [],
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
