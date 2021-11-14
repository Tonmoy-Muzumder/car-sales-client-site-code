import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, img, name, description, price, time} = product;
    return (
        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <div style={{backgroundColor: 'lightBlue'}} className="my-5 rounded">
           <img className="img-fluid mt-3 rounded w-100" src={img} alt="" />
            <div className="text-start m-4 ">
            <h1 style={{color: 'coral', marginBottom: 15}}>{name}</h1>
            <h5 style={{ marginBottom: 15}}>{description}</h5>

            <div style={{color: 'red', marginBottom: 15}} className="d-flex justify-content-between">
                <p>{price}</p>
                <p>{time}</p>
            </div>
            
            <Link to={`/buying/${_id}`}>
                <button className="btn btn-primary my-5">BUY NOW</button>
            </Link>
            </div>           
           </div> 
        </div>
    );
};

export default Product;