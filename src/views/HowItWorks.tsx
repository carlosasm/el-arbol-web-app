import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/typography/Typography";
import CurvyLinesImg from "../assets/images/productCurvyLines.png";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { WHITE_BG } from "../utils/Constants";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

// eslint-disable-next-line no-lone-blocks
{/**
const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};
**/}

const image = {
  height: 25,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: WHITE_BG, overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={CurvyLinesImg}
          alt="curvy lines"
          sx={{
            pointerEvents: "none",
            position: "absolute",
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 10 }}>
          ¿Qué te ofrecemos?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/** <Box sx={number}>1.</Box>**/}
                <Box component="img" sx={image} />
                <VerifiedUserOutlinedIcon
                  sx={{ fontSize: 55, marginBottom: 4 }}
                />
                <Typography variant="h5" align="center">
                  Clases con profesores certificados.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/** <Box sx={number}>2.</Box>**/}
                <Box component="img" sx={image} />
                <GroupsOutlinedIcon sx={{ fontSize: 55, marginBottom: 4 }} />
                <Typography variant="h5" align="center">
                  Grupos reducidos para una atención personalizada.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/** <Box sx={number}>3.</Box>**/}
                <Box component="img" sx={image} />
                <RecordVoiceOverOutlinedIcon
                  sx={{ fontSize: 55, marginBottom: 4 }}
                />
                <Typography variant="h5" align="center">
                  Metodología innovadora y enfoque conversacional.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                {/** <Box sx={number}>4.</Box>**/}
                <Box component="img" sx={image} />
                <AlarmOnOutlinedIcon sx={{ fontSize: 55, marginBottom: 4 }} />
                <Typography variant="h5" align="center">
                  Horarios flexibles que se adaptan a tu ritmo de vida.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={item}>
                {/** <Box sx={number}>5.</Box>**/}
                <Box component="img" sx={image} />
                <AutoStoriesOutlinedIcon
                  sx={{ fontSize: 55, marginBottom: 4 }}
                />
                <Typography variant="h5" align="center">
                  Preparación para exámenes internacionales.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        {/**<Button
          color="success"
          size="large"
          variant="contained"
          component="a"
          href="#"
          sx={{ mt: 8 }}
        >
          Get started
        </Button>**/}
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;
