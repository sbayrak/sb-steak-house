import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import InfoIcon from '@material-ui/icons/Info';
import TheatersIcon from '@material-ui/icons/Theaters';
import EventSeatIcon from '@material-ui/icons/EventSeat';
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  left: {
    width: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      width: '50%',
      padding: theme.spacing(2),
    },
  },
  leftImg: {
    borderRadius: '20px',
    width: '100px',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '75px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '65px',
    },
  },
  typos: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  Typo1: {
    fontFamily: 'Pirata One',
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
    },
  },
  Typo2: {
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
      letterSpacing: 5,
    },
  },
  right: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '50%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '40%',
    },
  },
  desktopUl: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyle: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  desktopLi: {
    padding: theme.spacing(1),
    borderBottom: `1px solid ${theme.palette.grey[800]}`,
    transition: '0.3s ease',
    '&:hover': {
      borderBottom: `1px solid #FF3C3C`,
    },
  },
  desktopLiA: {
    textDecoration: 'none',
    color: '#fff',
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
  },
  mobile: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },
  },
  menuBtn: {
    color: '#fff',
    float: 'right',
    marginRight: theme.spacing(3),
  },
  drawerUl: {
    listStyle: 'none',
    padding: theme.spacing(4),
  },
  drawerLi: {
    color: '#fff',
    listStyle: 'none',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  drawerLiA: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  drawerIcon: {
    paddingRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const desktop = (
    <ul className={classes.desktopUl}>
      <li className={classes.desktopLi}>
        <a href='#!' className={classes.desktopLiA}>
          HOME
        </a>
      </li>
      <li className={classes.desktopLi}>
        <a href='#!' className={classes.desktopLiA}>
          MENU
        </a>
      </li>
      <li className={classes.desktopLi}>
        <a href='#!' className={classes.desktopLiA}>
          ABOUT
        </a>
      </li>
      <li className={classes.desktopLi}>
        <a href='#!' className={classes.desktopLiA}>
          GALLERY
        </a>
      </li>
      <li
        className={classes.desktopLi}
        style={{ border: '2px solid #ff3c3c', borderRadius: '5px' }}
      >
        <a href='#!' className={classes.desktopLiA}>
          RESERVATION
        </a>
      </li>
    </ul>
  );
  const mobile = (
    <div className={classes.mobile}>
      <IconButton onClick={(e) => setOpen(!open)} className={classes.menuBtn}>
        <MenuIcon fontSize='large'></MenuIcon>
      </IconButton>
      <SwipeableDrawer
        open={open}
        anchor='left'
        onClose={(e) => setOpen(!open)}
      >
        <ul className={classes.drawerUl}>
          <li className={classes.drawerLi}>
            <a href='#!' className={classes.drawerLiA}>
              <HomeIcon className={classes.drawerIcon}></HomeIcon> HOME
            </a>
          </li>
          <li className={classes.drawerLi}>
            <a href='#!' className={classes.drawerLiA}>
              <RestaurantMenuIcon
                className={classes.drawerIcon}
              ></RestaurantMenuIcon>
              MENU
            </a>
          </li>
          <li className={classes.drawerLi}>
            <a href='#!' className={classes.drawerLiA}>
              <InfoIcon className={classes.drawerIcon}></InfoIcon> ABOUT
            </a>
          </li>
          <li className={classes.drawerLi}>
            <a href='#!' className={classes.drawerLiA}>
              <TheatersIcon className={classes.drawerIcon}></TheatersIcon>
              GALLERY
            </a>
          </li>
          <li className={classes.drawerLi}>
            <a href='#!' className={classes.drawerLiA}>
              <EventSeatIcon className={classes.drawerIcon}></EventSeatIcon>
              RESERVATION
            </a>
          </li>
        </ul>
      </SwipeableDrawer>
    </div>
  );
  return (
    <AppBar
      position='fixed'
      style={{ backgroundColor: 'transparent' }}
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.left}>
          <a href='#!'>
            <img
              src='/images/bull2.png'
              alt='sb_steakhouse'
              className={classes.leftImg}
            />
          </a>

          <div className={classes.typos}>
            <a href='#!' style={{ textDecoration: 'none', color: '#fff' }}>
              <Typography className={classes.Typo1} variant='h3'>
                BAYRAK
              </Typography>
              <Typography className={classes.Typo2} variant='subtitle2'>
                STEAKHOUSE
              </Typography>
            </a>
          </div>
        </div>
        <div className={classes.right}>
          {desktop}

          {mobile}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
