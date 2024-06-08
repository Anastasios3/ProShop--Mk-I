import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";
const port = process.env.PORT || 8000; // Updated the port to 8000 for consistency

connectDB(); // Added the call to connectDB
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product); // Corrected the response to send the single product
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
