import express from "express";
import {
  addCartData,
  deleteCartData,
  getCartDatByUserId,
} from "../controllers/cart.controller.js";
const router = express.Router();
router.post("/add", addCartData);
router.get("/user/:user_id", getCartDatByUserId);
router.delete("/cart/:item_id", deleteCartData);
export default router;
