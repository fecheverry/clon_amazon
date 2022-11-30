import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId, ref: 'user', required: true
    },
    user: {
        type: String, required: true
    },
    products: [
        {
            type: mongoose.Types.ObjectId, ref: 'product', required: true
        }
    ],
    total: { type: Number, required: true }
})

export default mongoose.model('Order', orderSchema);