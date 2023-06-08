import express from "express";
import {
  addProductType,
  getAllProductTypes,
} from "../controllers/producttypes.controller.js";
const router = express.Router();
router.get("/add", addProductType);
router.post("/get", getAllProductTypes);
export default router;
