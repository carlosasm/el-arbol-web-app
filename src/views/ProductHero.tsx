import * as React from 'react';
import Button from '../components/button/Button';
import Typography from '../components/typography/Typography';
import { WHITE } from "../utils/Constants";
import ProductHeroLayout from '../components/layout/ProductHeroLayout';


const backgroundImage = 
'https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/81841569_2431719483717666_6408676725638561792_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=300f58&_nc_ohc=EkA5vorx_mEAX_XU2kG&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfBDXzJ5dZl_Hsnrvsm3hfdqUrUqV_pbcgo6Qzjqaaf69w&oe=65EBA2DE'

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: WHITE, // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center" sx={{mt: { xs: 10 },}}>
        El &Aacute;rbol English School
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Nutrir el conocimiento, hacer crecer la oportunidad
      </Typography>
      <Button
        color="success"
        variant="contained"
        size="large"
        component="a"
        href="#services"
        sx={{ minWidth: 200 }}
      >
        Conocer m&aacute;s
      </Button>
      {/**<Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
    </Typography>*/}
    </ProductHeroLayout>
  );
}