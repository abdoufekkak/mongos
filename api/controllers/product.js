// import { connec } from "../db.js";
import { product } from "../model.js";
export const addproduct = (req, res) => {
  const kitty = new product(req.body);

  kitty
    .save()
    .then((x) => console.log(x))
    .catch((e) => console.log(e));
};
