import express from "express";
import {
  addproduct,
  searchprofesseur,
  deleteprofesseur,
  updateprofesseur,
  getAll,
} from "../controllers/professeurControll.js";
const router = express.Router();

router.post("/", addproduct);
router.get("/:nom", searchprofesseur);
router.delete("/:id", deleteprofesseur);
router.put("/:id", updateprofesseur);
router.get("/", getAll);

export default router;
