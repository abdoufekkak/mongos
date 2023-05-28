
import { connec } from "./db.js";
import product from "./routes/professuer.js";
import admin from "./routes/admin.js";
import etudiant from "./routes/etudiant.js";
import express from "express";
import professuer from "./routes/professuer.js";
import seance from "./routes/seance.js";
import niveau from "./routes/niveau.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import auto from "./routes/autentification.js";
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());
app.use(cookieParser());
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../client/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.post("/api/upload", upload.single("file"), function (req, res) {
//   const file = req.file;
//   res.status(200).json(file.filename);
// });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/professuer", professuer);
app.use("/api/admin", admin);
app.use("/api/etd", etudiant);
app.use("/api/seance", seance);
app.use("/api/niveau", niveau);

app.use("/api/auto", auto);

// app.use("/api/dashbord", dashobord);
// app.use("/api/panier", commande);

app.listen(8800, () => {
  console.log("Connected!");
});
