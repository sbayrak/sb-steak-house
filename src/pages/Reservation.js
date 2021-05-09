import React, { Fragment } from 'react';
import Fade from 'react-reveal';
import { Box, Container, Grid, Typography, Paper } from '@material-ui/core';
import PageHeader from '../layout/PageHeader';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
// import { MapWithAMarker } from '../components/Map';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import { makeStyles } from '@material-ui/core/styles';
import MetaHelmet from '../utils/MetaHelmet';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(15),
  },
  gridContainer: {},
  gridItemLeft: {},
  leftTypo1: {
    color: '#fff',
    fontFamily: 'Pirata One',
    letterSpacing: 3,
  },
  informationSubTitle: {
    display: 'flex',
    alignItems: 'center',
    color: '#ff3c3c',
    fontFamily: 'Pirata One',
    letterSpacing: 2,
  },
  icon: {
    paddingRight: theme.spacing(1),
  },
  informationBody: {
    color: '#fff',
  },
  gridItemLeftItems: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  paper: {
    width: '95%',
    backgroundColor: '#111',
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      width: '100%',
    },
  },
  paperItem: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
    },
  },
  Typo1: {
    color: theme.palette.grey[200],
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  Typo2: {
    fontFamily: 'Pirata One',
    letterSpacing: 3,
    color: '#bc2022',
    paddingBottom: theme.spacing(1),
    borderBottom: '1px solid rgba(255,60,60,0.5)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    },
  },
  typoTime: {
    color: '#bc2022',
    fontFamily: 'Pirata One',
    letterSpacing: 4,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  typoNumber: {
    border: '2px solid #bc2022',
    transition: '0.5s ease',
    marginTop: theme.spacing(1),
    fontFamily: 'Pirata One',
    letterSpacing: 1,
    padding: theme.spacing(1),
    color: theme.palette.grey[100],
    '&:hover': {
      border: '2px solid #ff1c1c',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
}));

const Reservation = () => {
  const classes = useStyles();

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </GoogleMap>
    ))
  );

  return (
    <Fragment>
      <MetaHelmet
        title='BAYRAK Steakhouse | Reservation'
        content='BAYRAK Steakhouse and Burger'
      ></MetaHelmet>

      <Box component='div'>
        <PageHeader title1='RESERVATION'></PageHeader>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container className={classes.gridContainer} spacing={6}>
            <Grid container item md={6} className={classes.gridItemLeft}>
              <Fade bottom>
                <Grid item md={12} xs={12}>
                  <Typography
                    variant='h4'
                    className={classes.leftTypo1}
                    gutterBottom
                  >
                    Information
                  </Typography>
                </Grid>
              </Fade>
              <Grid item md={12} className={classes.gridItemLeftItems}>
                <Fade bottom>
                  <Typography
                    variant='h5'
                    className={classes.informationSubTitle}
                  >
                    <CallIcon fontSize='small' className={classes.icon} /> Call
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    className={classes.informationBody}
                  >
                    +1 222 333 4455
                  </Typography>
                </Fade>
              </Grid>
              <Grid item md={12} className={classes.gridItemLeftItems}>
                <Fade bottom>
                  <Typography
                    variant='h5'
                    className={classes.informationSubTitle}
                  >
                    <HomeIcon fontSize='small' className={classes.icon} />{' '}
                    Address
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    className={classes.informationBody}
                  >
                    17 Kings St, Washington DC 123456 USA
                  </Typography>
                </Fade>
              </Grid>
              <Grid item md={12} className={classes.gridItemLeftItems}>
                <Fade bottom>
                  <Typography
                    variant='h5'
                    className={classes.informationSubTitle}
                  >
                    <EmailIcon fontSize='small' className={classes.icon} />{' '}
                    E-Mail
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    className={classes.informationBody}
                  >
                    example@example.com
                  </Typography>
                </Fade>
              </Grid>
            </Grid>

            <Grid item md={6}>
              <Fade bottom>
                <Paper elevation={10} className={classes.paper}>
                  <Grid item md={12} className={classes.paperItem}>
                    <Typography
                      variant='button'
                      className={classes.Typo1}
                      gutterBottom
                      paragraph
                    >
                      CALL FOR RESERVATION
                    </Typography>
                    <Typography
                      variant='h3'
                      className={classes.Typo2}
                      gutterBottom
                      paragraph
                    >
                      Opening Hours
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    md={12}
                    className={classes.paperItem}
                    spacing={2}
                  >
                    <Grid item md={6} xs={6}>
                      <Typography
                        variant='subtitle1'
                        className={classes.Typo1}
                        gutterBottom
                        paragraph
                      >
                        Monday to Friday
                      </Typography>
                      <Typography variant='h4' className={classes.typoTime}>
                        09:00
                      </Typography>
                      <Typography
                        variant='h4'
                        className={classes.typoTime}
                        gutterBottom
                      >
                        00:00
                      </Typography>
                    </Grid>
                    <Grid item md={6} xs={6}>
                      <Typography
                        variant='subtitle1'
                        className={classes.Typo1}
                        gutterBottom
                        paragraph
                      >
                        Saturday to Sunday
                      </Typography>
                      <Typography variant='h4' className={classes.typoTime}>
                        08:00
                      </Typography>
                      <Typography
                        variant='h4'
                        className={classes.typoTime}
                        gutterBottom
                      >
                        03:00
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item md={12} className={classes.paperItem}>
                    <Typography
                      variant='h4'
                      className={classes.typoNumber}
                      gutterBottom
                      paragraph
                    >
                      +1 222-333-444
                    </Typography>
                  </Grid>
                </Paper>
              </Fade>
            </Grid>
            <Grid item md={12} xs={12}>
              <MapWithAMarker
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Reservation;
