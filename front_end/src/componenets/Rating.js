import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
export default function Rating(props) {
  return (
      <div className='rating'>
          <span>
              {props.value >= 1 ? <AiFillStar style={{color : 'yellow'}} /> : props.value >= 0.5 ? <BsStarHalf style={{color : 'yellow'}}/> : <AiOutlineStar style={{color : 'yellow'}}/>}
             
          </span>
           <span>
              {props.value >= 2 ? <AiFillStar style={{color : 'yellow'}}/> : props.value >= 1.5 ? <BsStarHalf style={{color : 'yellow'}}/> : <AiOutlineStar style={{color : 'yellow'}}/>}
             
          </span>
           <span>
              {props.value >= 3 ? <AiFillStar style={{color : 'yellow'}}/> : props.value >= 2.5 ? <BsStarHalf style={{color : 'yellow'}}/> : <AiOutlineStar style={{color : 'yellow'}}/>}
             
          </span>
           <span>
              {props.value >= 4 ? <AiFillStar style={{color : 'yellow'}}/> : props.value >= 3.5 ? <BsStarHalf style={{color : 'yellow'}}/> : <AiOutlineStar style={{color : 'yellow'}}/>}
             
          </span>
           <span>
              {props.value >= 5 ? <AiFillStar style={{color : 'yellow'}}/> : props.value >= 4.5 ? <BsStarHalf style={{color : 'yellow'}}/> : <AiOutlineStar style={{color : 'yellow'}}/>}
             
          </span>
          <span>{props.text && props.text }</span>

    </div>
  )
}
