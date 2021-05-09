import React, { Fragment } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  AppBar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from '../layout/PageHeader';
import Fade from 'react-reveal';
import PropTypes from 'prop-types';

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
import MetaHelmet from '../utils/MetaHelmet';

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
    marginTop: theme.spacing(15),
    boxShadow: theme.shadows[10],
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  gridRootContainer: {},
  gridContainerLeftAndRight: {
    padding: theme.spacing(1),
  },
  Typo1: {
    color: theme.palette.grey[200],
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  Typo2: {
    color: theme.palette.grey[100],
    fontFamily: 'Pirata One',
    letterSpacing: 4,
  },
  typo2Span: {
    color: '#ff3c3c',
  },
  Typo3: {
    color: theme.palette.grey[200],
  },
  gridLeftMenu: {},
  gridLeftMenuItem: {
    padding: theme.spacing(1),
  },
  menuTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Typo4: {
    color: '#ff3c3c',
    fontFamily: 'Pirata One',
    letterSpacing: 1,
    marginBottom: theme.spacing(1),
  },
  Typo5: {
    color: theme.palette.grey[200],
  },
  gridItem: {},
  wrapper: {
    width: '95%',
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
    minHeight: '50px',
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
    padding: '15px',
    fontSize: '16px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  gridContainer: {
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  gridImgItem: {
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  imgs: {
    width: '100%',
    boxShadow: theme.shadows[10],
    transition: '0.5s ease',
    '&:hover': {
      transform: 'scale(0.99)',
    },
  },
  imgsTop: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
      <MetaHelmet title='BAYRAK Steakhouse | Menu'></MetaHelmet>

      <Box component='div'>
        <PageHeader title1={'MENU'}></PageHeader>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container className={classes.gridRootContainer}>
            <Grid
              container
              item
              md={9}
              className={classes.gridContainerLeftAndRight}
            >
              <Grid item md={12}>
                <Fade bottom>
                  <Typography variant='button' className={classes.Typo1}>
                    OUR MENU
                  </Typography>
                  <Typography variant='h3' className={classes.Typo2}>
                    <span className={classes.typo2Span}>Menu</span> List
                  </Typography>
                </Fade>
              </Grid>

              <Grid
                item
                md={12}
                className={`${classes.gridItem} ${classes.gridBottom}`}
              >
                <div className={classes.wrapper}>
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
                </div>
              </Grid>
            </Grid>
            <Grid container item md={3}>
              <AppBar
                position='static'
                className={classes.appbar}
                elevation={1}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant='scrollable'
                  scrollButtons='on'
                  aria-label='scrollable auto tabs example'
                  orientation='vertical'
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
            </Grid>
            <Grid container className={classes.gridContainer}>
              <Grid container item md={12} className={classes.gridItem} xs={12}>
                <Grid item md={6} className={classes.gridImgItem} xs={12}>
                  <img
                    src='/images/welcomer1x550x550.jpg'
                    alt='sbsteakhouse'
                    className={`${classes.imgs} ${classes.imgsTop}`}
                  />
                </Grid>
                <Grid item md={6} className={classes.gridImgItem} xs={12}>
                  <img
                    src='/images/welcomer2x550x550.jpg'
                    alt='sbsteakhouse'
                    className={`${classes.imgs} ${classes.imgsTop}`}
                  />
                </Grid>
              </Grid>
              <Grid container item md={12}>
                <Grid item md={12} className={classes.gridImgItem}>
                  <img
                    src='/images/welcomer3xlong.jpg'
                    alt='sbsteakhouse'
                    className={`${classes.imgs} ${classes.imgsTop}`}
                  />
                </Grid>
              </Grid>
              <Grid container item md={12}>
                <Grid item md={6} className={classes.gridImgItem}>
                  <img
                    src='/images/steak6.jpg'
                    alt='sbsteakhouse'
                    className={`${classes.imgs} ${classes.imgsTop}`}
                  />
                </Grid>
                <Grid item md={6} className={classes.gridImgItem}>
                  <img
                    src='/images/steak7.jpg'
                    alt='sbsteakhouse'
                    className={`${classes.imgs} ${classes.imgsTop}`}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Menu;
