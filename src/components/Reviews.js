import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import steak4 from '../images/steak4.png';
import RateReviewIcon from '@material-ui/icons/RateReview';

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
  },
  container: {
    padding: theme.spacing(2),
    borderBottom: '1px solid #ff3c3c',
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
    color: theme.palette.grey[300],
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
}));

export default function Reviews(props) {
  const classes = useStyles();
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

  return (
    <Box component='div' className={classes.root}>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function Item({ item }) {
  const classes = useStyles();
  return (
    <Container maxWidth='sm' className={classes.container}>
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
  );
}
