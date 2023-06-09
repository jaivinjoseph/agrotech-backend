import express from "express";
import {
  addProductType,
  getAllProductTypes,
} from "../controllers/producttypes.controller.js";
const router = express.Router();
router.post("/add", addProductType);
router.get("/get", getAllProductTypes);
export default router;
