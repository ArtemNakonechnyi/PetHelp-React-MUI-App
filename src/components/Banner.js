import { Box, Typography, Container, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Banner() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        marginTop: { xs: "8rem", md: "11rem" },
        marginBottom: "3rem",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("sm")]: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
          margin: "0 auto",
          padding: " 50px",
        }}
      >
        <Box
          sx={{
            [theme.breakpoints.up("sm")]: {
              maxWidth: "700px",
              marginRight: "50px",
            },
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "auto",
            }}
            src="images/banner-cat1.png"
            alt="banner-cat"
            width="100%"
          />
        </Box>
        <Box
          sx={{
            [theme.breakpoints.up("sm")]: {
              maxWidth: "700px",
              width: "100%",
            },
            display: "flex",
            flexDirection: "column",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <Typography variant="h6">Our moto</Typography>
          <Typography variant="h2" sx={{ marginBottom: "30px" }}>
            Help animals
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "30px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0",
              backgroundColor: theme.palette.sideBarBorder,
              color: theme.palette.text.white,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.text.black,
              },
            }}
          >
            Donate
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
