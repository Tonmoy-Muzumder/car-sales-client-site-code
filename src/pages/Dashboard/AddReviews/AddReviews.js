import React from 'react';
import './AddReviews.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddReviews = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://lit-hamlet-81361.herokuapp.com/reviews', data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('successfully added review');
                reset();
            }
        });
    }
    return (
        <div className="add-review">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="fs-1 text-danger">Customer Feedback</h1>

            
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description")} placeholder="description" />
      <input type="text" {...register("position")}  placeholder="position"/>
      <input type="number" {...register("rating")}  placeholder="rating"/>
      <input {...register("img")}  placeholder="img"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddReviews;

// Director of modern trade LMT.
// I really had a doubt at first. But now I really very happy to buy product from this website. There have some very much good product of car. Specially model X1 is pretty awesome. If you want fulfill your dream, you must buy car from this website. thank you.