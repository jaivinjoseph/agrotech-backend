import mongoose from "mongoose";
const productSchema = mongoose.Schema(
  {
    name: String,
    type: { type: mongoose.Schema.Types.ObjectId, ref: "producttype" },
    quantity: Number,
    image: String,
    price: Number,
    description: String,
  },
  {
    collection: "product",
    timestamps: true,
  }
);
const ProductSchema = mongoose.model("product", productSchema);
export default ProductSchema;
