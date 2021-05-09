import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: '100vh',
    objectFit: 'cover',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    borderRadius: '20px',
    width: '250px',
    marginRight: theme.spacing(2),
    opacity: '0.8',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      width: '175px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '165px',
    },
  },
  Typo: {
    color: '#fff',
  },
  Typo1: {
    width: '100%',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: theme.typography.fontWeightBold,
    paddingBottom: theme.spacing(2),
    color: theme.palette.grey[300],
    letterSpacing: '3px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '60px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '30px',
    },
  },
  Typo2: {
    width: '100%',
    paddingBottom: theme.spacing(7),
    color: theme.palette.grey[300],
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '13px',
    },
  },
  btn: {
    border: '1px solid #ff3c3c',
    padding: theme.spacing(1),
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    fontSize: '16px',
    transition: '0.3s ease',
    textDecoration: 'none',
    borderRadius: '5px',
    '&:hover': {
      border: `1px solid ${theme.palette.grey[200]}`,
    },
  },
}));

function Landing(props) {
  var items = [
    {
      img: '/images/steak1.png',
      typo1: 'STEAK, RIB-EYE, T-BONE',
      typo2:
        'Our meats are getting cooked for 12 hours with walnut and oak woods to get that flavour.',
      button: 'MORE',
    },
    {
      img: '/images/steak2.png',
      typo1: 'WOOD, FIRE, CHARCOAL',
      typo2:
        'In BAYRAK Steakhouse, you will not feel a different taste than the BBQ you make at home  ',
      button: 'CHEFS',
    },
    {
      img: '/images/steak3.png',
      typo1: 'QUALITY, SATISFACTION, TASTE',
      typo2:
        'Since 1995, the good quality meal comes from good quality meat. That`s why we are so careful about choosing the right meat.',
      button: 'MENU',
    },
  ];

  return (
    <Carousel interval='4000' indicators='true' navButtonsAlwaysVisible='true'>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={item.img} alt={item.img}></img>

      <Grid container className={classes.gridContainer}>
        <Fade top>
          <Grid item md={12} className={`${classes.gridItem}`}>
            <img
              src='/images/bull2.png'
              alt='sbsteakhouse'
              className={classes.logo}
            ></img>
          </Grid>
        </Fade>
        <Grid item md={12} className={`${classes.gridItem}`}>
          <Fade bottom>
            <Typography
              variant='h3'
              className={`${classes.Typo} ${classes.Typo1} `}
            >
              {item.typo1}
            </Typography>
          </Fade>
        </Grid>
        <Grid item md={12} className={`${classes.gridItem}`}>
          <Fade bottom>
            <Typography
              variant='subtitle1'
              className={`${classes.Typo} ${classes.Typo2}`}
            >
              {item.typo2}
            </Typography>
          </Fade>
        </Grid>
        <Grid item md={12} className={`${classes.gridItem}`}>
          <Fade bottom>
            <Button variant='outlined' style={{ border: 'none' }}>
              <a
                href='#!'
                rel='noreferrer noopener'
                className={`${classes.Typo} ${classes.btn} `}
              >
                {item.button}
              </a>
            </Button>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
