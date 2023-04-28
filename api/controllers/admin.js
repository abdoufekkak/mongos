// import { connec } from "../db.js";
import { product } from "../model/model.js";
export const getAdmin = (req, res) => {
  //   const kitty = new product(req.body);
  product
    .find({ role: "admin" })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const cherchAdmin = (req, res) => {
  const ro = req.query.ro;

  product
    .find({ Name: new RegExp(ro, "i") })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const adddmin = (req, res) => {
  const kitty = new product(req.body);

  kitty
    .save()
    .then((x) => {
      return res.status(200).json("has been created");
    })
    .catch((e) => console.log(e));
};

export const suppadmin = (req, res) => {
  const postId = req.params.id;
  product
    .deleteOne({ _id: postId })
    .then((e) => {
      return res.status(200).json("f");
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const modadmin = (req, res) => {
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
