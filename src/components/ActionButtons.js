import * as React from "react";
import { IconButton, Stack, Divider } from "@mui/material";
import { Favorite, Person, Notifications } from "@mui/icons-material";

function ActionButtons({ direction = "row", spacing = 2 }) {
  return (
    <Stack
      divider={<Divider orientation="vertical" flexItem />}
      direction={direction}
      spacing={spacing}
    >
      <IconButton>
        <Favorite />
      </IconButton>

      <IconButton>
        <Person />
      </IconButton>

      <IconButton>
        <Notifications />
      </IconButton>
    </Stack>
  );
}

export default ActionButtons;
