import { niv } from "../model/niveau.js";
export const getniveau = (req, res) => {
  //   const kitty = new niveau(req.body);
  niv
    .find({})
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
export const addnive = (req, res) => {
  const kitty = new niv(req.body);
  kitty
    .save()
    .then((x) => {
      return res.status(200).json(x);
    })
    .catch((e) => console.log(e));
};

export const getafficet = (req, res) => {
  //   const kitty = new niveau(req.body);
  niv
    .find({ affecter: true })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const modaniveau = (req, res) => {
  const postId = req.params.id;
  niv
    .updateOne({ niveau: postId }, { $set: req.body })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
