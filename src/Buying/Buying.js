import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Buying = () => {
 
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://lit-hamlet-81361.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(
            (error) => {
              console.log(error);
            }
          )
    }, []);
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
        <h2>Buy your Dream Car</h2>
        <Container>
            <Row>
                <Col>
                <br />
                <img src={product.img} alt="" />
                <div className="text-start m-4 ">
            <h1 style={{color: 'coral', marginBottom: 15}}>{product.name}</h1>
            <h5 style={{ marginBottom: 15}}>{product.description}</h5>

            <div>
                <p>{product.price}</p>
                <p>{product.time}</p>
            </div>
            
            <Link to="">
                <button className="btn btn-primary my-5">BUY NOW</button>
            </Link>
            </div> 
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Buying;