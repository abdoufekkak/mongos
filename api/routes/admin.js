import express from "express";
import {
  getAdmin,
  adddmin,
  suppadmin,
  modadmin,
  cherchAdmin,
} from "../controllers/admin.js";
const router = express.Router();
router.get("/", getAdmin);
router.get("/:nom", cherchAdmin);
router.post("/", adddmin);
router.delete("/:id", suppadmin);
router.put("/:id", modadmin);

export default router;
