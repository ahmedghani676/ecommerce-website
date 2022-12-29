import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import { Row, Col, Image,ListGroup, Card, Button, ListGroupItem, Container, CarouselItem,Form } from 'react-bootstrap'
import { cart } from '../actions/cartactions'

const Cartscreen = () => {
   const  dispatch = useDispatch()
    const cartlists = useSelector((state) => state.cartreducer)
    const { loading, error, qty, cartss } = cartlists
    console.log("ll", cartss);
    let sum = 0
    let d
    function Cal() {
        console.log("first")
        for (let i = 0; i < cartss.length; i++){
            sum = sum +cartss[i].price
            console.log("first",sum)
        }
        return sum;
        
    }
    
    return (
        <>
            <Row>
                <Col md={8}>
                    <h1>SHOPPING CART</h1>
                    {
                        cartss.length === 0 ? (
                            <h3>
                                cart is empty
                            </h3>
                             
                       
                        ) : (<ListGroup variant='flush'>
                            {
                                cartss.map((ca) => (
                                    <ListGroupItem key={ca._id} >
                                        <Row>
                                            <Col md={2}>
                                                <Image src={ca.image} fluid rounded />
                                            </Col>

                                            <Col md={3}>
                                                <Link to={`/product/${ca._id}`}>{ca.name}</Link>
                                            </Col>
                                            <Col md={2}>
                                                ${ca.price}
                                            </Col>
                                            <Col md={2}>
                                                {qty}
                                               <Form.Control as='select' value={qty} onChange={(e) => dispatch (cart(cartss,e.qty)) }>
                                                {
                                     [...Array(ca.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                 {x + 1}
                                            </option>
                                                ))
                                                }
                  </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                        
                                                              
                                ))}
                        </ListGroup>)
                    }
                </Col>
                <Col md={2}>
                    {
                        d =  Cal()
                        
                    }
                    {
                        d
                    }
                </Col>
                
                <Col md={2}>
                    
                </Col>
            </Row>
        </>
    )

      
            
}
export default Cartscreen