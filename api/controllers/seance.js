import { seance } from "../model/seance.js";
import { getEtdsByNiveau } from "./etudiant.js";
export const getSeance = (req, res) => {
  const postId = req.params.id;

  seance
    .find({ prof: postId })
    .then((e) => {
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
