import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const Review = ({review}) => {
    const {img, name, description, rating, position} = review;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="text-start">
                <h5> <span style={{fontSize: 50, color: 'red'}}>"</span> <br /> {description}</h5>
<br />
<br />
                <div className="d-flex">
                    <img className="w-25" src={img} alt="" />
                    <div className="mx-4">
                    <h1>{name}</h1>
                    <p>{position}</p>
                    </div>
                    <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Review;