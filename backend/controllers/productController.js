const Product = require('../models/product')
const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const APIFeatures = require('../utils/apiFeatures')


// Create new product => /api/v1/product/new
exports.newProduct = catchAsyncErrors (async (req,res,next) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
})


// Get All Products => /api/v1/Products
exports.getProducts = catchAsyncErrors (async (req, res, next) => {

    const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    const products = await apiFeatures.query;

    res.status(200).json ({
        success: true,
        count: products.length,
        message: 'This route will show all products in database.'
    })
})

// Get Single Proudct details => /api/v1/product/:id

exports.getSingleProduct = catchAsyncErrors( async(req,res,next) => {
    const product = await Product.findById(req.params.id)

    if(!product){
        return next(new ErrorHandler('Product not found', 404))
    }

    res.status(200).json({
        success:true,
        product
    })
})

// Update Product => /api/v1/product/:id

exports.updateProduct = catchAsyncErrors (async (req, res, next) => {

    const product = await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler('Product not found', 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.send(200).json({
        success: true,
        product
    })
})

//Delete Product => /api/v1/admin/product/:id

exports.deleteProduct = catchAsyncErrors (async (req,res,next) => {

    const product = await Product.findById(req.params.id)
    if(!product){
        return next(new ErrorHandler('Product not found', 404))
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Product is deleted'
    })
})