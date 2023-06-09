import express from "express";
import { login, signup } from "../controllers/auth.controller.js";
const router = express.Router();
router.get("/login/:email/:password", login);
router.post("/signup", signup);
export default router;
