import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/typography/Typography";
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
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t31.18172-8/15016373_1801101333446154_2273222897643301189_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7a1959&_nc_ohc=1uuuDv2a4MwAX-bBcUK&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfAMeUvI4jWabesGJs9cCqc-3k-2pK8HrXKbfXMbRGQJXA&oe=65EBC5DC",
    //title: '',
    width: "40%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/75588282_2379156952307253_6186182696557871104_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c2f564&_nc_ohc=MjrlODSG3TUAX9LaIe4&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfCrsgW0SOG2xlg00cAoTul93s5GQbGoSX1SlS5dxKJ-rA&oe=65EBCBED",
    //title: '',
    width: "20%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/80597638_2416141358608812_6488733747804897280_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=4dc865&_nc_ohc=Il07MIGJQuUAX9Ybr9n&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfCbJ5ML_W-xmrKsM50vWmcQr-a_RD45V-_HUMYqNvWA7A&oe=65EBD2F1",
    //title: "Hiking",
    width: "40%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/183380998_2804037346485876_6977509196592292997_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=810d5f&_nc_ohc=lFWNkDyWWBEAX8IlQkr&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfAgr3U2dxFqr5KSsnHYOov98RK9PURZDkI4M15RNjz8DA&oe=65EBC18B",
    //title: "Tour",
    width: "38%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/79747736_2416141475275467_5030504729185091584_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=4dc865&_nc_ohc=49GiAj_hEhAAX89eQ4Z&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfBq3KWKHkRHlU5sd3fVVhWw0bNKrLrDn9Xs5fKwmiNn1w&oe=65EBA95B",
    //title: "Gastronomy",
    width: "38%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/38720871_2096862793870005_6401175582435966976_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=HzdRkXpeytUAX8LAIsv&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfAOl13XIVO0wwKYGeXdKIVlPC3lYdvmZvUTBIowM7L3gA&oe=65EBA0DA",
    //title: "Shopping",
    width: "24%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/79657535_2416142661942015_7732073732855824384_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=1Fcv6WMkzK0AX9li7Rh&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfBu7yWSHTJGIclLlHfNu17PJhxpqk2CTmLdsAa5m1Tddg&oe=65EB9F4A",
    //title: "Walking",
    width: "40%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/44716220_2142146919341592_3259768882176458752_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=c2f564&_nc_ohc=Za55a-LwE4AAX_i1gnK&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfAuCGmbl3VJnN6_v_t6HpvIAwy9R7xY3IZQ2ycVt_podw&oe=65EBC86A",
    //title: "Fitness",
    width: "20%",
  },
  {
    url: "https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/80226132_2416141598608788_7675404705991753728_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=4dc865&_nc_ohc=1-cC4onFfloAX8QjHMB&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfDhcJCaNKAZ_XFcvvFNFyjgP9nlaEExZlGkeCqBi8Ifog&oe=65EBA5EF",
    //title: "Reading",
    width: "40%",
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }} id="english">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Aprende Inglés en El Árbol
      </Typography>
      <Typography
        variant="h5"
        marked="center"
        align="center"
        component="h5"
        marginTop={"50px"}
      >
        Domina el inglés y abre las puertas a nuevas oportunidades.
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
              </Typography>
              */}
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
