import React from 'react';
import "./AddProduct.css";
import axios from 'axios';
import { useForm } from 'react-hook-form';

const AddNewPlan = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://lit-hamlet-81361.herokuapp.com/products', data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('successfully added plan');
                reset();
            }
        })
    }
    return (
        <div  className="add-product">
            <h1>Add New Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
      <textarea {...register("description")} placeholder="description" />
      <input type="text" {...register("price")}  placeholder="price"/>
      <input type="text" {...register("time")}  placeholder="time"/>
      <input {...register("img")}  placeholder="img"/>
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddNewPlan;