import axios from 'axios'
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productconstants'
import {PRODUCT_DETAIL_REQUEST,PRODUCT_DETAIL_SUCCESS,PRODUCT_DETAIL_FAIL} from '../constants/productconstants'
export const listProduct = (req, res) => async (dispatch)=> {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('/api/products')
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload:data
        })
    }
    catch (err) {
          dispatch({
            type: PRODUCT_LIST_FAIL,
              payload: err.response && err.response.data.message ? err.response.data.message
                : err.response
        })
    }
}
export const detailProduct = (req, res) => async (dispatch) => {
    console.log("po",req)
    try {

        dispatch({ type: PRODUCT_DETAIL_REQUEST, })
        const { data } = await axios.get(`/api/products/${req}`)
        if (data)
        dispatch({
            type: PRODUCT_DETAIL_SUCCESS,
            payload:data
        })
    }
    catch (err) {
          dispatch({
            type: PRODUCT_DETAIL_FAIL,
              payload: err.response && err.response.data.message ? err.response.data.message
                : err.response
        })
    }
}