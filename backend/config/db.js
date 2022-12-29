import mongoose from 'mongoose'
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://ahmed:afridi12345@cluster0.b6uogkw.mongodb.net/proshop?retryWrites=true&w=majority',
            {
                
                ssl: true,
  sslValidate: false
            })
        console.log(`MongoDB connected : ${conn.connection.host}`)
    }
    catch (error) {
        
    }
}
export default connectDB

