import mongoose from "mongoose";
const cartSchema = mongoose.model({
  product_id: { types: mongoose.Schema.Types.ObjectId, ref: "product" },
  selectedQuantity: Number,
});
const CartSchema = mongoose.model("", cartSchema);
export default CartSchema;
