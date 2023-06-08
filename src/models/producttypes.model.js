import mongoose from "mongoose";
const productTypeSchema = mongoose.Schema(
  {
    typename: String,
  },
  {
    collection: "producttype",
    timestamps: true,
  }
);
const ProductTypeSchema = mongoose.model("producttype", productTypeSchema);
export default ProductTypeSchema;
