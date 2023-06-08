import express from "express";
import {
  addProduct,
  getAProductById,
  getAllProducts,
} from "../controllers/product.controller";
const router = express.Router();
router.post("/add", addProduct);
router.post("/get", getAllProducts);
router.post("/:product_id", getAProductById);
export default router;
