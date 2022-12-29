import {CART_DETAIL_REQUEST,CART_DETAIL_SUCCESS,CART_DETAIL_FAIL} from '../constants/cartconstant'
export const cartreducer = (state = { loading: false, error: '',qty :0, cartss:[] }, action) => {
switch (action.type) {
        case CART_DETAIL_REQUEST:
        return {loading: true,error: '',qty :0, ...state}
        case CART_DETAIL_SUCCESS:
           return { loading: false, error: '', qty:  action.payloads , cartss: action.payload }
       
        case CART_DETAIL_FAIL:
            return { loading: false,error:'', qty : 0 ,cartss: action.payload }
        default:
            return state
    }
}
