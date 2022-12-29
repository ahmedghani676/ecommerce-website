import React from 'react'
import { Container } from 'react-bootstrap' 
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './componenets/header'
import Footer from './componenets/footer'
import HomeScreen from './screen/homescreen'
import ProductScreen from './screen/ProductScreen'
import Cartscreen from './screen/Cartscreen';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* <div>
         <Route path='/' element={<Header/>} exact />
          </div> */}
          
            <Route path='/' element={<HomeScreen />} />  
         
        <Route path='/product/:id' element={
              <ProductScreen />} />  
           <Route path='/cart' element={
              <Cartscreen />} />    
      {/* <Route path='/' element={<Footer/>} exact /> */}
        </Routes>
         <Footer/>
      </BrowserRouter>
     
        {/* <HomeScreen /> */}
      </>
  )
}

export default App