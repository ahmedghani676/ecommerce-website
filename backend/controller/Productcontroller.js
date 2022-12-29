
import asyncHandler from "express-async-handler"
import Product from '../models/productmodel.js'

const GetProduct = asyncHandler(async (req, res) => {
      const produ = await Product.find({})
    if (produ) {
        res.json(produ)     
    }
    

       
})
const GetProductbyid = asyncHandler(async (req, res) => {
      const prod = await Product.findById(req.params._id)
    res.json(prod)
    

       
})
export {GetProduct,GetProductbyid}