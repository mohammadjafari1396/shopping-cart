import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import products from '../../products'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SelectedProduct.css'

const SelectedProduct = (props) => {
  const [product,setProduct] = useState({})
  const [Items,setItems] = useState([])

  useEffect(() => {
    const selectedItem = products.findIndex((item) => {
        return item._id === props.match.params.id
    })
    setProduct(products[selectedItem])
  },[])

  const addItemHandler = () => {
    setItems(JSON.stringify(product))
    window.localStorage.setItem('items',Items) 
  }
    
  return (
    <>
     <Header />
      <Container>
        <Row>
            <Col xs={12}>
                <Card style={{ width: '18rem' }} className="selected-item">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                     {product.description}
                    </Card.Text>
                    <Button variant="primary" onClick={addItemHandler}>اضافه کردن به سبد خرید</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container> 
     <Footer />  
    </>
  )
}

export default SelectedProduct