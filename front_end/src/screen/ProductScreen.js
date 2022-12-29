import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Container, CarouselItem,Form } from 'react-bootstrap'
import axios from 'axios'
import Rating from '../componenets/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { detailProduct } from '../actions/productactions'
import { cart } from '../actions/cartactions'

const ProductScreen = () => {
    const[qty,setqty] = useState(1)
     const dispatch = useDispatch()
     const {id}= useParams()
    const productdetaillists = useSelector((state) => state.productdetailreducer)
    const { loading, error, detail } = productdetaillists
    const cartlists = useSelector((state) => state.cartreducer)
    const { loadings, errors, cartss } = cartlists
   
    
    useEffect(() => {
      
        dispatch(detailProduct(id)) 
    }, [dispatch])
    
    const Cart = () => {
        
        console.log("wer", detail);        
        let list = [...cartlists.cartss]
        list.push(detail)

        dispatch(cart(list,qty))
      
    }

    // for (let i = 0; i <= list.length; i++){
    //     console.log("pu",list)
    // } 
   
    // const [prod, setproducts] = useState({})
    
    // useEffect(() => {
    //     const fetchproduct = async () => {
    //         const { data } = await axios.get(`/api/products/${id}`)
    //         console.log("ahmed",data);
    //         setproducts(data);
    //     }
        
    //     fetchproduct()

    // },[])

    return (
      <>
          <Link className="btn btn-light my-3" to="/">
              Go Back
            </Link>
            {/* <ListGroup>
                <ListGroupItem>
                   {cartss.name} 
                </ListGroupItem>
            </ListGroup> */}
            <Row>
                
              <Col md = {5}>
               <Image src = {detail.image} alt = {detail.name} fluid/>
                    </Col>
                    
              <Col md={3}>
                  <ListGroup variat='flush'>
                      <ListGroupItem>
                          {/* <h3>{detail.name}</h3> */}
                        </ListGroupItem>
                         <ListGroupItem>
                            <Rating value={detail.rating} text= {`${detail.numReviews} reviews`} />
                      </ListGroupItem>
                       <ListGroupItem>
                        Price : ${detail.price}
                      </ListGroupItem>
                       <ListGroupItem>
                        Description : {detail.description}
                      </ListGroupItem>
                  </ListGroup>
                </Col>
                
                <Col md={3}>
                    <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                        <Row>                           
                            <Col>                    
                                    Price:                    
                                        </Col>              
                            <Col>                
                                ${detail.price}
                                </Col>            
                                </Row>
                                 <Row>                           
                            <Col>                    
                                    Status:                    
                                        </Col>              
                            <Col>                
                     {detail.countInStock === 0 ? 'Out of stock ' : 'In stock'} 
                                </Col>            
                            </Row>
                            </ListGroupItem>
                            {
                                detail.countInStock > 0 && (
                                    <Row>
                                        <Col>
                                         Qty
                                        </Col>
                                        <Col>
                  <Form.Control as='select' value={qty} onChange={(e) => setqty(e.target.value)}>
                                                {
                                     [...Array(detail.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                 {x + 1}
                                            </option>
                                                ))
                                                }
                  </Form.Control>
                                        </Col>
                                    </Row>
                                )
                            }
                            <ListGroup.Item>
                                <button className='btn-block' type='button' onClick={Cart}
                                    disabled = {detail.countInStock === 0}
                                >
                                    ADD To Cart
                                 </button>
                            </ListGroup.Item>
                        </ListGroup>
                         </Card>
                    </Col>
                   
        </Row>
      </>
  )
}

export default ProductScreen