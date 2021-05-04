import React, { Fragment } from 'react';
import Landing from './Landing';
import Ornament from '../layout/Ornament';
import Welcomer from './Welcomer';
import MenuSection from './MenuSection';
import Reviews from './Reviews';
import Information from './Information';

const Home = () => {
  return (
    <Fragment>
      <Landing></Landing>
      <Ornament></Ornament>
      <Welcomer></Welcomer>
      <Ornament></Ornament>
      <MenuSection></MenuSection>
      <Ornament></Ornament>
      <Reviews></Reviews>
      <Ornament></Ornament>
      <Information></Information>
      <Ornament></Ornament>
    </Fragment>
  );
};

export default Home;
