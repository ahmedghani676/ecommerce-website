import React,{useState,useEffect} from 'react'
import { Row, Col, Container } from 'react-bootstrap'


import Product from '../componenets/product'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../actions/productactions'

const HomeScreen = () => {
    const dispatch = useDispatch()
    
    const productlists = useSelector((state) => state.productlistreducer)
    const { loading, error, products } = productlists
   
    useEffect(() => {
    dispatch(listProduct())
        
    },[dispatch] )
  
    return (
        <>    
            <h1>Latest Products</h1>
            {loading ? (<h2>LOADING...</h2>) : error ? (<h3>{error}</h3>) : (
                  <Row>
                {products.map(prod => (
                    <Col sm={12} md={6} lg ={4}>
                        <Product prod={prod} />
                    </Col>
                ))}
            </Row>
            )}
          
            </>
  )
}

export default HomeScreen