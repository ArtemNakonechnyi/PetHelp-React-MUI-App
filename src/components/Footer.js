import React from "react";
import { Box, Typography } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
// import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        sx={{
          padding: "2rem",
          backgroundColor: theme.palette.footerBG,
          color: theme.palette.sideBarText,
        }}
      >
        <Grid size={{ xs: 12, lg: 6 }}>
          <Box p={2}>
            <Typography variant="h6">About us</Typography>
            <Typography sx={{ marginBottom: "20px" }} variant="body1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              illo reprehenderit. Similique exercitationem perferendis labore
              eos deserunt, nulla, doloribus consequatur inventore amet optio a.
              Nam.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <IconButton aria-label="Facebook">
                <Facebook sx={{ color: theme.palette.sideBarText }} />
              </IconButton>

              <IconButton aria-label="Twitter">
                <Twitter sx={{ color: theme.palette.sideBarText }} />
              </IconButton>

              <IconButton aria-label="Instagram">
                <Instagram sx={{ color: theme.palette.sideBarText }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box p={2}>
            <Typography variant="h6">Information</Typography>
            <Typography variant="body1">Lorem ipsum</Typography>
            <Typography variant="body1">Privacy & Policy</Typography>
            <Typography variant="body1">Terms & Conditions</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <Box p={2}>
            <Typography variant="h6">My Account</Typography>
            <Typography variant="body1">Initiatives & projects</Typography>
            <Typography variant="body1">Favourite animals</Typography>
            <Typography variant="body1">My Account</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
