import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  IconButton,
  Typography,
} from "@mui/material";
import Navigation from "./Navigation";
import ActionButtons from "./ActionButtons";
import SideBar from "./SideBar";
import { useState } from "react";
import { Menu } from "@mui/icons-material";

function Header() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const theme = useTheme();

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <AppBar position="fixed" sx={{ height: isLargeScreen ? "120px" : "80px" }}>
      {isLargeScreen ? (
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "4rem",
              color: theme.palette.secondary.main,
              minWidth: "150px",
              height: "100px",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              fontFamily: "'Great Vibes', cursive",
            }}
          >
            Cats & friends
          </Typography>

          <Navigation />
          <ActionButtons />
        </Toolbar>
      ) : (
        <Toolbar sx={{ justifyContent: "start" }}>
          <IconButton onClick={() => setIsSideBarOpen(true)}>
            <Menu sx={{ color: theme.palette.text.black, fontSize: "2rem" }} />
          </IconButton>
          <SideBar
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
          />

          <Typography
            variant="h4"
            sx={{
              marginLeft: "auto",
              marginRight: "auto",
              color: theme.palette.secondary.main,
              minWidth: "150px",
              height: "100px",
              padding: "0.5rem",
              display: "flex",
              alignItems: "center",
              fontFamily: "'Great Vibes', cursive",
              textAlign: "center",
            }}
          >
            Cats & friends
          </Typography>
        </Toolbar>
      )}
    </AppBar>
  );
}

export default Header;
