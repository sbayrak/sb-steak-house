import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';

/* ICONS */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faTint } from '@fortawesome/free-solid-svg-icons';
/* ICONS */

// UTILS
import {
  breakfast1,
  breakfast2,
  drinks1,
  drinks2,
  steaks1,
  steaks2,
  starters1,
  starters2,
  appetizers1,
  appetizers2,
  salads1,
  salads2,
  burgers1,
  burgers2,
  dessert1,
  dessert2,
} from '../utils/utils';

// UTILS

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
      style={{ width: '100%' }}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    minHeight: '80vh',
    backgroundColor: theme.palette.grey[900],
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  gridContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0),
    },
  },
  gridTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  Typo1: {
    padding: theme.spacing(2),
    borderBottom: `1px solid #ff3c3c`,
    color: theme.palette.grey[300],
    fontFamily: 'Pirata One',
    letterSpacing: 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(5),
    },
  },
  typoSpan: {
    color: '#ff3c3c',
  },
  gridItem: {},
  gridBottom: {
    width: '100%',
    padding: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      padding: theme.spacing(0),
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },
  wrapper: {
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  appbar: {
    background: 'transparent',
  },
  tabPanelContainer: {},
  tabPanelItem: {
    minHeight: '100px',
    overflow: 'hidden',
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      minHeight: '75px',
    },
  },
  tabPanelItemTop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  tabPanelTypo1: {
    color: '#ff3c3c',
    fontFamily: 'Pirata One',
    letterSpacing: 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
    },
  },
  tabPanelTypo2: {
    color: '#ff3c3c',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.spacing(2),
    },
  },
  tabPanelTypo3: {
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  tabPanelLeftAndRight: {},
  tab: {
    padding: '25px',
    fontSize: '18px',
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth='lg' className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid item md={12} className={`${classes.gridItem} ${classes.gridTop}`}>
          <Fade top>
            <Typography variant='h2' className={classes.Typo1} gutterBottom>
              Our <span className={classes.typoSpan}>Menu</span>
            </Typography>
          </Fade>
        </Grid>
        <Grid
          item
          md={12}
          className={`${classes.gridItem} ${classes.gridBottom}`}
        >
          <div className={classes.wrapper}>
            <AppBar position='static' className={classes.appbar} elevation={1}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons='on'
                aria-label='scrollable auto tabs example'
              >
                <Tab
                  label='Breakfast'
                  icon={<FontAwesomeIcon icon={faCoffee} size='lg' />}
                  className={classes.tab}
                  {...a11yProps(0)}
                />
                <Tab
                  label='Dessert'
                  icon={<FontAwesomeIcon icon={faIceCream} size='lg' />}
                  className={classes.tab}
                  {...a11yProps(1)}
                />
                <Tab
                  label='Starters'
                  icon={<FontAwesomeIcon icon={faHourglass} size='lg' />}
                  className={classes.tab}
                  {...a11yProps(2)}
                />
                <Tab
                  label='Steaks'
                  icon={<FontAwesomeIcon icon={faDrumstickBite} size='lg' />}
                  className={classes.tab}
                  {...a11yProps(3)}
                />
                <Tab
                  label='Salads'
                  icon={<FontAwesomeIcon icon={faCarrot} size='lg' />}
                  className={classes.tab}
                  {...a11yProps(4)}
                />
                <Tab
                  label='Appetizers'
                  icon={<FontAwesomeIcon icon={faBreadSlice} size='lg' />}
                  className={classes.tab}
                  {...a11yProps(5)}
                />
                <Tab
                  label='Burgers'
                  icon={<FontAwesomeIcon icon={faHamburger} size='lg' />}
                  className={classes.tab}
                  {...a11yProps(6)}
                />
                <Tab
                  label='Drinks'
                  icon={<FontAwesomeIcon icon={faTint} size='lg' />}
                  className={classes.tab}
                  {...a11yProps(7)}
                />
              </Tabs>
            </AppBar>
            <Fade bottom>
              <TabPanel value={value} index={0}>
                <Grid
                  container
                  className={classes.tabPanelContainer}
                  spacing={4}
                >
                  <Grid
                    container
                    item
                    md={6}
                    className={classes.tabPanelLeftAndRight}
                  >
                    {breakfast1.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid
                    container
                    item
                    md={6}
                    className={classes.tabPanelLeftAndRight}
                  >
                    {breakfast2.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid
                  container
                  className={classes.tabPanelContainer}
                  spacing={4}
                >
                  <Grid container item md={6}>
                    {dessert1.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container item md={6}>
                    {dessert2.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Grid
                  container
                  className={classes.tabPanelContainer}
                  spacing={4}
                >
                  <Grid container item md={6}>
                    {starters1.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container item md={6}>
                    {starters2.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Grid
                  container
                  className={classes.tabPanelContainer}
                  spacing={4}
                >
                  <Grid container item md={6}>
                    {steaks1.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container item md={6}>
                    {steaks2.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={4}>
                <Grid
                  container
                  className={classes.tabPanelContainer}
                  spacing={4}
                >
                  <Grid container item md={6}>
                    {salads1.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container item md={6}>
                    {salads2.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Grid
                  container
                  className={classes.tabPanelContainer}
                  spacing={4}
                >
                  <Grid container item md={6}>
                    {appetizers1.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container item md={6}>
                    {appetizers2.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={6}>
                <Grid
                  container
                  className={classes.tabPanelContainer}
                  spacing={4}
                >
                  <Grid container item md={6}>
                    {burgers1.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container item md={6}>
                    {burgers2.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={7}>
                <Grid
                  container
                  className={classes.tabPanelContainer}
                  spacing={4}
                >
                  <Grid container item md={6}>
                    {drinks1.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container item md={6}>
                    {drinks2.map((item, index) => (
                      <Grid
                        item
                        md={12}
                        className={classes.tabPanelItem}
                        key={index}
                      >
                        <Box
                          component='div'
                          className={classes.tabPanelItemTop}
                        >
                          <Typography
                            variant='h5'
                            className={classes.tabPanelTypo1}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant='h6'
                            className={classes.tabPanelTypo2}
                          >
                            {item.price}
                          </Typography>
                        </Box>
                        <Typography
                          variant='body2'
                          gutterBottom
                          paragraph
                          className={classes.tabPanelTypo3}
                        >
                          {item.desc}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </TabPanel>
            </Fade>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
