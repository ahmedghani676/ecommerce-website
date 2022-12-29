import { combineReducers, applyMiddleware,compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createStore } from 'redux';

import { productListreducer } from './reducers/productreducer.js'
import { productDetailreducer } from './reducers/productreducer.js';
import { cartreducer } from './reducers/cartreducer.js';
const middleware = [thunk]

 const rootReducer = combineReducers({
     productlistreducer: productListreducer,
     productdetailreducer: productDetailreducer,
    cartreducer: cartreducer,
 });
const initialState = {}
const store = createStore(rootReducer,initialState,applyMiddleware(...middleware));
export default store;


