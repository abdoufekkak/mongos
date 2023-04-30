import express from "express";
import { getniveau, addnive, getafficet } from "../controllers/niveau.js";

const router = express.Router();

router.get("/", getniveau);
// router.get("/recherche", cherchAdmin);
router.get("/affecter", getafficet);
router.post("/", addnive);

// router.delete("/:id", deleteEtd);

export default router;
