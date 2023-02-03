import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/typography/Typography';
import TextField from '../components/textfield/TextField';
import SnackBar from '../components/snackbar/SnackBar';
import Button from '../components/button/Button';
import productImageDots from '../../assets/images/productCTAImageDots.png';

function ProductCTA() {
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: '#AAD4AE',
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Taste the holidays of the everyday close to home.
              </Typography>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="success"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: "https://mui.com/static/themes/onepirate/productCTAImageDots.png",
            }}
          />
          <Box
            component="img"
            src="https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/184382960_2804037349819209_4437566477987290492_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=AV0yZtlHMCQAX8Nw1R-&tn=4AwUk3JvlTqlCbc5&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfDSnwPb9IpfL_VZuM9pcd6IlmB-S4So7yr73UsSh1tf2g&oe=6403E80A"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <SnackBar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

export default ProductCTA;