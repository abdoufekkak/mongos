import express from "express";
import { addproduct,searchprofesseur,deleteprofesseur,updateprofesseur,getAll } from "../controllers/professeurControll.js";
const router = express.Router();

router.post("/prof/add", addproduct);
router.get("/prof/get/:id", searchprofesseur);
router.delete("/prof/delete/:id", deleteprofesseur);
router.put("/prof/update/:id", updateprofesseur);
router.get("/prof/getAll", getAll);

export default router;
