import mongoose from 'mongoose'
import products from './data/products.js'
import users from './data/users.js'
import User from './models/userModel.js'
import Product from './models/productmodel.js'
import Order from './models/ordermodel.js'
import connectDB from './config/db.js'
// import dotenv from 'dotenv'
// dotenv.config()
connectDB()
const importdata = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        const createduser = await User.insertMany(users)
        const adminuser = createduser[0]._id
        const sampleProducts = products.map(product => {
            return { ...product, user: adminuser }
        })
        await Product.insertMany(sampleProducts)
        console.log("data imported")
        
    } catch (error) {
         console.log(`${error}`)
    }
}
const destroydata = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
       
        console.log("data destroyed")
        
    } catch (error) {
        
    }
}

if (process.argv[2] === '-d') {
    destroydata()
}
else {
    importdata()

}