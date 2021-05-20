import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import products from '../products'

function Product({product}) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href ={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </a>
            
            <Card.Body>
                <Link to ={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviwes} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>


    )
}

export default Product
