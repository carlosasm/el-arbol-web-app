import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/typography/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};


export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 5, display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={6} sm={4} md={5}>

              <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box component="a" href="https://www.facebook.com/elarbolenglish" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="https://google.com" sx={iconStyle}>
                  <img
                    src="https://mui.com/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  />
                </Box>
              </Grid>
              <Grid item sx={{ marginTop: '10px'}}>
                <Copyright />
              </Grid>
          </Grid>
          
      </Container>
    </Typography>
  );
}