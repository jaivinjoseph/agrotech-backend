import CartSchema from "../models/cart.model.js";
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
    const cartData = await CartSchema.find({ user_id: req.params.user_id });
    if (cartData.length <= 0) {
      res.status(404).json({
        success: false,
        message:
          "No cart data found for the user,add something new to the cart",
      });
    } else {
      res.status(200).json({ success: true, data: cartData });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ,try again later",
    });
  }
};

export { addCartData, getCartDatByUserId };
