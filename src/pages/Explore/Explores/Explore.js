import React from 'react';
import { Link } from 'react-router-dom';

const Explore = ({product}) => {
    const {_id, img, name, description} = product;
    return (
        <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
            <div style={{backgroundColor: 'lightgray'}} className="my-5 rounded">
           <img className="img-fluid mt-3 rounded" src={img} alt="" />
            <div className="text-start m-4 ">
            <h1 style={{color: 'coral', marginBottom: 15}}>{name}</h1>
            <h5 style={{ marginBottom: 15}}>{description}</h5>
            
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning my-5">SEE DETAILS...</button>
            </Link>
            </div>           
           </div> 
        </div>
    );
};

export default Explore;