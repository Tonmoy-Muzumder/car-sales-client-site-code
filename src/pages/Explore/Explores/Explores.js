import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import Explore from './Explore';
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner'


const Explores = () => {
    const [products, setProducts] = useState([]);
    const {isLoading} = useAuth();

    useEffect(() => {
        const url = "https://lit-hamlet-81361.herokuapp.com/products";

        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, []);

    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    };
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-danger">Buy Your Dream Car</h1>
            <p>Choose the best car and start your <br /> journey.</p>
            <p>products : {products.length}</p>

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