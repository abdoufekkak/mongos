import express from "express";
import {
  getEtd,
  addEtd,
  deleteEtd,
  getEtdsByNiveau2,
} from "../controllers/etudiant.js";

const router = express.Router();

router.get("/", getEtd);
// router.get("/recherche", cherchAdmin);

router.post("/", addEtd);

router.delete("/:id", deleteEtd);
router.get("/etds", getEtdsByNiveau2);
export default router;
