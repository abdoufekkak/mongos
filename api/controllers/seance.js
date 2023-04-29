import { seance } from "../model/seance.js";
export const getSeance = (req, res) => {
  //   const kitty = new product(req.body);
  //   product
  //     .find({ role: "etudiant" })
  //     .then((e) => {
  //       return res.status(200).json(e);
  //     })
  //     .catch((e) => {
  //       return res.status(500).json(e);
  //     });
};
export const addSeance = (req, res) => {
  const kitty = new seance(req.body);

  kitty
    .save()
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => res.status(500).json(e));
};
export const deleteSeance = (req, res) => {
  //   const nivid = req.params.id;
  //   product
  //     .deleteMany({ niveau: nivid })
  //     .then((e) => {
  //       return res.status(200).json(e);
  //     })
  //     .catch((e) => {
  //       return res.status(500).json(e);
  //     });
};
