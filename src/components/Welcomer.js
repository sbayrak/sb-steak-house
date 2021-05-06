import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
    // @TODO ARAYA VARAKLI EKLEDIKTEN SONRA MARGIN TOP SIL
  },
  left: {
    padding: theme.spacing(2),
    paddingRight: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingRight: theme.spacing(1),
    },
  },
  leftGridItem: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(0),
    },
  },
  Typos: {
    color: theme.palette.grey[300],
  },
  Typo1: {
    color: '#ff3c3c',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 3,
  },
  bayrak: {
    color: '#fff',
    fontFamily: 'Pirata One, sans-serif',
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: theme.spacing(1),
  },
  Typo2: {
    letterSpacing: 3,
    fontFamily: 'Pirata One, sans-serif',
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
  Typo3: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  imgItems: {
    objectFit: 'contain',
    width: '100%',
    borderRadius: '5px',
    transition: '0.5s ease',
    '&:hover': {
      transform: 'scale(0.99)',
    },
  },
  viewMore: {
    textDecoration: 'none',
    color: '#fff',
    padding: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    boxShadow: theme.shadows[5],
    borderRadius: '5px',
    transition: '0.9s ease',
    background:
      'linear-gradient(0deg, rgba(254,69,69,1) 0%, rgba(255,51,51,1) 48%, rgba(255,65,65,1) 100%)',
    '&:hover': {
      background:
        'linear-gradient(0deg, rgba(254,69,69,1) 0%, rgba(254,103,103,1) 48%, rgba(255,65,65,1) 100%)',
    },
  },
}));

const Welcomer = () => {
  const classes = useStyles();

  const imgs = [
    {
      img: '/images/welcomer3.jpg',
      cols: 12,
    },
    {
      img: '/images/welcomer2.jpg',
    },
    {
      img: '/images/welcomer1.jpg',
    },
  ];

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container>
        <Grid item md={6} className={classes.left}>
          <Grid item md={12} className={`${classes.leftGridItem}`}>
            <Typography
              variant='h6'
              className={`${classes.Typos} ${classes.Typo2}`}
            >
              Steakhouse and Burgers
            </Typography>
            <Typography
              variant='h4'
              className={`${classes.Typos} ${classes.Typo1}`}
              gutterBottom
              paragraph
            >
              Welcome to <span className={classes.bayrak}>BAYRAK</span>
            </Typography>
          </Grid>
          <Grid item md={12} className={`${classes.leftGridItem}`}>
            <Typography
              variant='body1'
              gutterBottom
              paragraph
              className={`${classes.Typos} ${classes.Typo3}`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae, Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Dolorum, ipsum!
            </Typography>
          </Grid>
          <Grid item md={12} className={`${classes.leftGridItem}`}>
            <Typography
              variant='body1'
              gutterBottom
              paragraph
              className={`${classes.Typos}  ${classes.Typo3}`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae, porro. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Cum recusandae vel facilis accusamus aperiam
              necessitatibus sed minima sunt delectus iusto.
            </Typography>
          </Grid>
          <Grid item md={12} className={`${classes.leftGridItem}`}>
            <Typography
              variant='body1'
              gutterBottom
              paragraph
              className={`${classes.Typos}  ${classes.Typo3}`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae, porro. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti voluptatum ad neque rem ratione aut
              enim? Accusantium repellendus nemo fugit! Itaque, vitae sequi
              error reiciendis nulla amet maiores ab dignissimos.
            </Typography>
          </Grid>
          <Grid item md={12} className={`${classes.leftGridItem}`}>
            <a href='#!' rel='noreferrer noopener' className={classes.viewMore}>
              VIEW MORE
            </a>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Grid container md={12} spacing={2}>
            {imgs.map((item, index) => (
              <Grid
                item
                md={item.cols ? item.cols : 6}
                xs={item.cols ? item.cols : 6}
              >
                <img
                  src={item.img}
                  alt='sbsteakhouse'
                  className={classes.imgItems}
                ></img>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Welcomer;
