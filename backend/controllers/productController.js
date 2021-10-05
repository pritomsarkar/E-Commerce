import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

// @desc  Fetch All Product
// @route  GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc  Fetch Single Product
// @route  GET /api/products/:id
// @access  public

const getProductsById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

export { getProducts, getProductsById };
