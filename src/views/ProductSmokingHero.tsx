import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "../components/typography/Typography";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Button
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
        href="#contact"
      >
        <Typography variant="h4" component="span">
          ¿Tienes preguntas? ¿Necesitas ayuda?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Estamos para ayudar.
      </Typography>
    </Container>
  );
}

export default ProductSmokingHero;
