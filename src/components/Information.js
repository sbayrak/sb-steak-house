import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import steak5 from '../images/steak5.png';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(15),
    height: '75vh',
    backgroundImage: `url('${steak5}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadows[5],
  },
  container: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  gridContainer: {},
  gridLeftContainer: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  gridLeftItem: {
    padding: theme.spacing(5),
    marginRight: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  Typo: {
    color: '#fff',
    fontFamily: 'Pirata One',
    letterSpacing: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  btn: {
    backgroundColor: '#bc2022',
    transition: '0.5s ease',
    padding: '5px 10px',
    boxShadow: theme.shadows[50],
    '&:hover': {
      backgroundColor: '#ff3c3c',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(0),
      padding: 0,
    },
  },
  btnLink: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    textDecoration: 'none',
    color: '#fff',
  },
  gridRightContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  paper: {
    width: '100%',
    backgroundColor: '#111',
    boxShadow: theme.shadows[10],
    padding: theme.spacing(5),
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      width: '60%',
    },
  },
  paperItem: {
    marginBottom: theme.spacing(2),
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
    paddingBottom: theme.spacing(2),
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

const Information = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.box}>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container item className={classes.gridContainer}>
          <Grid
            container
            item
            md={8}
            xs={12}
            className={classes.gridLeftContainer}
          >
            <Grid item md={12} className={classes.gridLeftItem} xs={12}>
              <Typography variant='h4' className={classes.Typo}>
                View more on our contact details...
              </Typography>
            </Grid>
            <Grid item md={12} className={classes.gridLeftItem} xs={12}>
              <Button variant='contained' className={classes.btn}>
                <a
                  href='#!'
                  rel='noreferrer noopener'
                  className={classes.btnLink}
                >
                  CONTACT
                </a>
              </Button>
            </Grid>
            <Grid
              item
              md={12}
              className={classes.gridLeftItem}
              container
              justify='flex-end'
              xs={12}
            >
              <Typography variant='h5' className={classes.Typo}>
                Read more on about us and our chefs...
              </Typography>
            </Grid>
            <Grid
              item
              md={12}
              className={classes.gridLeftItem}
              container
              justify='flex-end'
              xs={12}
            >
              <Button variant='contained' className={classes.btn}>
                <a
                  href='#!'
                  rel='noreferrer noopener'
                  className={classes.btnLink}
                >
                  ABOUT US
                </a>
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={4}
            xs={12}
            className={classes.gridRightContainer}
          >
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Information;
