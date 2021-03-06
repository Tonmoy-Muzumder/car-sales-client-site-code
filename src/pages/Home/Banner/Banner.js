import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  const img = "https://unicoderbd.com/theme/html/chaka/assets/images/slider/car.png"
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://unicoderbd.com/theme/html/chaka/assets/images/slider/slider_bg.png"
      alt="Second slide"
    />
    <Carousel.Caption>
     <div className="d-flex">
     <div style={{marginTop: -150}} className="text-start">
     <h3 style={{fontSize: 60}}> <span style={{color: 'red'}}>POWER &</span> BEAUTY</h3>
      <p>Free Library’s $1M auto archives are moving to Philly’s world-famous car museum and to a Hershey attraction</p>
      <br />
      <br />
      <p style={{color: 'red'}}>2018 C - HR

</p>
      <p>20 km per liter. 800 km per tank

</p>

      <br />
      <br />
      <br />
      <button className="bg-danger text-white fs-3">BUY NOW</button>
     </div>
     
     <div><img style={{width: 800, marginLeft: 200}} src={img} alt="" /></div>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;