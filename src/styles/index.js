import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#00adb5",
  secondary: "#00c7c0",
  success: "#4caf50",
  info: "#00d5ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#22414d",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  white: "#fff",
  black: "#000",
};

const overrides = {
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    footerBG: Colors.shaft,
    sideBarText: Colors.dove_gray,
    sideBarBorder: Colors.info,
    background: {
      default: Colors.body_bg,
      paper: Colors.white,
    },
    text: {
      primary: Colors.dark,
      secondary: Colors.light,
      black: Colors.black,
      white: Colors.white,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.white,
          color: Colors.dark,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: Colors.primary,
          color: Colors.dove_gray,
        },
      },
    },
  },
};

const theme = createTheme(overrides);

export { overrides };
export default theme;
