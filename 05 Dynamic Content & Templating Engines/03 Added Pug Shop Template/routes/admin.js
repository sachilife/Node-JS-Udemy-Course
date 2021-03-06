const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// products array
const products = [];

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  // add incoming product to products array
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
