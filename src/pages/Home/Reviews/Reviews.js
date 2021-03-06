import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://lit-hamlet-81361.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div id="reviews">
            <h2 className="fs-1 text-danger">Customer Feedback</h2>
            <p>You can also give us your feedback!</p>

            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        ></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;