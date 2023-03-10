import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        required: true,
        type: String,
        unique:true,
    },
    password: {
        type: String,
        // required: true,
    },
       isAdmin: {
        type: Boolean,
           required: true,
        default:false,
    }

}, {
    timestamps:true,
})
const User = mongoose.model('User', userSchema)
export default User