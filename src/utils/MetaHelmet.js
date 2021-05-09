import React from 'react';
import { Helmet } from 'react-helmet';

const MetaHelmet = ({ content, title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content='BAYRAK Steakhouse and Burger. Since 1995 we make the best taste steaks and burgers. The most delicious, juicy steaks you can find'
      />
      <meta
        name='title'
        content={`BAYRAK Steakhouse | ${
          content ? content : 'BAYRAK Steakhouse and Burger'
        }`}
      />
      <meta name='robots' content='noindex, nofollow' />
      <meta name='googlebot' content='noindex, nofollow' />
      {/* <meta name='canonical' href='https://'/> */}
      <meta
        name='keywords'
        content='bayrak, bayrak steakhouse, suat bayrak, sb steakhouse, steakhouse, hamburger, restaurant, cafe'
      />
      <meta name='author' content='BAYRAK Steakhouse' />
      <meta property='og:type' content='website' />
      {/* <meta property="og:url" content="https://metatags.io/" /> */}
      <meta
        property='og:title'
        content={`BAYRAK Steakhouse | ${
          content ? content : 'BAYRAK Steakhouse and Burger'
        }`}
      />
      <meta
        property='og:description'
        content='BAYRAK Steakhouse and Burger. Since 1995 we make the best taste steaks and burgers. The most delicious, juicy steaks you can find'
      />
    </Helmet>
  );
};

export default MetaHelmet;
