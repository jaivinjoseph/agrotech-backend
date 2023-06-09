import mongoose from "mongoose";
const cartSchema = mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    selectedquantity: Number,
  },
  {
    collection: "usercart",
    timestamps: true,
  }
);
const CartSchema = mongoose.model("usercart", cartSchema);
export default CartSchema;
