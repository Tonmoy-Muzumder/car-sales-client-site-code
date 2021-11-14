import React from 'react';

const About = () => {
    const aboutImg = "https://unicoderbd.com/theme/html/chaka/assets/images/thumb/height1.jpg";
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div>
                <img className="img-fluid text-danger" src={aboutImg} alt="" />
            </div>
            
            <div className="text-start container my-4">
                <p>Learn</p>
            <h1 className="text-danger fs-1 ">About our company info.</h1>

            <p>Man have some dream. Every man wants to drive Car. Because it's style you know. <br />
            You can buy car in our website. Choose your car & fulfill your Dream! <br /> 
             </p>
<br />
<br />


            <h2 className="text-danger">We will give you:</h2>

            <div className="d-flex">
            <div>
            <p>•Expert Drivers</p>
            <p>•Fast booking confirmation</p>
            <p>•Qucik response and support</p>
            <p>•Free Registration</p>
            <div>
            <p>•Online documentation</p>
            <p>•Customer satisfaction</p>
            <p>•Grow your business</p>
            <p>•Low Rent Cost</p>
            </div>
                </div>
            </div>
            <br />
            <br />
            <button className="fs-5 bg-danger text-white">Know More</button>
            </div>
           
        </div>
    );
};

export default About;