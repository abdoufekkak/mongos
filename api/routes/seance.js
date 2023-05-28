import express from "express";
import {
  addSeance,
  getSeance,
  addabscence,
  getabsencebyEtudiant,
  getseance,
  getStudentsWithFirstAbsence,
} from "../controllers/seance.js";
const router = express.Router();

router.post("/", addSeance);
router.get("/getabsence", getabsencebyEtudiant);
router.get("/abs/:id", getseance);

router.get("/:id", getSeance);

router.get("/", getStudentsWithFirstAbsence);
router.post("/abscence", addabscence);
export default router;
