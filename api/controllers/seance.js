import { seance } from "../model/seance.js";
import { product } from "../model/model.js";

import { getEtdsByNiveau } from "./etudiant.js";
export const getSeance = (req, res) => {
  const q = req.query.numero_simana;
  console.log(q);
  const postId = req.params.id;

  seance
    .find(
      { prof: postId },
      { "class.etudiants.list_seance": { $slice: [+q, 1] } }
    )
    // seance
    //   .find({ prof: postId })
    .then((e) => {
      e.sort(function (a, b) {
        return a.date.ordre - b.date.ordre;
      });
      const g = [];

      for (let i = 0; i < 24; i++) {
        g.push("-");
      }
      var f = { a: 0, b: 0, c: 0, d: 0 };
      var f1 = { a: 0, b: 0, c: 0, d: 0 };
      var f2 = { a: 0, b: 0, c: 0, d: 0 };
      var f3 = { a: 0, b: 0, c: 0, d: 0 };
      var f4 = { a: 0, b: 0, c: 0, d: 0 };
      var f6 = { a: 0, b: 0, c: 0, d: 0 };

      for (let i = 0; i < e.length; i++) {
        if (e[i].date.jour == "LUNDI") {
          switch (e[i].date.houredebut) {
            case 8: {
              g[0] = e[i];
              f.a = 1;
              console.log(f, "12");
              break;
            }
            case 10: {
              g[1] = e[i];
              f.b = 1;
              console.log(f, "22");
              break;
            }
            case 14: {
              g[2] = e[i];
              f.c = 1;
              console.log(f, "32");
              break;
            }
            case 16: {
              g[3] = e[i];
              console.log(f, "42");
              break;
            }
            default: {
              console.log(f, "e");
            }
          }
        } else if (e[i].date.jour == "Mardi") {
          console.log(e[i].date.houredebut, "camira");
          switch (e[i].date.houredebut) {
            case 8: {
              g[0 + 4] = e[i];
              f1.a = 1;
              console.log(f1);
              break;
            }
            case 10: {
              g[1 + 4] = e[i];
              console.log(f1);

              break;
            }
            case 14: {
              g[2 + 4] = e[i];
              f1.c = 1;
              console.log(f1);
              break;
            }
            case 16: {
              g[3 + 4] = e[i];
              console.log(f1);
              break;
            }
            default: {
            }
          }
        } else if (e[i].date.jour == "Mercredi") {
          switch (e[i].date.houredebut) {
            case 8: {
              // console.log()
              g[0 + 4 + 4] = e[i];
              f2.a = 1;
              break;
            }
            case 10: {
              g[1 + 4 + 4] = e[i];
              f2.b = 1;
              break;
            }
            case 14: {
              g[2 + 4 + 4] = e[i];
              f2.c = 1;
              break;
            }
            case 16: {
              g[3 + 4 + 4] = e[i];
              f.d = 1;
              break;
            }
            default: {
            }
          }
        } else if (e[i].date.jour == "Jeudi") {
          switch (e[i].date.houredebut) {
            case 8: {
              g[0 + 4 + 4 + 4] = e[i];
              break;
            }
            case 10: {
              g[1 + 4 + 4 + 4] = e[i];
              break;
            }
            case 14: {
              g[2 + 4 + 4 + 4] = e[i];
              break;
            }
            case 16: {
              g[3 + 4 + 4 + 4] = e[i];
              break;
            }
            default: {
              console.log("asdf");
            }
          }
        } else if (e[i].date.jour == "Vendredi") {
          switch (e[i].date.houredebut) {
            case 8: {
              g[0 + 4 + 4 + 4 + 4] = e[i];
              break;
            }
            case 10: {
              g[1 + 4 + 4 + 4 + 4] = e[i];
              break;
            }
            case 14: {
              g[2 + 4 + 4 + 4 + 4] = e[i];
              f4.c = 1;
              break;
            }
            case 16: {
              g[3 + 4 + 4 + 4 + 4] = e[i];
              break;
            }
            default: {
            }
          }
        } else if (e[i].date.jour == "Samedi") {
          switch (e[i].date.houredebut) {
            case 8: {
              g[0 + 4 + 4 + 4 + 4 + 4] = e[i];
              break;
            }
            case 10: {
              g[1 + 4 + 4 + 4 + 4 + 4] = e[i];
              break;
            }
            case 14: {
              g[2 + 4 + 4 + 4 + 4 + 4] = e[i];
              break;
            }
            case 16: {
              g[3 + 4 + 4 + 4 + 4 + 4] = e[i];
              break;
            }
            default: {
            }
          }
        }
      }
      return res.status(200).json(g);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
export const addSeance = async (req, res) => {
  const seances = [...req.body];
  const nivea = seances[0].class.niveau;
  try {
    const x = getEtdsByNiveau(req, res, nivea);
    const re = await x;
    for (let i = 0; i < seances.length; i++) {
      console.log(i);
      for (let j = 0; j < re.length; j++) {
        seances[i].class.etudiants.push({ id: re[j]._id });
      }
    }
    const rs = await seance.insertMany(seances);

    return res.status(200).json(rs);
  } catch (e) {
    return res.status(500).json("x");
  }
  // const kitty = new seance(req.body);

  // kitty
  //   .save()
  //   .then((e) => {
  //     return res.status(200).json(e);
  //   })
  //   .catch((e) => res.status(500).json(e));
};

export const addabscence = (req, res) => {
  const nivid = req.body;
  const ids = nivid.id_seance;
  const list = nivid.etudiants;
  //{ id: id_etud, presence: true }
  let promises = [];
  list.map(({ id, presence }) => {
    const promise = new Promise((resolve, reject) => {
      seance
        .updateOne(
          { _id: ids, "class.etudiants.id": id },
          {
            $push: {
              "class.etudiants.$.list_seance": {
                presence: presence,
                disactive: true,
              },
            },
          } //?
        )
        .then((e) => {
          resolve(e);
        })
        .catch((e) => {
          reject(e);
        });
    });
    promises.push(promise);
  });

  Promise.all(promises)
    .then((results) => {
      console.log(results);
      return res.status(200).json(results);
    })
    .catch((err) => {
      console.log(err, "abdou");

      return res.status(500).send(err);
    });
};

export const getabsencebyEtudiant = async (req, res) => {
  const niveau = req.query.cne;
  console.log(niveau);
  try {
    const res1 = await product.findOne({ cne: niveau }, { _id: 1 });
    const res3 = await seance.find({
      "class.etudiants": { $elemMatch: { id: res1.id } },
    });
    // console.log(res3);
    const listes_seances = res3.map((seance) => {
      const etudiant = seance.class.etudiants.find(
        (etudiant) =>
          etudiant.id === res1.id && etudiant.list_seance.length !== 0
      );
      const element = seance.element;
      const date = seance.date;
      return { etudiant, element, date };
    });
    var d = null;
    console.log(listes_seances.length);
    for (let i = 0; i < listes_seances.length; i++) {
      var dio = null;
      if (listes_seances[i].etudiant) {
        d = listes_seances[i].etudiant.id;
      }
    }
    console.log(d, "ok");
    const persone = await product.find({
      _id: d,
    });

    const c = [];
    for (let i = 0; i < listes_seances.length; i++) {
      if (listes_seances[i].etudiant != null) {
        c.push(listes_seances[i]);
      }
    }
    return res.status(200).json({ c, persone });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

export const getseance = (req, res) => {
  const q = req.query.numero_simana;
  console.log(q);
  const id = req.params.id;

  seance
    .find({ _id: id }, { "class.etudiants.list_seance": { $slice: [+q, 1] } })
    .then((e) => {
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};
export const getStudentsWithFirstAbsence = (req, res) => {
  const niveau = req.query.Niveau; const q = req.query.quatre;
  const a = +req.query.seance_Jour;  const element = req.query.Element;
   seance
    .aggregate([
       {
        $match: {
          "class.niveau": niveau,
          element: element,
        },
      },
      {
        $project: {
          etudiant: {
            $map: {
              input: "$class.etudiants",
              as: "etud",
              in: {
                id: "$$etud.id",
                premiere_seance: {
                  $arrayElemAt: ["$$etud.list_seance", a],
                },
              },
            },
          },
        },
      },
      // Sauter les 4 premiers résultats
      { $skip: 4 * (q - 1) },
       { $limit: 4 },
    ])

    .then((e) => {
      console.log(e);
      let a = 0;
      let b = 0;
      if (e.length == 0) {
        return res.status(404).json("list vide");
      }
      const result = e.map((item) => {
        const student = item.etudiant.find(
          (etud) =>
            !etud.hasOwnProperty("premiere_seance") && etud.hasOwnProperty("id")
        );
        const student2 = item.etudiant.find(
          (etud) =>
            !etud.hasOwnProperty("premiere_seance") &&
            !etud.hasOwnProperty("id")
        );
        if (student) {
          a++;
          console.log(a, item.etudiant, "hahiya");
        }
        if (student2) {
          b++;
        }
        console.log(item.etudiant, "machihiya");
        return item;
        ////////
      });
      if (a > 0) {
        if (a == 4) {
          console.log(a, "ashhfa");
          return res.status(404).json("not found a alist");
        }
        if (a < 4) {
          console.dir(result);
          return res.status(200).json(result.slice(0, 4 - a));
        }
      }
      // if (b == 4) {
      //   return res.status(404).json("list vide");
      // }
      // if (b < 4 && b > 0) {
      //   return res.status(404).json("cas1");
      // }
      return res.status(200).json(result);
    })
    .catch((e) => {
      console.log(e);
      return res.status(500).json(e);
    });
};
