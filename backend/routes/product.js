const express = require ('express')
const router = express.Router()


const {getProducts, newProduct,getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController')


router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct);
router.route('/admin/product/new').post(newProduct);
router.route('/Aadmin/product/:id').put(updateProduct).all(deleteProduct);

module.exports = router;