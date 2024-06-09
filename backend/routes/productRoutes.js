import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

// // router --1
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     try {
//       const products = await Product.find({});
//       res.json(products);
//     } catch (error) {
//       res.status(500).json({ message: "Server Error" });
//     }
//   })
// );

// // router --2
// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     try {
//       const product = await Product.findById(req.params.id);
//       if (product) {
//         res.json(product);
//       } else {
//         res.status(404);
//         throw new Error("Resource not found");
//       }
//     } catch (error) {
//       res.status(500).json({ message: "Server Error" });
//     }
//   })
// );

export default router;
// Path: backend/routes/productRoutes.js
