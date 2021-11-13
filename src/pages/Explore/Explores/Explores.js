import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import Explore from './Explore';

const Explores = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "https://lit-hamlet-81361.herokuapp.com/products";

        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);
    return (
        <div>
            <h2>exploring products</h2>
            <p>product : {products.length}</p>

        <Container>
            <Row>
            {
            products.map(product => <Explore
            key={product._id}
            product={product}
            ></Explore>)
        }

            </Row>
        </Container>

        </div>
        
    );
};

export default Explores;