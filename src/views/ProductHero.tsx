import * as React from 'react';
import Button from '../components/button/Button';
import Typography from '../components/typography/Typography';
import ProductHeroLayout from '../components/layout/ProductHeroLayout';


const backgroundImage = 
  'https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/70122499_2378299029059712_2983810258381570048_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9IcOEXU_N8MAX_CnkR3&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfADpxfyL22c6MJN8TU26nlZeBPNEbE8QuyJBwIk7sT9FQ&oe=6403CD52';
  //'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        El &Aacute;rbol English School
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Button
        color="success"
        variant="contained"
        size="large"
        component="a"
        href="#"
        sx={{ minWidth: 200 }}
      >
        Conocer m&aacute;s
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}