import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaUserEdit, FaUserPlus, FaUpload, FaTrash } from "react-icons/fa";
import list_seanc from "./data";

const G_planing = () => {
  const [select_element, setselect_element] = useState([]);
  const [niveau, setnivea] = useState([]);
  const [prof, setprofs] = useState([]);
  const [select_prof, setselect_prof] = useState([]);
  const [etat, setEta] = useState(0);

  const [select, setselect] = useState("");
  const element = ["-", "JAVA", "HTML", "javascript"];
  //-----------------
  // Initialiser la liste vide dans une variable d'état

  const [liste, setliste] = useState(list_seanc);

  // Ajouter un objet à la liste

  //---------------------
  const getniveau = async () => {
    const res = await axios.get("/niveau/affecter");
    setselect(res.data[0].niveau);

    console.log(res.data);
    setnivea(res.data);
    setEta((f) => f + 1);
  };
  const getpof = async () => {
    try {
      const res = await axios.get("/professuer");
      const x = ["-", ...res.data];

      setprofs(x);
      console.log(res.data);
      setEta((f) => f + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const change_liste = (a, i, valeur) => {
    const nouvelleListe = [...liste]; // créer une nouvelle liste avec les mêmes éléments
    nouvelleListe[i].class.niveau = select;

    if (a === "pr") {
      console.log("pppp");

      nouvelleListe[i].prof = valeur;
    } else if (a === "E") {
      nouvelleListe[i].element = valeur;
    } // mettre à jour l'objet de la liste avec la nouvelle valeur de prof
    setliste(nouvelleListe);
  };
  const ajoutr = async () => {
    console.log(liste, "ok");
    alert(liste.length);
    const x = [];
    for (let i = 0; i < liste.length; i++) {
      if (liste[i].element == "-" || liste[i].prof === undefined) {
      } else {
        x.push(liste[i]);
        //   console.log(liste[i]);
      }
    }
    const res = await axios.post("/seance", x);
  };
  useEffect(() => {
    getpof();
    getniveau();
  }, []);
  useEffect(() => {
    if (etat >= 2) {
      for (let i = 0; i < 24; i++) {
        change_liste("pr", i, prof[0]._id);
        change_liste("E", i, element[0]);
      }
      console.log("wer");
    }
  }, [etat]);
  useEffect(() => {
    const nouvelleListe = [...liste];
    for (let i = 0; i < 24; i++) {
      nouvelleListe[i].class.niveau = select;
    }
    setliste(nouvelleListe);
  }, [select]);

  return (
    <>
      <br />
      <div class="table_responsive">
        <div className="flex-col  flex mx-40 justify-center" class="container">
          <br />
          <br />

          <nav className="" class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <h1 className="text-5xl">Planning des séances</h1>
            </div>
          </nav>

          <div className="w-48 h-12  inline-block">
            <select
              style={{ appearance: "revert" }}
              name="select"
              value={select}
              onChange={(e) => {
                setselect(e.target.value);
              }}
            >
              {niveau ? (
                niveau.map((x) => <option>{x.niveau}</option>)
              ) : (
                <option></option>
              )}
            </select>
          </div>
          <br />

          <main>
            <div class="planning">
              <br />
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>8h - 10h</th>
                    <th>10h - 12h</th>
                    <th>14h - 16h</th>
                    <th>16h - 18h</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="time">Lundi</td>
                    {[0, 1, 2, 3].map((i) => (
                      <td key={i}>
                        <div className="flex justify-center w-64 ">
                          <div className="w-48 h-12  inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i}
                              value={liste[i] ? liste[i].prof : ""}
                              onChange={(e) => {
                                console.log("cahneg prof");
                                change_liste("pr", i, e.target.value);
                              }}
                            >
                              {prof ? (
                                prof.map((x) => (
                                  <option value={x._id}>
                                    {x == "-"
                                      ? "-"
                                      : x.last_Name + " " + x.Name}
                                  </option>
                                ))
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                          <div className="w-48 h-12 ml-4 inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 4}
                              value={liste[i] ? liste[i].element : ""}
                              onChange={(e) => {
                                console.log("cahneg");
                                change_liste("E", i, e.target.value);
                              }}
                            >
                              {element ? (
                                element.map((x) => <option>{x}</option>)
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td class="time">Mardi</td>
                    {[0, 1, 2, 3].map((i) => (
                      <td key={i}>
                        <div className="flex justify-center w-64 ">
                          <div className="w-48 h-12  inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 8}
                              onChange={(e) => {
                                change_liste("pr", i + 4, e.target.value);
                              }}
                            >
                              {prof ? (
                                prof.map((x) => (
                                  <option value={x._id}>
                                    {x == "-"
                                      ? "-"
                                      : x.last_Name + " " + x.Name}{" "}
                                  </option>
                                ))
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                          <div className="w-48 h-12 ml-4 inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 12}
                              value={liste[i + 4] ? liste[i + 4].element : ""}
                              onChange={(e) => {
                                change_liste("E", i + 4, e.target.value);
                              }}
                            >
                              {element ? (
                                element.map((x) => <option>{x}</option>)
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td class="time">Mercredi</td>

                    {[0, 1, 2, 3].map((i) => (
                      <td key={i}>
                        <div className="flex justify-center w-64 ">
                          <div className="w-48 h-12  inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 16}
                              value={liste[i + 8] ? liste[i + 8].prof : ""}
                              onChange={(e) => {
                                console.log("qwer");
                                change_liste("pr", i + 8, e.target.value);
                              }}
                            >
                              {prof ? (
                                prof.map((x) => (
                                  <option value={x._id}>
                                    {x == "-"
                                      ? "-"
                                      : x.last_Name + " " + x.Name}{" "}
                                  </option>
                                ))
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                          <div className="w-48 h-12 ml-4 inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 20}
                              value={liste[i + 8] ? liste[i + 8].element : ""}
                              onChange={(e) => {
                                change_liste("E", i + 8, e.target.value);
                              }}
                            >
                              {element ? (
                                element.map((x) => <option>{x}</option>)
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td class="time">Jeudi</td>
                    {[0, 1, 2, 3].map((i) => (
                      <td key={i}>
                        <div className="flex justify-center w-64 ">
                          <div className="w-48 h-12  inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 24}
                              value={liste[i + 12] ? liste[i + 12].prof : ""}
                              onChange={(e) => {
                                change_liste("pr", i + 12, e.target.value);
                              }}
                            >
                              {prof ? (
                                prof.map((x) => (
                                  <option value={x._id}>
                                    {x == "-"
                                      ? "-"
                                      : x.last_Name + " " + x.Name}{" "}
                                  </option>
                                ))
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                          <div className="w-48 h-12 ml-4 inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 28}
                              value={liste[i + 12] ? liste[i + 12].element : ""}
                              onChange={(e) => {
                                change_liste("E", i + 12, e.target.value);
                              }}
                            >
                              {element ? (
                                element.map((x) => <option>{x}</option>)
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td class="time">Vendredi</td>
                    {[0, 1, 2, 3].map((i) => (
                      <td key={i}>
                        <div className="flex justify-center w-64 ">
                          <div className="w-48 h-12  inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 32}
                              value={liste[i + 16] ? liste[i + 16].prof : ""}
                              onChange={(e) => {
                                change_liste("pr", i + 16, e.target.value);
                              }}
                            >
                              {prof ? (
                                prof.map((x) => (
                                  <option value={x._id}>
                                    {x == "-"
                                      ? "-"
                                      : x.last_Name + " " + x.Name}{" "}
                                  </option>
                                ))
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                          <div className="w-48 h-12 ml-4 inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 36}
                              value={liste[i + 16] ? liste[i + 16].element : ""}
                              onChange={(e) => {
                                change_liste("E", i + 16, e.target.value);
                              }}
                            >
                              {element ? (
                                element.map((x) => <option>{x}</option>)
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td class="time">Samedi</td>
                    {[0, 1, 2, 3].map((i) => (
                      <td key={i}>
                        <div className="flex justify-center w-64 ">
                          <div className="w-48 h-12  inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 40}
                              value={liste[i + 20] ? liste[i + 20].prof : ""}
                              onChange={(e) => {
                                change_liste("pr", i + 20, e.target.value);
                              }}
                            >
                              {prof ? (
                                prof.map((x) => (
                                  <option value={x._id}>
                                    {x == "-"
                                      ? "-"
                                      : x.last_Name + " " + x.Name}{" "}
                                  </option>
                                ))
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                          <div className="w-48 h-12 ml-4 inline-block">
                            <select
                              style={{ appearance: "revert" }}
                              name={i + 44}
                              value={liste[i + 20] ? liste[i + 20].element : ""}
                              onChange={(e) => {
                                change_liste("E", i + 20, e.target.value);
                              }}
                            >
                              {element ? (
                                element.map((x) => <option>{x}</option>)
                              ) : (
                                <option></option>
                              )}
                            </select>
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
              <div class="button">
                <input
                  type="submit"
                  name="valider"
                  style={{ color: "black" }}
                  class="btn  btn-success"
                  value="valider"
                  onClick={ajoutr}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default G_planing;
