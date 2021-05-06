import React from 'react';
import { Container, Box, Grid, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.grey[900],
  },
  gridContainerTop: {
    marginBottom: theme.spacing(5),
  },
  gridItemTop: {
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5),
      padding: theme.spacing(2),
    },
  },
  logo: {
    borderRadius: '20px',
    width: '100px',
  },
  Typo1: {
    fontFamily: 'Pirata One',
    letterSpacing: 3,
    color: '#fff',
  },
  Typo2: {
    color: '#fff',
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      letterSpacing: 5,
    },
  },
  Typo3: {
    color: theme.palette.grey[300],
  },
  Typo4: {
    fontFamily: 'Pirata One',
    letterSpacing: 3,
    color: '#ff3c3c',
    borderBottom: '1px solid rgba(188,32,34,0.5)',
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  Typo5: {
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
  },
  socialUl: {
    listStyle: 'none',
    display: 'flex',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {},
  },
  socialLi: {
    paddingLeft: theme.spacing(1),
  },
  socialLink: {
    border: '2px solid #ff3c3c',
    padding: theme.spacing(1),
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    transition: '0.5s ease',
    '&:hover': {
      border: '2px solid #fff',
    },
  },
  gridItemBottom: {
    borderTop: '1px solid rgba(188,32,34,0.5)',
    paddingTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  typoLink1: {
    textDecoration: 'none',
    color: theme.palette.grey[300],
  },
  Typo6: {
    color: theme.palette.grey[300],
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component='div' className={classes.box}>
      <img
        src='/images/waveFooter.svg'
        alt='sbsteakhouse'
        style={{ backgroundColor: '#333' }}
      />
      <Container>
        <Grid container>
          <Grid container item md={12} className={classes.gridContainerTop}>
            <Grid item md={3} className={classes.gridItemTop} xs={12}>
              <img
                src='/images/bull2.png'
                alt='sbsteakhouse'
                className={classes.logo}
              />
              <Typography variant='h3' className={classes.Typo1}>
                BAYRAK
              </Typography>
              <Typography
                variant='subtitle2'
                className={classes.Typo2}
                gutterBottom
                paragraph
              >
                STEAKHOUSE
              </Typography>
              <Typography variant='body2' className={classes.Typo3}>
                Since 1995 we are delivering the most delicious steaks...
              </Typography>
            </Grid>
            <Grid item md={3} className={classes.gridItemTop} xs={12}>
              <Typography
                variant='h5'
                className={classes.Typo4}
                gutterBottom
                paragraph
              >
                Phone & E-mail
              </Typography>
              <Typography
                variant='body2'
                className={classes.Typo5}
                gutterBottom
              >
                +1 222-333-4455
              </Typography>
              <Typography variant='body2' className={classes.Typo5}>
                example@example.com
              </Typography>
            </Grid>
            <Grid item md={3} className={classes.gridItemTop} xs={12}>
              <Typography
                variant='h5'
                className={classes.Typo4}
                gutterBottom
                paragraph
              >
                Address
              </Typography>
              <Typography
                variant='body2'
                className={classes.Typo5}
                gutterBottom
              >
                17 Kings St, Washington DC
              </Typography>
              <Typography variant='body2' className={classes.Typo5}>
                123456 USA
              </Typography>
            </Grid>
            <Grid item md={3} className={classes.gridItemTop} xs={12}>
              <Typography
                variant='h5'
                className={classes.Typo4}
                gutterBottom
                paragraph
              >
                Social Media
              </Typography>
              <ul className={classes.socialUl}>
                <li className={classes.socialLi}>
                  <a
                    href='#!'
                    target='_blank'
                    rel='noreferrer noopener'
                    className={classes.socialLink}
                  >
                    <FacebookIcon></FacebookIcon>
                  </a>
                </li>
                <li className={classes.socialLi}>
                  <a
                    href='#!'
                    target='_blank'
                    rel='noreferrer noopener'
                    className={classes.socialLink}
                  >
                    <TwitterIcon></TwitterIcon>
                  </a>
                </li>
                <li className={classes.socialLi}>
                  <a
                    href='#!'
                    target='_blank'
                    rel='noreferrer noopener'
                    className={classes.socialLink}
                  >
                    <InstagramIcon></InstagramIcon>
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Grid container item md={12} className={classes.gridItemBottom}>
            <Grid item md={6} xs={6}>
              <Typography variant='subtitle2' className={classes.Typo6}>
                &copy; 2021, SB Steakhouse. All rights reserved.
              </Typography>
            </Grid>
            <Grid item md={6} container justify='flex-end' xs={6}>
              <Typography variant='subtitle2' className={classes.Typo5}>
                <a
                  href='#!'
                  target='_blank'
                  rel='noreferrer noopener'
                  className={classes.typoLink1}
                >
                  Terms & Conditions
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
