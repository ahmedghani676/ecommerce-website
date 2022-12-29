import asyncHandler from "express-async-handler"
import User from '../models/usermodel.js'
import bcrypt from 'bcryptjs'
import generateToken from "../utiks/jason.js"

const GetUser = asyncHandler(async (req, res) => {
    console.log(req)
    const { email, password } = req.body
    console.log(email);
    const user = await User.findOne({ email })
  
    if (user) {
       
        if ( user.password === password)
        {

            res.json({
                _id : user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token:generateToken(user._id),
            })

        } 
        else {
            console.log("inavlid password")
        }
        
    }
  
})

const registerUser = asyncHandler(async (req, res) => {
   
    const {name, email, password } = req.body
  
    const user = await User.findOne({ email })
  
    if (user) {
       
        if ( user.password === password)
        {

            res.json({
                _id : user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token:generateToken(user._id),
            })

        } 
        else {
            console.log("inavlid password")
        }
        
    }
  
})
const GetUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)
    if (user) {
        res.json({
           _id : user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
      })
    }   
    else {
        res.status(404)
    }
  
})
export {GetUser,GetUserProfile}