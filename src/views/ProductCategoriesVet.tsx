import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/typography/Typography";
import ArbolLogo from "../assets/images/Vet1.jpg";
import ArbolLogo2 from "../assets/images/Vet2.jpg";
import ArbolLogo3 from "../assets/images/Vet3.jpg";
import ArbolLogo4 from "../assets/images/Vet4.jpg";
import ArbolLogo5 from "../assets/images/Vet5.jpg";
import ArbolLogo6 from "../assets/images/Vet6.jpg";
import ArbolLogo7 from "../assets/images/Vet7.jpg";
import ArbolLogo8 from "../assets/images/Vet8.jpg";
import { WHITE } from "../utils/Constants";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: WHITE,
  opacity: 0.02,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const images = [
  {
    url: ArbolLogo,
    title: "",
    width: "40%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t39.30808-6/318974333_958875035499805_8313895510542914352_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=cbUuujQEw9sAX-vAoVb&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfDLhue4bhpLJbKQ8XUC59eLULaI7Kt7pyHIS0u5Tkrqyw&oe=65C9DB85",
    title: "Massage",
    width: "20%",
  },
  {
    url: ArbolLogo4,
    title: "Hiking",
    width: "40%",
  },
  {
    url: ArbolLogo5,
    title: "Tour",
    width: "38%",
  },
  {
    url: ArbolLogo6,
    title: "Gastronomy",
    width: "40%",
  },
  {
    url: ArbolLogo7,
    title: "Shopping",
    width: "22%",
  },
  {
    url: ArbolLogo3,
    title: "Walking",
    width: "42%",
  },
  {
    url: ArbolLogo8,
    title: "Fitness",
    width: "20%",
  },
  {
    url: ArbolLogo2,
    title: "Reading",
    width: "38%",
  },
];

export default function ProductCategoriesVet() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }} id="vet">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Servicios de Veterinaria a domicilio
      </Typography>
      <Typography
        variant="h5"
        marked="center"
        align="center"
        component="h5"
        marginTop={"50px"}
      >
        Cuidamos de tu mascota en la comodidad de tu hogar.
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              {/** 
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>*/}
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
