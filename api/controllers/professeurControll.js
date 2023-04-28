// import { connec } from "../db.js";
import { product } from "../model.js";

export const getAll = (req, res) => {
  product
    .find({ role: "proffesseur" })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const  addproduct = (req, res) => {

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
    .deleteOne({_id:req.params.id })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const searchprofesseur = (req, res) => {
 

  product
  .find({ Name: { $regex: new RegExp(req.Name, "i") } })
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
    .updateOne({ _id: postId }, { $set: req.body }).then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};


module.exports = {
  addproduct,
  deleteprofesseur,
  updateprofesseur,
  getAll,
  searchprofesseur

  
};

