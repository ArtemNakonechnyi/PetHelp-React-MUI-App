import React from "react";
import {
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { itemData } from "./data";
import { useTheme } from "@mui/material/styles";

function Content() {
  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const getColumns = () => {
    if (isLargeScreen) return 3;
    if (isMediumScreen) return 2;
    return 1;
  };

  const columns = getColumns();
  return (
    <Container sx={{ paddingBottom: 4 }}>
      <Typography sx={{ textAlign: "center", marginBottom: 4 }} variant="h4">
        Waiting for their owners
      </Typography>

      <ImageList
        sx={{
          width: "100%",
        }}
        gap={16}
        cols={columns}
        variant="masonry"
      >
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />

            <ImageListItemBar
              sx={{
                color: theme.palette.text.white,
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px 10px",
              }}
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: theme.palette.background.default }}
                  aria-label="add to favorites"
                >
                  <Favorite />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default Content;
