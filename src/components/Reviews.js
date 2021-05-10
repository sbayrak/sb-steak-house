import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { Grid, Typography, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import steak4 from '../images/steak4.png';
import RateReviewIcon from '@material-ui/icons/RateReview';

var items = [
  {
    name: 'Suat Bayrak',
    description:
      'SB Steakhouse is a great place to spend time with your family. The service is also great!',
  },
  {
    name: 'John Connor',
    description:
      'The best steak I have ever had!. Also the prices are reasonable, service is fast and good',
  },
  {
    name: 'Kyle Reese',
    description:
      'I really enjoyed the steak. The smell, juicy and delicious...  ',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    position: 'relative',
    height: '45vh',
    backgroundAttachment: 'fixed',
    backgroundImage: ` url(${steak4})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadows[5],
  },
  container: {
    padding: theme.spacing(2),
    borderBottom: '1px solid rgba(255,60,60,0.5)',
    [theme.breakpoints.down('sm')]: {
      border: 'none',
    },
  },
  gridItem: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  reviewIcon: {
    color: '#ff3c3c',
    backgroundColor: theme.palette.grey[100],
    borderRadius: '50%',
    padding: '10px',
  },
  Typo: {
    color: theme.palette.grey[200],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  Typo1: {
    fontFamily: 'Pirata One',
    letterSpacing: 3,
    [theme.breakpoints.down('sm')]: {
      fontSize: '48px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '28px',
    },
  },
  Typo2: {
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  carousel: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const Reviews = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.root}>
      <Carousel
        autoPlay
        emulateTouch={true}
        infiniteLoop
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        className={classes.carousel}
      >
        {items.map((item, index) => (
          <Container maxWidth='sm' className={classes.container} key={index}>
            <Grid container>
              <Grid item md={12} className={classes.gridItem} xs={12}>
                <RateReviewIcon
                  fontSize='large'
                  className={classes.reviewIcon}
                ></RateReviewIcon>
              </Grid>
              <Grid item md={12} className={classes.gridItem} xs={12}>
                <Typography
                  variant='h3'
                  className={`${classes.Typo} ${classes.Typo1}`}
                  gutterBottom
                >
                  {item.name}
                </Typography>
              </Grid>
              <Grid item md={12} className={classes.gridItem} xs={12}>
                <Typography
                  variant='body1'
                  className={`${classes.Typo} ${classes.Typo2}`}
                  gutterBottom
                >
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        ))}
      </Carousel>
    </Box>
  );
};

export default Reviews;
