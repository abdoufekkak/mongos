import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PLANING = () => {
  const [messeace, setmesseace] = useState([]);

  useEffect(() => {
    getmesseace();
  }, []);
  const getmesseace = async () => {
    try {
      const res = await axios.get("/seance/644fc1cf85fc658687d975d4");
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
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">
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
                              messeace[i]._id
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
                              messeace[i]._id
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
                              "/user/module?class=" + messeace[i].class.niveau
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
                              "/user/module?class=" + messeace[i].class.niveau
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
                              "/user/module?class=" + messeace[i].class.niveau
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
                              "/user/module?class=" + messeace[i].class.niveau
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
