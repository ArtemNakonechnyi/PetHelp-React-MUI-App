import * as React from "react";
import { IconButton, Stack, Divider } from "@mui/material";
import { Favorite, Person, Notifications } from "@mui/icons-material";

function ActionButtons() {
  return (
    <Stack
      divider={<Divider orientation="vertical" flexItem />}
      direction="row"
      spacing={2}
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
