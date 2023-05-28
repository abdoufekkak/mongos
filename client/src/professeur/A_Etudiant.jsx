import axios from "axios";
import React, { useEffect, useState } from "react";

function A_Etudiant() {
  const [etudiant, setetudiant] = useState("");
  const [abscence, setabsence] = useState(null);
  const [infopersonne, setinfopersonee] = useState(null);
  const change = async (e) => {
    setetudiant(e.target.value);
  };

  useEffect(() => {
    if (etudiant) {
      getabsence();
    }
  }, [etudiant]);
  const getabsence = async () => {
    try {
      const res = await axios.get("/seance/getabsence?cne=" + etudiant);
      reforrmuler(res.data.c);
      setinfopersonee(res.data.persone[0]);
    } catch (e) {
      setinfopersonee(null);
    }
  };
  const reforrmuler = (input) => {
    let x = {};
    for (let j = 0; j < input.length; j++) {
      x = { ...x, [input[j].element]: 0 };
    }
    input.map((item) => {
      console.log(item);
      let c = 0;
      for (let i = 0; i < item.etudiant.list_seance.length; i++) {
        if (item.etudiant.list_seance[i].presence == false) {
        }
        c = c + (item.etudiant.list_seance[i].presence == false ? 1 : 0);
      }
      x = { ...x, [item.element]: x[item.element] + c };
    });
    console.log(x);
    setabsence(x);
  };
  return (
    <div className="text-2xl">
      <br />
      <div class=" center my-8">
        <label for="cne" class="font-bold text-lg mr-4">
          CNE:
        </label>
        <input
          type="text"
          value={etudiant}
          onChange={change}
          placeholder="entrer cne"
        />
      </div>
      <div class="gras text-4xl mt-4">
        List des abscence de{" "}
        {infopersonne && (
          <>
            {infopersonne.last_Name}, {infopersonne.Name} eleve ingenieur en{" "}
            {infopersonne.niveau}
          </>
        )}
      </div>
      <div className="center justify-center my-8">
        <table id="tableau" class="m-lg-auto border-collapse w-3/4">
          <thead>
            <tr class="bg-teal-700 text-white">
              <th class="px-4 py-2">Element</th>
              <th> nombe d'absences</th>
            </tr>
          </thead>
          <tbody>
            {abscence &&
              Object.keys(abscence).map((prop) => (
                <tr>
                  <th key={prop}>{`${prop}: `}</th>
                  <th> {`${abscence[prop]}`}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div class="flex justify-center items-center mt-4">
        <span class="mr-2 font-bold">Nombre Total des absences :</span>
        <span>3</span>
      </div>
    </div>
  );
}

export default A_Etudiant;
