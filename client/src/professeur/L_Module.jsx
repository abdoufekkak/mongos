import React from "react";

function L_Module() {
  //afficher seance
  let seance = [];
  for (let i = 1; i < 5; i++) {
    seance.push(<th scope="col">{"S_" + i}</th>);
  }
  //afficher etudiant
  const data = [
    { cne: "11200", nom: "toumi", prenom: "oussama" },
    { cne: "11100", nom: "Rafik", prenom: "Salma" },
    { cne: "11300", nom: "fekkak", prenom: "abdo" },
  ];

  return (
    <>
      <div className="flex-col flex mx-40 justify-center" class="container">
        <br />
        <br />

        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid flex items-center">
            <a class=" no-underline text-4xl" href="#">
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
              {seance}
            </tr>
          </thead>
          <tbody>
            {data.map((person,j) => (
              <tr>
                <td>{person.cne}</td>
                <td>{person.prenom}</td>
                <td>{person.nom}</td>
                {seance.map((s, i) => (
                  <td key={i}>
                    <div  className="btn-group flex  justify-center" role="group" aria-label="Basic radio toggle button group">
                      <input
                        type="radio"
                        className="btn-check"
                        name={`btnradio_${i}_${j}`}
                        id={`btnradio_${i}_${j}_p`}
                        autoComplete="off"
                 
                      />
                      <label className="btn btn-outline-success" htmlFor={`btnradio_${i}_${j}_p`}>
                        P
                      </label>
                
                      <input
                        type="radio"
                        className="btn-check"
                        name={`btnradio_${i}_${j}`}
                        id={`btnradio_${i}_${j}_t`}
                        autoComplete="off"
                      />
                      <label class="btn btn-outline-danger" htmlFor={`btnradio_${i}_${j}_t`}>
                        T
                      </label>
                    </div>
                  </td>
                ))}
                
              </tr>
            ))}
          </tbody>
        </table>
       
      <div className="mx-3  w-52 flex  justify-around" >
      <button className=" text-2xl h-[30px] group relative flex  justify-center  px-4 border   border-transparent text-sm font-medium rounded-md items-center text-white bg-blue-600 hover:bg-blue-700">
      Valide
      </button>
      <button className="text-2xl h-[30px] group relative flex  justify-center  px-4 border   border-transparent text-sm font-medium rounded-md items-center text-white bg-blue-600 hover:bg-blue-700">
      Explore
      </button>
      </div>
      </div>
    </>
  );
}

export default L_Module;
