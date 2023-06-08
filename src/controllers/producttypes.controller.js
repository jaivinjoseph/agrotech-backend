import ProductTypeSchema from "../models/producttypes.model.js";
const addProductType = async (req, res, next) => {
  const data = req.body;
  try {
    const newProductType = new ProductTypeSchema(data);
    await newProductType.save();
    res
      .status(200)
      .json({ success: true, message: "Product type added successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};
const getAllProductTypes = async (req, res, next) => {
  try {
    const allProductTypes = await ProductTypeSchema.find();
    if (allProductTypes.length <= 0) {
      res.status(404).json({
        success: false,
        message: "no product type found,add a new one to continue",
      });
    } else {
      res.status(200).json({ success: false, data: allProductTypes });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

export { getAllProductTypes, addProductType };
