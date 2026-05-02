import Product from "../models/product.js";

// Create a New Product
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.json({
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

// Get All Products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

// Update Product
export const updateProducts = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Product updated successfully",
      updated,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};

// Delete Product
export const deleteProducts = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", err });
  }
};