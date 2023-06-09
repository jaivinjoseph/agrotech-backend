import express from "express";
import {
  addProduct,
  getAProductById,
  getAllProducts,
  getProductByTypeId,
} from "../controllers/product.controller.js";
const router = express.Router();
router.post("/add", addProduct);
router.get("/get", getAllProducts);
router.get("/:product_id", getAProductById);
router.get("/type/:type_id", getProductByTypeId);
export default router;
