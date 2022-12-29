import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounded" style={{ width: '18rem' }}>
      <Link to = {`/Product/${props.prod._id}`}>
      <Card.Img variant="top" src={props.prod.image} />   
      </Link>
     
      <Card.Body>
        <Link to={`/Product/${props.prod._id}`}>
          
          <Card.Title >
            <strong>{props.prod.name}</strong>
          </Card.Title>  
      </Link>
       
        <Card.Text as='div'>
          {/* <div className = "my-3">
            {props.prod.rating} from {props.prod.numReviews} reviews
            </div> */}
          <Rating value={props.prod.rating } text = {`${props.prod.numReviews} reviews`} />
        
        </Card.Text>
      <Card.Text as = 'h3' >
         
            {props.prod.price}
            
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product