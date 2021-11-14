import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://lit-hamlet-81361.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data.slice(0,6)))
       
    }, []);
    return (
        <div id="products">
            <br />
            <br />
            <h1 className="text-danger">Buy Your Dream Car</h1>
            <p>Choose the best car and start your <br /> journey.</p>

            <div className="container">
                <div className="row">
                    {
                        products.map(product => <Product 
                        key={product._id}
                        product={product}
                        ></Product>)
                    }
                </div>
            </div>
<br />
<br />
            


        </div>
    );
};

export default Products;