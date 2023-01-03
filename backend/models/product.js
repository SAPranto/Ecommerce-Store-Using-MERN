const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Please Enter Product Name'],
        trim: true
    },
    price: {
        type:Number,
        required: [true, 'Please Enter Product Price'],
        default:0.0
    },
    description: {
        type:String,
        required: [true, 'Please Enter Product Description']
    },
    ratings: {
        type: Number,
        default:0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true,'Please Select Category For This Product'],
        enum: {
            values : [
                'Electronics',
                'Cameras',
                'Laptop',
                'Food',
                'Home',
                'smartphones'
            ],
            message: 'Please Select Correct Category For This Product'
        }
    },
    seller: {
            type: String,
            required: [true,'Please Enter Product Seller']
    },
    stock: {
        type: Number,
        required: [true,'Please Enter Product Stock'],
        maxLength: [5, 'Product stock cannot exceed 5 numbers']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema)