import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PLANING = () => {
  const [messeace, setmesseace] = useState([]);
  const location = useLocation();
  const countContex = useContext(AuthContext);

  const [numero_simana, setnumero_simana] = useState(countContex.countState2);
  const [size, setsize] = useState(0);

  const myData = location?.state?.id;

  const suivant = () => {
    alert(countContex.countState1 + " " + size);
    if (countContex.countState1 == size) {
      countContex.countDispatch({
        type: "returne",
      });
      setnumero_simana((e) => e + 1);
      countContex.countDispatch2({
        type: "increment",
      });
    } else {
      alert("non ok");
    }
  };
  useEffect(() => {
    getmesseace();
  }, [numero_simana]);
  // useEffect(() => {
  //   alert("okok");
  // }, []);
  useEffect(() => {
    if (messeace.length > 0) {
      let tmp = 0;
      let same = 0;
      console.log(messeace, "oooo");
      for (let i = 0; i < messeace.length; i++) {
        if (messeace[i] !== "-") {
          same++;
          if (
            messeace[i].class.etudiants[0]?.list_seance[0]?.disactive == true
          ) {
            tmp++;
          }
        }
      }
      setsize(same);
      alert(tmp);
      countContex.countDispatch1({
        type: "setabsence",
        abs: tmp,
      });
    }
  }, [messeace]);

  const getmesseace = async () => {
    try {
      // Récupérer l'objet du Local Storage
      const storedData = localStorage.getItem("id");

      // Convertir les données en objet JavaScript
      const data = JSON.parse(storedData);
      const res = await axios.get(
        `/seance/${data}?numero_simana=${numero_simana}`
      );
      console.log(res.data);
      setmesseace(res.data);

      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex-col  flex mx-40 justify-center" class="container">
      <br />
      <br />

      <nav className="" class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <h1 className="text-5xl">Planning des séances</h1>
        </div>
      </nav>
      <br />

      <main>
        <div class="planning">
          <div class="flex items-center text-2xl justify-between">
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md mr-4">
              &lt; Précédent
            </button>
            <h1 class="text-2xl font-bold">
              Semaine du 27 avril au 3 mai 2023
            </h1>
            <button
              onClick={suivant}
              class="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
            >
              Suivant &gt;
            </button>
          </div>

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
                {messeace ? (
                  [0, 1, 2, 3].map((i) =>
                    messeace[i] !== "-" ? (
                      <td>
                        {messeace[i] && (
                          <Link
                            to={
                              "/user/module?class=" +
                              messeace[i].class.niveau +
                              "&id=" +
                              messeace[i]._id +
                              "&disavtive=" +
                              (messeace[i].class.etudiants[0].list_seance[0]
                                ?.disactive
                                ? messeace[i].class.etudiants[0].list_seance[0]
                                    ?.disactive
                                : "non") +
                              "&numero_semaine=" +
                              numero_simana
                            }
                          >
                            <p>
                              {messeace[i].class.niveau}/{messeace[i].element}
                            </p>
                          </Link>
                        )}
                      </td>
                    ) : (
                      <td key={i}></td>
                    )
                  )
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td class="time">Mardi</td>
                {messeace ? (
                  [4, 5, 6, 7].map((i) =>
                    messeace[i] !== "-" ? (
                      <td>
                        {messeace[i] && (
                          <Link
                            to={
                              "/user/module?class=" +
                              messeace[i].class.niveau +
                              "&id=" +
                              messeace[i]._id +
                              "&disavtive=" +
                              (messeace[i].class.etudiants[0].list_seance[0]
                                ?.disactive
                                ? messeace[i].class.etudiants[0].list_seance[0]
                                    ?.disactive
                                : "non") +
                              "&numero_semaine=" +
                              numero_simana
                            }
                          >
                            <p>
                              {messeace[i].class.niveau}/{messeace[i].element}
                            </p>
                          </Link>
                        )}
                      </td>
                    ) : (
                      <td></td>
                    )
                  )
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td class="time">Mercredi</td>
                {messeace ? (
                  [8, 9, 10, 11].map((i) =>
                    messeace[i] !== "-" ? (
                      <td>
                        {messeace[i] && (
                          <Link
                            to={
                              "/user/module?class=" +
                              messeace[i].class.niveau +
                              "&id=" +
                              messeace[i]._id +
                              "&disavtive=" +
                              (messeace[i].class.etudiants[0].list_seance[0]
                                ?.disactive
                                ? messeace[i].class.etudiants[0].list_seance[0]
                                    ?.disactive
                                : "non") +
                              "&numero_semaine=" +
                              numero_simana
                            }
                          >
                            <p>
                              {messeace[i].class.niveau}/{messeace[i].element}
                            </p>
                          </Link>
                        )}
                      </td>
                    ) : (
                      <td></td>
                    )
                  )
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td class="time">Jeudi</td>
                {messeace ? (
                  [12, 13, 14, 15].map((i) =>
                    messeace[i] !== "-" ? (
                      <td>
                        {messeace[i] && (
                          <Link
                            to={
                              "/user/module?class=" +
                              messeace[i].class.niveau +
                              "&id=" +
                              messeace[i]._id +
                              "&disavtive=" +
                              (messeace[i].class.etudiants[0].list_seance[0]
                                ?.disactive
                                ? messeace[i].class.etudiants[0].list_seance[0]
                                    ?.disactive
                                : "non") +
                              "&numero_semaine=" +
                              numero_simana
                            }
                          >
                            <p>
                              {messeace[i].class.niveau}/{messeace[i].element}
                            </p>
                          </Link>
                        )}
                      </td>
                    ) : (
                      <td></td>
                    )
                  )
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td class="time">Vendredi</td>
                {messeace ? (
                  [16, 17, 18, 19].map((i) =>
                    messeace[i] !== "-" ? (
                      <td>
                        {messeace[i] && (
                          <Link
                            to={
                              "/user/module?class=" +
                              messeace[i].class.niveau +
                              "&id=" +
                              messeace[i]._id +
                              "&disavtive=" +
                              (messeace[i].class.etudiants[0].list_seance[0]
                                ?.disactive
                                ? messeace[i].class.etudiants[0].list_seance[0]
                                    ?.disactive
                                : "non") +
                              "&numero_semaine=" +
                              numero_simana
                            }
                          >
                            <p>
                              {messeace[i].class.niveau}/{messeace[i].element}
                            </p>
                          </Link>
                        )}
                      </td>
                    ) : (
                      <td></td>
                    )
                  )
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td class="time">Samedi</td>
                {messeace ? (
                  [20, 21, 22, 23].map((i) =>
                    messeace[i] !== "-" ? (
                      <td>
                        {messeace[i] && (
                          <Link
                            to={
                              "/user/module?class=" +
                              messeace[i].class.niveau +
                              "&id=" +
                              messeace[i]._id +
                              "&disavtive=" +
                              (messeace[i].class.etudiants[0].list_seance[0]
                                ?.disactive
                                ? messeace[i].class.etudiants[0].list_seance[0]
                                    ?.disactive
                                : "non") +
                              "&numero_semaine=" +
                              numero_simana
                            }
                          >
                            <p>
                              {messeace[i].class.niveau}/{messeace[i].element}
                            </p>
                          </Link>
                        )}
                      </td>
                    ) : (
                      <td></td>
                    )
                  )
                ) : (
                  <>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default PLANING;
