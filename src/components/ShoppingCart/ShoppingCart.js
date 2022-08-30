import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './ShoppingCart.css'
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';

const ShoppingCart = () => {

  const itemProducts = JSON.parse(window.localStorage.getItem('items'))

  return (
    <>
     <Header />
      <Container>
      <Table striped bordered hover className='table-shopping-cart'>
      <thead>
        <tr>
          <th>تعداد</th>
          <th>نام محصول</th>
          <th>قیمت محصول</th>
          <th>سفارش</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{itemProducts.name}</td>
          <td>{itemProducts.price}</td>
          <td>
            <button>خرید</button>
          </td>
        </tr>
      </tbody>
    </Table>
      </Container>
     <Footer />
    </>
  )
}

export default ShoppingCart