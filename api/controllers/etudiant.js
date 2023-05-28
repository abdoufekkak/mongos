import { product } from "../model/model.js";
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
      if (e.length == 0) {
        return res.status(500).json("23_");
      }
      return res.status(200).json(e);
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
export const getEtdsByNiveau = async (req, res, nivea) => {
  const niveau = nivea;
  const r = await product.find(
    { role: "etudiant", niveau: niveau },
    { _id: 1 }
  );
  console.log(r, "oussama");
  return r;
};
export const getEtdsByNiveau2 = (req, res) => {
  const niveau = req.query.class;
  product
    .find(
      { role: "etudiant", niveau: niveau },
      { Name: 1, last_Name: 1, cne: 1, _id: 1 }
    )
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
