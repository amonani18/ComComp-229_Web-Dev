const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Middleware to validate ObjectId
const validateObjectId = (req, res, next) => {
  const mongoose = require('mongoose');
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: 'Invalid ObjectId' });
  }
  next();
};

// CRUD routes
router.post('/api/products', productController.createProduct);
router.get('/api/products', productController.getProducts);
router.get('/api/products/:id', validateObjectId, productController.getProductById);
router.put('/api/products/:id', validateObjectId, productController.updateProduct);
router.delete('/api/products/:id', validateObjectId, productController.deleteProduct);

// Search route
router.get('/api/products/search', productController.searchProducts);

module.exports = router;
