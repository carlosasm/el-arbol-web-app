import * as React from 'react';
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/typography/Typography';
import CurvyLinesImg from '../assets/images/productCurvyLines.png';

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#fff5f8' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src={CurvyLinesImg}
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Lorem ipsum
              </Typography>
              <Typography variant="h5">
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie ipsum vestibulum mattis tincidunt.'
                }
                {
                  '1'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues2.svg"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Lorem ipsum 2
              </Typography>
              <Typography variant="h5">
              {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie ipsum vestibulum mattis tincidunt.'
                }
                {
                  '2'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://mui.com/static/themes/onepirate/productValues3.svg"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
              Lorem ipsum 3
              </Typography>
              <Typography variant="h5">
              {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie ipsum vestibulum mattis tincidunt.'
                }
                {
                  '3'
                }
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;