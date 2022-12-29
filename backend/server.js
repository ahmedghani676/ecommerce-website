import express from 'express'
import connectDB from './config/db.js'
import productroutes from './routes/productroutes.js'
import userroutes from './routes/userroutes.js'
connectDB()
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Api is runnings')
})

app.use('/api/products', productroutes)
app.use('/api/user',userroutes)
app.listen(5000,console.log('server runn'))