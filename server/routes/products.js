const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controller/productsController');

router.get('/', getProducts);
router.post('/', addProduct);

module.exports = router;
