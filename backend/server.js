import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// Product routes
app.use("/api/products", productRoutes);

// Middleware for handling 404 errors
app.use(notFound);

// Middleware for handling other errors
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
