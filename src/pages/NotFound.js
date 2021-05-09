import React, { Fragment } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '1px solid red',
    marginTop: theme.spacing(20),
  },
  Typo1: {
    color: theme.palette.grey[100],
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  img: {
    width: '400px',
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
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Container className={classes.container}>
        <Button variant='contained' className={classes.btn}>
          <a href='/' rel='noreferrer noopener' className={classes.btnLink}>
            GO BACK
          </a>
        </Button>

        <Typography variant='h3' className={classes.Typo1} gutterBottom>
          Sorry, <br></br> we couldn`t find the page you requested.
        </Typography>
        <img
          src='/images/notfound.svg'
          alt='sbsteakhouse'
          className={classes.img}
        ></img>
      </Container>
    </Fragment>
  );
};

export default NotFound;
