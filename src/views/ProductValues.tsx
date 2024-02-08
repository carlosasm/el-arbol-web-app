import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { WHITE_BG } from "../utils/Constants";
import Typography from "../components/typography/Typography";
import CurvyLinesImg from "../assets/images/productCurvyLines.png";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function ProductValues() {
  return (
    <Box
      id="services"
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: WHITE_BG }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src={CurvyLinesImg}
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" sx={{ height: 25 }} />
              <SchoolOutlinedIcon sx={{ fontSize: 60 }} />
              <Typography variant="h5" sx={{ my: 5 }}>
                Cursos de Inglés para Adultos y Adolescentes
              </Typography>
              <Typography variant="h6">
                {
                  "En El Árbol English School, te ofrecemos cursos de inglés personalizados para adultos y adolescentes de todos los niveles."
                }
                {""}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" sx={{ height: 25 }} />
              <PetsOutlinedIcon sx={{ fontSize: 60 }} />
              <Typography variant="h5" sx={{ my: 5 }}>
                Servicio de Veterinaria a Domicilio
              </Typography>
              <Typography variant="h6">
                {
                  "El Árbol English School también ofrece un servicio de veterinaria a domicilio para que tu mascota reciba la atención médica que necesita sin tener que salir de casa."
                }
                {""}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box component="img" sx={{ height: 25 }} />
              <DevicesOutlinedIcon sx={{ fontSize: 60 }} />
              <Typography variant="h5" sx={{ my: 5 }}>
                Cursos de Inglés en Línea
              </Typography>
              <Typography variant="h6">
                {
                  "Con nuestros cursos de inglés en línea, podrás aprender inglés a tu ritmo y sin salir de casa."
                }
                {""}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
