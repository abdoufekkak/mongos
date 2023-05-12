import express from "express";
import {
  addSeance,
  getSeance,
  addabscence,
  getabsencebyEtudiant,
  getseance,
} from "../controllers/seance.js";
const router = express.Router();

router.post("/", addSeance);
router.get("/getabsence", getabsencebyEtudiant);
router.get("/abs/:id", getseance);

router.get("/:id", getSeance);

router.post("/abscence", addabscence);
export default router;
