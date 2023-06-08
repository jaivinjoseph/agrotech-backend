import express from "express";
import { getUserById } from "../controllers/user.controller";
const router = express.Router();
router.get("/:user_id", getUserById);
export default router;
