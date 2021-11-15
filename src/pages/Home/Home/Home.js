import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import About from '../../About/About';

const Home = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <About></About>
            <br />
            <br />
        </div>
    );
};

export default Home;