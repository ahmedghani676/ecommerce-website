import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL} from '../constants/productconstants'
import {PRODUCT_DETAIL_REQUEST,PRODUCT_DETAIL_SUCCESS,PRODUCT_DETAIL_FAIL} from '../constants/productconstants'
export const productListreducer = (state = { loading: false, error: '', products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true,error:'', products: [] }
        case PRODUCT_LIST_SUCCESS:
            return { loading: false,error:'', products: action.payload }
        case PRODUCT_LIST_FAIL:
            return { loading: false,error:'', products: action.payload }
        default:
            return state
    }
}

export const productDetailreducer = (state = {loading:false,error:'', detail: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL_REQUEST:
            return { loading: true,error:'', detail : {}}
        case PRODUCT_DETAIL_SUCCESS:
            return { loading: false,error:'', detail: action.payload }
        case PRODUCT_DETAIL_FAIL:
            return { loading: false,error:'', detail: action.payload }
        default:
            return state
    }
}
