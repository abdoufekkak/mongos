import express from "express";
import { addEtd } from "../controllers/etudiant.js";
const router = express.Router();

router.get("/", "");
// router.get("/recherche", "");

router.post("/", addEtd);

router.delete("/:id", "");

export default router;
