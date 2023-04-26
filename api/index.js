import express from "express";
import { connec } from "./db.js";
import product from "./routes/product.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

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

app.use("/api/product", product);
// app.use("/api/client", client);
// app.use("/api/dashbord", dashobord);
// app.use("/api/panier", commande);

app.listen(8800, () => {
  console.log("Connected!");
});
