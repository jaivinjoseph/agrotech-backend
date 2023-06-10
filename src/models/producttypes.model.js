import mongoose from "mongoose";
const productTypeSchema = mongoose.Schema(
  {
    name: String,
    image: String,
  },
  {
    collection: "producttype",
    timestamps: true,
  }
);
const ProductTypeSchema = mongoose.model("producttype", productTypeSchema);
export default ProductTypeSchema;
