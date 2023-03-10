import mongoose from 'mongoose'
const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    orderItems: [{
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        products: { type: mongoose.Schema.Types.ObjectId, required: true ,ref:'Product' },
            
    }],
    shippingAddress: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        postalcode: { type: String, required: true },
        country: { type: String, required: true },
    },
    paymentMethod: {
        type: String,
        required : true,
    },
    paymentResult: {
        id: { type: String },
        Status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
    },
    taxprice: {
        type: Number,
        required: true,
        default:0.0,
    },
    shippingprice: {
        type: Number,
        required: true,
        default:0.0,
    },
    totalprice: {
        type: Number,
        required: true,
        default:0.0,
    },
    ispaid: {
        type: Boolean,
        required: true,
        default:false,
    },
    paidat: {
        type: Date,
      
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default:false,
    },
       deliverat: {
        type: Date,
      
    },
    
}, {
    timestamps:true,
})
const Order = mongoose.model('Order', orderSchema)
export default Order