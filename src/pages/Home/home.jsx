import React from 'react';

import { Product } from 'Components';

import './Home.css';

const Home = () => {
  return (
    <div id="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <h1 className="home__brandTitle">Top Brands On Offer</h1>

      <div className="home__row">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Product key={item} />
        ))}
      </div>

      <h1 className="home__brandTitle">Most Loved Brands</h1>
      <div className="home__row">
        {[1, 2, 5].map((item, index) => (
          <Product key={item} />
        ))}
      </div>

      <h1 className="home__brandTitle">Shop By Category</h1>
      <div className="home__row">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Product key={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
