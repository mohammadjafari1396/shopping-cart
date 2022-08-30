import React from 'react'
import './Products.css'
import products from '../../../src/products'
import Product from '../Product/Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Products = () => {
  return (
      <>
       <Header />
        <div className='products'>
          <Container>
              <Row>
          {products.map((item) => {
          return (
                <Col xs={4}   key={item._id} >
                 <Product item={item}/>
                </Col>
          )
         })}
        </Row>
        </Container>
        </div>
       <Footer />
      </>
  )
}

export default Products