import express from "express";
import { getEtd, addEtd, deleteEtd } from "../controllers/etudiant.js";

const router = express.Router();

router.get("/", getEtd);
// router.get("/recherche", "");

router.post("/", addEtd);

router.delete("/:id", deleteEtd);

export default router;
