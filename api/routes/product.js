import express from "express";
import { addproduct } from "../controllers/product.js";
const router = express.Router();

router.post("/", addproduct);
// router.post("/", "");
// router.delete("/:id", "");
//  router.put("/:id", updateProduit);

export default router;
