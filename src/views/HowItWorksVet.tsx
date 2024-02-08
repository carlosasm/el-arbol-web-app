import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/typography/Typography";
import CurvyLinesImg from "../assets/images/productCurvyLines.png";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import { WHITE_BG } from "../utils/Constants";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};
// eslint-disable-next-line no-lone-blocks
{
  /**
const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};
**/
}

const image = {
  height: 25,
  my: 4,
};

function ProductHowItWorksVet() {
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
                <PetsOutlinedIcon sx={{ fontSize: 55, marginBottom: 4 }} />
                <Typography variant="h5" align="center">
                  Atención médica veterinaria de calidad.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/** <Box sx={number}>2.</Box>**/}
                <Box component="img" sx={image} />
                <VaccinesOutlinedIcon sx={{ fontSize: 55, marginBottom: 4 }} />
                <Typography variant="h5" align="center">
                  Vacunas, desparasitaciones y otros servicios preventivos.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                {/** <Box sx={number}>3.</Box>**/}
                <Box component="img" sx={image} />
                <LocalHospitalOutlinedIcon
                  sx={{ fontSize: 55, marginBottom: 4 }}
                />
                <Typography variant="h5" align="center">
                  Diagnóstico y tratamiento de enfermedades.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorksVet;
