import React from 'react'
import './Product.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const Product = ({item}) => {
  
  return (
    <Link to={`/${item._id}`} className="link-item">
        <Card className='card-item' >
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            {item.description}
            </Card.Text>
        </Card.Body>
        </Card>
    </Link>
  )
}

export default Product