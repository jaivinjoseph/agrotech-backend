import ProductSchema from "../models/product.model.js";
const addProduct = async (req, res, next) => {
  const data = req.body;
  try {
    const newProduct = new ProductSchema(data);
    await newProduct.save();
    res
      .status(200)
      .json({ success: true, message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};
const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductSchema.find();
    if (products.length <= 0) {
      res.status(404).json({
        success: true,
        message: "No product found,add anew one to continue",
      });
    } else {
      res.status(200).json({ success: true, data: products });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};
const getAProductById = async (req, res, next) => {
  const product_id = req.params.product_id;
  try {
    const product = await ProductSchema.find({ _id: product_id });
    if (product.length <= 0) {
      res.status(404).json({
        success: false,
        message: "There is no product with this id. Try again with another one",
      });
    } else {
      res.status(200).json({ success: true, data: product[0] });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};
const getProductByTypeId = async (req, res, next) => {
  try {
    const products = await ProductSchema.find({ type: req.params.type_id });
    if (products.length > 0) {
      res.status(200).json({ success: true, data: products });
    } else {
      res.status(404).json({
        success: false,
        message: "No products found under this type,",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error,try again later",
    });
  }
};
export { addProduct, getAllProducts, getAProductById, getProductByTypeId };
