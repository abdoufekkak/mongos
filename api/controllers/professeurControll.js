// import { connec } from "../db.js";
import { product } from "../model/model.js";

export const getAll = async (req, res) => {
  try {
    const re = await product.find({
      role: "professeur",
    });
    return res.status(200).json(re);
  } catch (e) {
    return res.status(500).json(e);
  }
};
export const addproduct = (req, res) => {
  const kitty = new product(req.body);

  kitty
    .save()
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
export const deleteprofesseur = (req, res) => {
  product
    .deleteOne({ _id: req.params.id })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
export const searchprofesseur = (req, res) => {
  let nom = req.params.nom.replace(/:/, "");
  product
    .find({ role: "professeur", Name: { $regex: new RegExp(nom, "i") } })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const updateprofesseur = (req, res) => {
  const postId = req.params.id;
  product
    .updateOne({ _id: postId }, { $set: req.body })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
