import CartSchema from "../models/cart.model.js";
import ProductSchema from "../models/product.model.js";
const addCartData = async (req, res, next) => {
  const data = req.body;
  try {
    const cartData = new CartSchema(data);
    await cartData.save();
    res
      .status(200)
      .json({ sucess: true, message: "successfully saved to cart" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

const getCartDatByUserId = async (req, res, next) => {
  try {
    const resultData = [];
    let grandTotal = 0;
    const cartData = await CartSchema.find({ user_id: req.params.user_id });
    if (cartData.length <= 0) {
      res.status(404).json({
        success: false,
        message:
          "No cart data found for the user,add something new to the cart",
      });
    } else {
      await Promise.all(
        cartData.map(async ({ user_id, product_id, selectedquantity, _id }) => {
          let product = await ProductSchema.findById(product_id);
          resultData.push({
            product: product,
            selectedquantity: selectedquantity,
            _id: _id,
          });
          grandTotal = grandTotal + product.price * selectedquantity;
        })
      );
      console.log(resultData);
      res.status(200).json({
        success: true,
        data: { data: resultData, grandtotal: grandTotal },
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

const deleteCartData = async (req, res, next) => {
  try {
    await CartSchema.findByIdAndDelete(req.params.item_id);
    res
      .status(200)
      .json({ success: true, message: "CART ITEM DELETED SUCCESSFULLY" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

export { addCartData, getCartDatByUserId, deleteCartData };
