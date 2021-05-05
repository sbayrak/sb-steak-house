import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import Welcomer from '../components/Welcomer';
import restaurant1 from '../images/restaurant1.png';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridItemTop: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  aboutWelcomer: {
    height: '55vh',
    width: '100%',
    backgroundImage: `url('${restaurant1}')`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {},
  Typo1: {
    color: theme.palette.grey[200],
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  Typo2: {
    color: '#ff3c3c',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  Typo3: {
    color: '#fff',
    fontFamily: 'Pirata One',
    letterSpacing: theme.spacing(1.6),
    borderBottom: '1px solid #ff3c3c',
    [theme.breakpoints.down('sm')]: {
      borderBottom: 'none',
    },
  },
  Typo4: {
    fontFamily: 'Pirata One',
    letterSpacing: theme.spacing(1),
    borderBottom: '1px solid #ff3c3c',
    [theme.breakpoints.down('sm')]: {
      borderBottom: 'none',
    },
  },
  gridContainerBottom: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  gridItemBottomTitle: {},
  Typo5: {
    fontFamily: 'Pirata One',
    letterSpacing: 3,
    color: '#fff',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(5),
  },
  typoSpan: {
    color: '#ff3c3c',
    borderBottom: '1px solid #ff3c3c',
  },
  chefImgs: {
    borderRadius: '5px',
    transition: '0.5s ease',
    boxShadow: theme.shadows[10],
    '&:hover': {
      transform: 'scale(0.99)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '250px',
    },
  },
  chefTypo1: {
    paddingTop: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      fontSize: '16px',
    },
  },
  chefTypo1Span: {
    color: '#ff3c3c',
    fontFamily: 'Pirata One',
    letterSpacing: 3,
  },
  chefTypo2: {
    textAlign: 'center',
    color: theme.palette.grey[200],
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
      fontSize: '12px',
    },
  },
  chefTypo2Span: {
    color: '#ff3c3c',
    fontFamily: 'Pirata One',
    letterSpacing: 3,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component='div'>
      <Grid container>
        <Grid item md={12} className={classes.gridItemTop}>
          <Box component='div' className={classes.aboutWelcomer}>
            <Container className={classes.container}>
              <Typography variant='h5' className={classes.Typo1}>
                ABOUT US
              </Typography>
              <Typography variant='h3' className={classes.Typo2}>
                <span className={classes.Typo4}>WELCOME TO </span>
                <span className={classes.Typo3}>BAYRAK</span>
              </Typography>
            </Container>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Welcomer></Welcomer>
        </Grid>
        <Grid item md={12} className={classes.gridContainerBottom}>
          <Container maxWidth='lg'>
            <Grid container>
              <Grid
                item
                md={12}
                className={classes.gridItemBottomTitle}
                xs={12}
              >
                <Typography variant='h3' className={classes.Typo5}>
                  <span className={classes.typoSpan}>Our</span> Chef Team
                </Typography>
              </Grid>
              <Grid container item md={12} spacing={3}>
                <Grid item md={4} xs={6}>
                  <img
                    src='/images/chef1.jpg'
                    alt='sbsteakhousechef'
                    className={classes.chefImgs}
                  />
                  <Typography variant='h5' className={classes.chefTypo1}>
                    <span className={classes.chefTypo1Span}>Chef.</span> Suat
                    Bayrak
                  </Typography>
                  <Typography variant='subtitle2' className={classes.chefTypo2}>
                    Executive Chef
                  </Typography>
                </Grid>
                <Grid item md={4} xs={6}>
                  <img
                    src='/images/chef2.jpg'
                    alt='sbsteakhousechef'
                    className={classes.chefImgs}
                  />
                  <Typography variant='h5' className={classes.chefTypo1}>
                    <span className={classes.chefTypo1Span}>Chef.</span> Suat
                    Bayrak
                  </Typography>
                  <Typography variant='subtitle2' className={classes.chefTypo2}>
                    Executive Chef
                  </Typography>
                </Grid>
                <Grid item md={4} xs={6}>
                  <img
                    src='/images/chef3.jpg'
                    alt='sbsteakhousechef'
                    className={classes.chefImgs}
                  />
                  <Typography variant='h5' className={classes.chefTypo1}>
                    <span className={classes.chefTypo1Span}>Chef.</span> Suat
                    Bayrak
                  </Typography>
                  <Typography variant='subtitle2' className={classes.chefTypo2}>
                    Executive Chef
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
