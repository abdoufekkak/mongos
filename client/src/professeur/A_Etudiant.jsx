import React from "react";

function A_Etudiant() {
  return (
    <div className="text-2xl">
      <div class=" center my-8">
        <label for="cne" class="font-bold text-lg mr-4">
          CNE:
        </label>
        <select id="cne" class="w-28 mr-4">
          <option value="cne1">CNE 1</option>
          <option value="cne2">CNE 2</option>
          <option value="cne3">CNE 3</option>
        </select>
        <button class="bg-blue-500 text-white border-none px-4 py-2 text-lg rounded-md">
          Valider
        </button>
      </div>
      <div class="gras text-4xl mt-4">List des abscence :</div>
      <div className="center justify-center my-8">
        <table id="tableau" class="m-lg-auto border-collapse w-3/4">
          <thead>
            <tr class="bg-teal-700 text-white">
              <th class="px-4 py-2">Module</th>
              <th class="px-4 py-2">Element</th>
              <th class="px-4 py-2">Date Seance</th>
              <th class="px-4 py-2">Heure dure</th>
              <th class="px-4 py-2">Type seance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border px-4 py-2">Module 1</td>
              <td class="border px-4 py-2">element 1</td>
              <td class="border px-4 py-2">01/05/2023</td>
              <td class="border px-4 py-2">10h-12h</td>
              <td class="border px-4 py-2">Cours magistral</td>
            </tr>
            <tr>
              <td class="border px-4 py-2">Module 1</td>
              <td class="border px-4 py-2">elemnt 2</td>
              <td class="border px-4 py-2">05/05/2023</td>
              <td class="border px-4 py-2">14h-16h</td>
              <td class="border px-4 py-2">TD</td>
            </tr>
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
