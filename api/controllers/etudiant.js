import { product } from "../model.js";
export const getEtd = (req, res) => {
  const kitty = new product(req.body);
  product
    .find({ role: "etudiant" })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
export const addEtd = (req, res) => {
  product
    .insertMany(req.body)
    .then((e) => {
      return res.status(200).json("etudiant bien ajoute");
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
export const deleteEtd = (req, res) => {
  const nivid = req.params.id;
  product
    .deleteMany({ niveau: nivid })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
