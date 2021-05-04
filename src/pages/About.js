import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import Welcomer from '../components/Welcomer';
import restaurant1 from '../images/restaurant1.png';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridItemTop: {
    border: '1px solid red',
  },
  aboutWelcomer: {
    border: '1px solid yellow',
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
  Typo1: {
    color: theme.palette.grey[200],
  },
  Typo2: {
    color: '#ff3c3c',
  },
  Typo3: {
    color: '#fff',
    fontFamily: 'Pirata One',
    letterSpacing: theme.spacing(1.6),
  },
  Typo4: {},
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component='div'>
      <Grid container>
        <Grid item md={12} className={classes.gridItemTop}>
          <Box component='div' className={classes.aboutWelcomer}>
            <Container>
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
        <Grid item md={12}>
          <Container maxWidth='lg'>
            <Grid container>
              <Grid item md={12}>
                <Typography variant='h3'>
                  <span>Our</span> Chef Team
                </Typography>
              </Grid>
              <Grid container item md={12}>
                <Grid item md={4}>
                  <img src='/images/chef1.jpg' alt='sbsteakhousechef' />
                  <Typography variant='h5'>
                    <span>Chef</span> Suat Bayrak
                  </Typography>
                  <Typography variant='subtitle2'>Executive Chef</Typography>
                </Grid>
                <Grid item md={4}>
                  <img src='/images/chef2.jpg' alt='sbsteakhousechef' />
                  <Typography variant='h5'>
                    <span>Chef</span> Suat Bayrak
                  </Typography>
                  <Typography variant='subtitle2'>Executive Chef</Typography>
                </Grid>
                <Grid item md={4}>
                  <img src='/images/chef3.jpg' alt='sbsteakhousechef' />
                  <Typography variant='h5'>
                    <span>Chef</span> Suat Bayrak
                  </Typography>
                  <Typography variant='subtitle2'>Executive Chef</Typography>
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
