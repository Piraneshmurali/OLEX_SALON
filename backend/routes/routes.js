var express = require('express');

const router = express.Router();

// Product route

var productController = require('../src/product/productController');

router.route('/product/getAll').get(productController.getDataControllerfn);

router.route('/product/create').post(productController.createProductControllerFn);

router.route('/product/update/:id').patch(productController.updateProductController);

router.route('/product/updatestock/:id').patch(productController.UpdateStockController);

router.route('/product/delete/:id').delete(productController.deleteProductController);

router.route('/product/get/:id').get(productController.findProductController);

router.route('/product/getfiltered/:filter').get(productController.filterProductController);



module.exports = router;