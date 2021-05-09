import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import PageHeader from '../layout/PageHeader';
import Fade from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(20),
    paddingBottom: theme.spacing(5),
  },
  Typo1: {
    color: '#fff',
    fontFamily: 'Pirata One',
    letterSpacing: 3,
    borderBottom: '1px solid #ff3c3c',
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  gridContainer: {
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(3),
  },
  gridItem: {},
  gridImgItem: {
    padding: theme.spacing(2),
  },
  imgs: {
    boxShadow: theme.shadows[10],
    transition: '0.5s ease',
    '&:hover': {
      transform: 'scale(0.99)',
    },
  },
  reservation: {
    textDecoration: 'none',
    color: '#fff',
    border: '2px solid #ff3c3c',
    borderRadius: '5px',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: '#212121',
    marginBottom: theme.spacing(2),
    transition: '0.5s ease',
    '&:hover': {
      backgroundColor: '#333',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
    },
  },
}));

const Gallery = () => {
  const classes = useStyles();
  return (
    <Box component='div'>
      <PageHeader title1={'GALLERY'}></PageHeader>
      <Container className={classes.container}>
        <Grid container>
          <Grid container item md={12}>
            <Typography variant='h2' className={classes.Typo1}>
              Our Gallery
            </Typography>
            <img
              src='/images/waveGallery6.svg'
              alt='sbsteakhouse'
              style={{ background: 'transparent' }}
            />
          </Grid>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <Grid container item md={12} className={classes.gridItem}>
            <Fade top>
              <Grid item md={12} className={classes.gridImgItem}>
                <img
                  src='/images/welcomer1x550x550.jpg'
                  alt='sbsteakhouse'
                  style={{ width: '100%' }}
                  className={classes.imgs}
                />
              </Grid>

              <Grid item md={12} className={classes.gridImgItem}>
                <img
                  src='/images/welcomer2x550x550.jpg'
                  alt='sbsteakhouse'
                  style={{ width: '100%' }}
                  className={classes.imgs}
                />
              </Grid>
            </Fade>
          </Grid>
          <Grid container item md={12}>
            <Fade left>
              <Grid item md={12} className={classes.gridImgItem}>
                <img
                  src='/images/welcomer3xlong.jpg'
                  alt='sbsteakhouse'
                  className={classes.imgs}
                />
              </Grid>
            </Fade>
          </Grid>
          <Grid container item md={12}>
            <Grid item md={6} className={classes.gridImgItem}>
              <img
                src='/images/steak6.jpg'
                alt='sbsteakhouse'
                style={{ width: '100%' }}
                className={classes.imgs}
              />
            </Grid>
            <Grid item md={6} className={classes.gridImgItem}>
              <img
                src='/images/steak7.jpg'
                alt='sbsteakhouse'
                style={{ width: '100%' }}
                className={classes.imgs}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container item md={12}>
            <img
              src='/images/waveGallery7.svg'
              alt='sbsteakhouse'
              style={{ background: 'transparent' }}
            />
            <Typography variant='h4' className={classes.Typo1}>
              <a
                href='/reservation'
                target='_blank'
                rel='noreferrer noopener'
                className={classes.reservation}
              >
                Reservation
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
