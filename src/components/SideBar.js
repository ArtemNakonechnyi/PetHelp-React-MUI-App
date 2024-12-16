import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";

function SideBar({ isSideBarOpen, setIsSideBarOpen }) {
  const [openNestedList, setOpenNestedList] = useState(false);

  const theme = useTheme();

  const handleCkick = () => {
    setOpenNestedList(!openNestedList);
  };

  return (
    <Drawer
      anchor="left"
      open={isSideBarOpen}
      onClose={() => setIsSideBarOpen(false)}
      sx={{
        "& .MuiDrawer-paper": {
          borderRadius: "0px 16px 16px 0px",
          boxShadow: `0px 6px 10px ${theme.palette.secondary.main}`,
        },
      }}
    >
      <Box width={{
        xs: "80vw",
        sm: "400px",
      }} p="2" textAlign="center" role="presentation">
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <Divider
            variant="middle"
            component="li"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              height: "2px",
            }}
          />
          <ListItem>
            <ListItemButton>
              <ListItemText primary=" Volonteer" />
            </ListItemButton>
          </ListItem>
          <Divider
            variant="middle"
            component="li"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              height: "2px",
            }}
          />

          <Accordion
            expanded={openNestedList}
            onChange={handleCkick}
            sx={{
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <AccordionSummary
              expandIcon={
                openNestedList ? (
                  <ExpandLess sx={{ color: theme.palette.sideBarText }} />
                ) : (
                  <ExpandMore sx={{ color: theme.palette.sideBarText }} />
                )
              }
              sx={{
                color: theme.palette.sideBarText,
                alignItems: "flex-start",
                padding: 0,
                margin: "0 30px",
              }}
            >
              <Typography variant="body1" component="div">
                Stories
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                paddingLeft: theme.spacing(3),
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.sideBarText,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
              }}
            >
              <List>
                <Divider
                  variant="middle"
                  component="li"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    height: "2px",
                  }}
                />
                <ListItem>
                  <ListItemButton>
                    <ListItemText primary="Blog" />
                  </ListItemButton>
                </ListItem>
                <Divider
                  variant="middle"
                  component="li"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    height: "2px",
                  }}
                />
                <ListItem>
                  <ListItemButton>
                    <ListItemText primary="Podcast" />
                  </ListItemButton>
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Divider
            variant="middle"
            component="li"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              height: "2px",
            }}
          />
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
          <Divider
            variant="middle"
            component="li"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              height: "2px",
            }}
          />
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Contact us" />
            </ListItemButton>
          </ListItem>
          <Divider
            variant="middle"
            component="li"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              height: "2px",
            }}
          />
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;
