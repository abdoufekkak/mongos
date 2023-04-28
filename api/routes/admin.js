import express from "express";
import { getAdmin } from "../controllers/admin.js";
const router = express.Router();
router.get("/", getAdmin);
// router.get("/recherche", "");
// router.post("/", "");
// router.delete("/:id", "");
// router.put("/:id");

export default router;
