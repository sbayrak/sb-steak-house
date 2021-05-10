import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
  },
  ornament: {
    width: '400px',
    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },
  },
}));

const Ornament = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg' className={classes.container}>
      <img
        src='/images/gildedred2.png'
        alt='sbsteakhouse'
        className={classes.ornament}
      />
    </Container>
  );
};

export default Ornament;
