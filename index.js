//package imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
//route import
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import productTypeRoutes from "./src/routes/producttype.routes.js";
import productRoutes from "./src/routes/product.routes.js";
import cartRoutes from "./src/routes/cart.routes.js";
//initializations
const app = express();
dotenv.config();
const port = process.env.PORT;
//db connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("database connected and ready");
});
//middlewares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
//routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/producttype", productTypeRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
//listening
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
