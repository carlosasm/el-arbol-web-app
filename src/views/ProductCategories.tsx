import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/typography/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/80226132_2416141598608788_7675404705991753728_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=_VhasmSI5NoAX-Vcy3Y&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfACezTipxxKjZOp4_DhHKCgE_kPIIKLmiU9_Xvbfz8IxA&oe=6403DAEF',
    title: 'Snorkeling',
    width: '40%',
  },
  {
    url: ' https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/79788564_2416141928608755_8794756020363591680_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=z6WuOLdkMzQAX-M8Fue&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfBuVWX38nF5xhZMTET_fncd2IbHHcf9v7rzCNuW2fS3PA&oe=6403B506',
    title: 'Massage',
    width: '20%',
  },
  {
    url: 'https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/175682199_2789611297928481_1985513744365003486_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=Sz657BLy8U4AX_wS-yE&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfCb6she4I12mv6LPlgPh8s4q130OAiFrunZDYUqDnLqhw&oe=6403E565',
    title: 'Hiking',
    width: '40%',
  },
  {
    url: 'https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/44907324_2143532429203041_1941490105881460736_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rTl5kb8hYTEAX8_dnbj&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfCeEKG9fBGSPWXGnS3xgVzX77iVNN9hRmbOZqXdklNZ6A&oe=6403E1D6',
    title: 'Tour',
    width: '38%',
  },
  {
    url: ' https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/80578361_2416142265275388_1750387533205733376_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=SRY8KhWGAb0AX-uSpq-&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfB2oDwPSlb-Y9wgU_sgCN6bJ3-tBtQi34Z0EDJPzPuZ4w&oe=6403E551',
    title: 'Gastronomy',
    width: '38%',
  },
  {
    url: 'https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/38696033_2096892040533747_6298983522891726848_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=O48Kuq2tOkwAX9PiA8q&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfDDk0sSXRjHKhSdCR8oXUoLo_1qs1zkUZXBWhRVnx22Jw&oe=6403A6DA',
    title: 'Shopping',
    width: '24%',
  },
  {
    url: 'https://scontent.fsyq6-1.fna.fbcdn.net/v/t1.6435-9/38714557_2096862413870043_2400393411405283328_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=9CRwKQA_gwYAX_qLTlw&tn=4AwUk3JvlTqlCbc5&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfCPfg4fsjNJ_ilifrTZsOWT3btFyOTTpBAWbti3lEO7ag&oe=6403BA2F',
    title: 'Walking',
    width: '40%',
  },
  {
    url: 'https://scontent.fsyq6-1.fna.fbcdn.net/v/t31.18172-8/13698257_1755681257988162_8934490492477096096_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9267fe&_nc_ohc=rDRchCm_ZFgAX8dJueh&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfBjj7WNCr8hjY_a-L9UopCbnFSR0TBjGQ_BMdSyCgax8A&oe=6403CD28',
    title: 'Fitness',
    width: '20%',
  },
  {
    url: 'https://scontent.fsyq6-1.fna.fbcdn.net/v/t31.18172-8/12402221_1696722923883996_6104649708007896524_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=3OBqpIUlp1sAX-69hI5&_nc_ht=scontent.fsyq6-1.fna&oh=00_AfB6_y6_UcWIjG6kP7ATaIJiy5HYJXpMA2JuNRLDzizYAA&oe=6403C6BE',
    title: 'Reading',
    width: '40%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
      Lorem ipsum dolor sit amet
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}