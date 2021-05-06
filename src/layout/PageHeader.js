import React, { Fragment } from 'react';
import { Grid, Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import restaurant1 from '../images/restaurant1.png';

const useStyles = makeStyles((theme) => ({
  gridItemTop: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  aboutWelcomer: {
    height: '50vh',
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
}));

const PageHeader = ({ title1, title2 }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={12} className={classes.gridItemTop}>
        <Box component='div' className={classes.aboutWelcomer}>
          <Container className={classes.container}>
            <Typography variant='h5' className={classes.Typo1}>
              {title1 ? title1 : 'EMPTY'}
            </Typography>
            <Typography variant='h3' className={classes.Typo2}>
              {title2 ? (
                title2
              ) : (
                <Fragment>
                  <span className={classes.Typo4}>WELCOME TO </span>
                  <span className={classes.Typo3}>BAYRAK</span>
                </Fragment>
              )}
            </Typography>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
