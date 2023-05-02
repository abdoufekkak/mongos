import express from "express";
import { addSeance, getSeance } from "../controllers/seance.js";
const router = express.Router();

router.post("/", addSeance);
router.get("/:id", getSeance);

export default router;
