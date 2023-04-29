import express from "express";
import { addSeance } from "../controllers/seance.js";
const router = express.Router();

router.post("/", addSeance);

export default router;
