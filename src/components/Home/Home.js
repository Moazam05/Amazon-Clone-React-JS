import React from 'react';
import './Home.css';

import Product from '../Product/Product';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='home_container'>
          <img
            className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            alt='Home Logo'
          />
          <div className='home_row'>
            <Product
              id='1'
              title='Learning React: Modern Patterns for Developing React Apps'
              price={39.21}
              image='https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg'
              rating={5}
            />
            <Product
              id='2'
              title='ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel i5-1035G1 CPU, 8GB RAM, 512GB SSD, Backlit KB, Fingerprint, Windows 10, Slate Gray, F512JA-AS54'
              price={599.99}
              image='https://images-na.ssl-images-amazon.com/images/I/81fstJkUlaL._AC_SL1500_.jpg'
              rating={4}
            />
          </div>
          <div className='home_row'>
            <Product
              id='3'
              title='AmazonBasics 15.6" Laptop Bag Professional - Black'
              price={17.99}
              image='https://images-na.ssl-images-amazon.com/images/I/81R5dG1XyLL._AC_SL1500_.jpg'
              rating={3}
            />
            <Product
              id='4'
              title='Samsung Galaxy A51 Factory Unlocked Cell Phone | 128GB of Storage | Long Lasting Battery | Single SIM | GSM or CDMA Compatible | US Version | Black'
              price={399.99}
              image='https://images-na.ssl-images-amazon.com/images/I/71QZcCFQcAL._AC_SL1500_.jpg'
              rating={5}
            />
            <Product
              id='5'
              title='IP68 Swimming Waterproof Smartwatch Fitness Tracker Fitness Watch Heart Rate Monitor Watches for Men Women'
              price={178.95}
              image='https://images-na.ssl-images-amazon.com/images/I/617aPQkNYHL._AC_SL1000_.jpg'
              rating={4}
            />
          </div>
          <div className='home_row'>
            <Product
              id='5'
              title='Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI'
              price={129.99}
              image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
