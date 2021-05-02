import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
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
    border: '1px solid red',
    marginTop: theme.spacing(5),
  },
  gridContainer: {
    border: '1px solid green',
    padding: theme.spacing(2),
  },
  gridTop: {
    border: '1px solid yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  Typo1: {
    border: '1px solid blue',
    padding: theme.spacing(2),
    borderBottom: `1px solid #ff3c3c`,
    color: theme.palette.grey[300],
    fontFamily: 'Pirata One',
    letterSpacing: 3,
  },
  typoSpan: {
    color: '#ff3c3c',
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
          <Typography variant='h3' className={classes.Typo1} gutterBottom>
            Our <span className={classes.typoSpan}>Menu</span>
          </Typography>
        </Grid>
        <Grid item md={12} className={`${classes.gridItem}`}>
          <AppBar position='static' color='default'>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              variant='scrollable'
              scrollButtons='auto'
              aria-label='scrollable auto tabs example'
            >
              <Tab label='Item One' {...a11yProps(0)} />
              <Tab label='Item Two' {...a11yProps(1)} />
              <Tab label='Item Three' {...a11yProps(2)} />
              <Tab label='Item Four' {...a11yProps(3)} />
              <Tab label='Item Five' {...a11yProps(4)} />
              <Tab label='Item Six' {...a11yProps(5)} />
              <Tab label='Item Seven' {...a11yProps(6)} />
              <Tab label='Item Eight' {...a11yProps(7)} />
              <Tab label='Item Nine' {...a11yProps(8)} />
              <Tab label='Item Ten' {...a11yProps(9)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item Five
          </TabPanel>
          <TabPanel value={value} index={5}>
            Item Six
          </TabPanel>
          <TabPanel value={value} index={6}>
            Item Seven
          </TabPanel>
          <TabPanel value={value} index={7}>
            Item Eight
          </TabPanel>
          <TabPanel value={value} index={8}>
            Item Nine
          </TabPanel>
          <TabPanel value={value} index={9}>
            Item Ten
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
}
