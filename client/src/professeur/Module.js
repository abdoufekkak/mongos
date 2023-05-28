import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/authContext";

function Module() {
  //afficher seance
  const countContex = useContext(AuthContext);

  //afficher etudiant
  const [data, setdata] = useState([]);
  var [abs, setbs] = useState([]);
  const searchParams = new URLSearchParams(window.location.search);
  //   const [global, setglobal] = useContext(countContex.countState);
  const param3 = searchParams.get("id");
  const para = searchParams.get("disavtive");
  const s = searchParams.get("numero_semaine");

  const getetd = async () => {
    const searchParams = new URLSearchParams(window.location.search);
    const param1 = searchParams.get("element");
    const param2 = searchParams.get("class");
    const param3 = searchParams.get("id");

    console.log(param2, "rr");

    try {
      const res = await axios.get("/etd/etds", {
        params: {
          class: param2,
        },
      });
      setdata(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const changer = async (id_etud, pre) => {
    const d = [...abs];
    const x = d.findIndex((item) => {
      return item.id === id_etud;
    });
    if (pre === "NP") {
      d.splice(x, 1, { id: id_etud, presence: false });
    } else {
      d.splice(x, 1, { id: id_etud, presence: true });
    }
    setbs(d);
  };
  useEffect(() => {
    getetd();
  }, []);
  useEffect(() => {
    if (data) {
      compler();
      console.log(data, "ok");
    }
  }, [data]);
  useEffect(() => {
    return () => {
      //   console.log(abs);
      if (abs.length > 0) {
        console.log(abs, "oussama");
        countContex.countDispatch({
          type: "modife",
          item: { id_seance: param3, etudiants: [...abs] },
        });
      }
    };
  }, [abs]);
  const compler = async () => {
    const c = [];
    const x = countContex.countState.findIndex((f) => {
      return f.id_seance === param3;
    });
    if (x >= 0) {
      console.log(countContex.countState[x].etudiants, "boobo");
      setbs(countContex.countState[x].etudiants);
      console.log(countContex.countState[x].etudiants, "yoyo");
    } else {
      if (para === "non") {
        for (let i = 0; i < data.length; i++) {
          c.push({ id: data[i]._id, presence: null });
        }
      } else {
        try {
          const res = await axios.get(
            `/seance/abs/${param3}?numero_simana=${s}`
          );
          for (let i = 0; i < res.data[0].class.etudiants.length; i++) {
            c.push({
              id: data[i]._id,
              presence: res.data[0].class.etudiants[i].list_seance[0].presence,
              disactive: true,
            });
          }
        } catch (e) {}
      }

      setbs(c);
    }
  };
  const valider = async () => {
    try {
      for (let i = 0; i < abs.length; i++) {
        if (abs[i].disactive == true) {
          alert("impossi");
          return;
        }
        abs[i].disactive = true;
      }

      const res = await axios.post("/seance/abscence", {
        id_seance: param3,
        etudiants: [...abs],
      });

      countContex.countDispatch({
        type: "supprimer",
        item: { id_seance: param3 },
      });

      countContex.countDispatch1({
        type: "addabsence",
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="flex-col flex mx-40 justify-center" class="container">
        <br />
        <br />

        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid flex items-center">
          <a style={{ textDecoration: 'none', fontSize: '3rem' }} href="#">
          G-ABS
          </a>

             
          </div>
        </nav>
        <br />

        <table class="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">CNE</th>
              <th scope="col">NOM</th>
              <th scope="col">PRENOM</th>
              {/*}{data.map(person => <p key={person.name}>{`${person.name}, ${person.age} years old`}</p>)}*/}
              <th>seance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person, j) => (
              <tr key={j}>
                <td>{person.cne}</td>
                <td>{person.last_Name}</td>
                <td>{person.Name}</td>
                <td key={j}>
                  <div
                    className="btn-group flex  justify-center"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name={`btnradio_${j}`}
                      id={`btnradio_${j}_p`}
                      autoComplete="off"
                      disabled={abs[j]?.disactive}
                      checked={abs[j]?.presence}
                      onChange={() => changer(person._id, "P")}
                    />
                    <label
                      className="btn btn-outline-success"
                      htmlFor={`btnradio_${j}_p`}
                    >
                      P
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name={`btnradio_${j}`}
                      id={`btnradio_${j}_t`}
                      disabled={abs[j]?.disactive}
                      autoComplete="off"
                      checked={abs[j]?.presence == false}
                      onChange={() => changer(person._id, "NP")}
                    />
                    <label
                      class="btn btn-outline-danger"
                      htmlFor={`btnradio_${j}_t`}
                    >
                      T
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mx-3  w-52 flex  justify-around">
          <button
          style={{ marginLeft:"90%",backgroundColor:"yellowgreen",height:"40px"
      }} 
            onClick={valider}
            className="text-2xl h-[30px] group relative flex  justify-center  px-4 border   border-transparent text-sm font-medium rounded-md items-center text-white bg-blue-600 hover:bg-blue-700"
          >
            Valide
          </button>
          
        </div>
      </div>
    </>
  );
}

export default Module;
