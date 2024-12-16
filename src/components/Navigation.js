import * as React from "react";
import { Stack, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { KeyboardArrowDown } from "@mui/icons-material";

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction={"row"}
      //spacing={2}
      //sx={{ width: "300px", color: "black" }}
      sx={{
        width: "80%",
        maxWidth: "320px",
        justifyContent: "space-between",
        margin: "0 auto",
      }}
    >
      <Button color="inherit" variant="text">
        HOME
      </Button>
      <Button color="inherit">VOLONTEER</Button>

      <div>
        <Button color="inherit" onClick={handleClick}>
          Stories
          <KeyboardArrowDown />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </div>

      <Button color="inherit">LOGIN</Button>
    </Stack>
  );
}

export default Navigation;
