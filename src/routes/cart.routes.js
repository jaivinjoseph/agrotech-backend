import express from "express";
import {
  addCartData,
  getCartDatByUserId,
} from "../controllers/cart.controller.js";
const router = express.Router();
router.post("/add", addCartData);
router.get("/user/:user_id", getCartDatByUserId);
export default router;
