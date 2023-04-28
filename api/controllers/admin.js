// import { connec } from "../db.js";
import { product } from "../model.js";
export const getAdmin = (req, res) => {
  const kitty = new product(req.body);
  product
    .find({ role: "admin" })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
