import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../components/typography/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { GREEN_APPBAR, WHITE } from "../utils/Constants";

function Copyright() {
  return (
    <React.Fragment>
      {"Copyright © "}
      {new Date().getFullYear()} {" - "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/carlos-salazar-madrigal-04376416b/"
      >
        Carlos Salazar
      </Link>
      {". All Rights Reserved."}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "success.main",
  mr: 1,
  "&:hover": {
    bgcolor: "success.dark",
  },
};

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: GREEN_APPBAR }}
    >
      <Container sx={{ my: 5, display: "flex", justifyContent: "center" }}>
        <Grid item xs={6} sm={5} md={5}>
          <Grid item sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginRight: "50px",
              }}
            >
              <Typography sx={{ margin: "15px" }}>El Árbol</Typography>
              <Box
                component="a"
                href="https://www.facebook.com/elarbolenglish"
                sx={iconStyle}
              >
                <FacebookIcon sx={{ color: WHITE }} />
              </Box>
              <Box
                component="a"
                href="https://www.instagram.com/elarbol.english"
                sx={iconStyle}
              >
                <InstagramIcon sx={{ color: WHITE }} />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{ margin: "15px" }}>El Árbol Vet</Typography>
              <Box
                component="a"
                href="https://www.instagram.com/vet_elarbol/"
                sx={iconStyle}
              >
                <InstagramIcon sx={{ color: WHITE }} />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
