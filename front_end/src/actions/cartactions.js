// import axios from 'axios'
import {CART_DETAIL_REQUEST,CART_DETAIL_SUCCESS,CART_DETAIL_FAIL} from '../constants/cartconstant'

export const cart = (product,qty) => (dispatch) => {
    console.log("ppp", product)
      console.log("ok", qty)
    try {
        dispatch({ type: CART_DETAIL_REQUEST })
        let data  = product
        let qtys = qty
           console.log("lp",qtys)
        dispatch({

            type: CART_DETAIL_SUCCESS,
            payload: data,
            payloads: qtys,
    
        })
       
    }
    catch (err) {
          dispatch({
            type: CART_DETAIL_FAIL,
              payload: '',
           
        })
    }
}
