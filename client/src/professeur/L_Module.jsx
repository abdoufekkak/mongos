import React, { useState,useEffect } from "react";
import axios from "axios";
function L_Module() {
  //afficher seance
  const [data1, setdata] = useState([]);     
  const [Elements, setElements] = useState([]);
  const [Niveaus, setNiveaus] = useState([]);
  const [etudiants, setetudiants] = useState([]);
  
  const [Element, setElement] = useState("");     
  
  const [seance_Jour, setseance_Jour] = useState(0);
  const [quatre, setquatre] = useState(1);
  const [quatre_inv, setquatre_inv] = useState(1);
  const [Niveau, setNiveau] = useState("iid1");
//invisible button
const [showButton, setShowButton] = useState(true);
const [showButtonPrec, setShowButtonPrec] = useState(true);

  const list_element = ["JAVA", "HTML", "php"];
  
  let seance = [];
  console.log(etudiants.length,etudiants)
  for (let i = 1; i < etudiants.length+1; i++) {
    seance.push(<th scope="col">{"S_" + i}</th>);
  }
  //afficher etudiant
 

  const Next = () => {
    setquatre(quatre+1)
    setShowButtonPrec(true);
   
  }
  const Prec = () => {
    if(quatre>1){
    setquatre(quatre-1)
    setShowButton(true);
  }else if(seance_Jour > 1 && quatre===1){
setseance_Jour(seance_Jour-1)
setquatre(quatre_inv)
  }else{
   
    setShowButtonPrec(false);
  }
  }
  const getetds = async()=>{
    console.log(Element,Niveau,"dscsd")
    const data = {
      Element:"JAVA",
      Niveau: Niveau,
      quatre:quatre,
      seance_Jour:seance_Jour,
    };
    try {
      
      const res = await axios.get("/seance",{ params: data });
      //if(res.data.etudiant!==null){
      setetudiants(res.data,"kkkkk")
      console.log(res.data)
      
     // }
      //else {
     //   alert("pas encore")
     // }
      //setadmins(res.data);
    
    } catch (e) {
      console.log(e,"oussama");
      if (e.response.data === 'list vide') {
       
        setquatre_inv(quatre-1)
        console.log("errrrrr",quatre_inv)
        setquatre(1)
        setseance_Jour(seance_Jour+1)
      }
      if (e.response.data === 'not found a alist') {
        setShowButton(false);
      }
    }
  };


  useEffect(()=>{

    getNiveau();
    getElement();
    charger()
    console.log("aaaaaaa");
  }, [seance_Jour,quatre]);
  
  
  const getNiveau = async () => {
    try {
      const res = await axios.get("/niveau/affecter");
 
      setNiveaus(res.data);
      setNiveau(res.data[0].niveau)  
    } catch (e) {
      console.log(e);
    }
  };
  
  const getetd = async () => {
  

  

    try {
      const res = await axios.get("/etd/etds", {
        params: {
          class: Niveau,
        },
      });

      console.log(typeof(Niveau),res.data,"ooooooooooo");
      setdata(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const getElement = async () => {
    
    setElements(list_element);
  };
  


  function handleChange1(event) {
    setNiveau(event.target.value);
  }
  function handleChange2(event) {
    setElement(event.target.value);
  }
  const charger =()=>{
    getetd();
    getetds();
  }
    
  return (
    <>
      <div style={{margin:"auto", overflowX: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="container" class="container">
        <br />
        <br />

        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid flex items-center">
            <a style={{ textDecoration: 'none', fontSize: '3rem' }} href="#">
              List abscence du Class
            </a>

         
          </div>
        </nav>

        <div class=" center my-8">
        <label for="cne" class="font-bold text-lg mr-4">
        Element :
        </label>
        <select onChange={handleChange2} value={Element} id="Element" style={{ width:"112px" , marginRight:"16px"}}>
        {Elements ? (
          Elements.map((i)=>(

          <option key={i}>{i}</option>
          
          )


        )
        
  ): <option ></option>
}
       </select>
        <label for="cne" style={{ fontSize: "1.125rem",
        lineHeight: "1.75rem",marginRight: "1rem", fontWeight: "700"}} >
        Niveau : 
      </label>
      <select onChange={handleChange1} value={Niveau} id="cne" style={{ width:"112px" , marginRight:"16px"}}>
      {Elements ? (
      Niveaus.map((i,index)=>(

        <option key={index}>{i.niveau}</option>
        
      )


      )
      
      ): <option ></option>
}
      </select>
      <button style={{ backgroundColor: '#3B82F6',
      color: '#FFFFFF',
      border: 'none',
      padding: '0.75rem',
      fontSize: '1.125rem',
      borderRadius: '0.375rem',
    }}  onClick={charger} >
      Choisir
    </button>

    <br></br>
    <br></br>
      </div>


        <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', justifyContent: 'space-between' }}>
      <button  style={{    padding: '0.75rem',
      backgroundColor: '#3B82F6',
      color: '#FFFFFF',
      borderRadius: '0.375rem',
      marginLeft: '1rem',
    backgroundColor: showButtonPrec ? " #0f90b7" : "gray"}} onClick={Prec} class="px-4 py-2 text-white rounded-md mr-4">&lt; Précédent</button> 
      <h1 style={{fontSize: "24px",lineHeight: "32px",fontWeight: "700",}}>{seance_Jour} semaine </h1>
      
        <button class="px-4 py-2 text-white rounded-md mr-4" disabled={!showButton} style={{    padding: '0.75rem',
        backgroundColor: '#3B82F6',
        color: '#FFFFFF',
        borderRadius: '0.375rem',
        marginLeft: '1rem',
     backgroundColor: showButton ? " #0f90b7" : "gray"}} onClick={Next} >Suivant &gt;</button>
         </div>
    
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
            {data1.map((person,j) => (
              <tr>
                <td>{person.cne}</td>
                <td>{person.Name}</td>
                <td>{person.last_Name}</td>
                {etudiants.map((s, i) => ( s.etudiant[j].premiere_seance && s.etudiant[j].premiere_seance.presence !== null  ?
                  <td key={i}>
                    <div  className="btn-group flex  justify-center" role="group" aria-label="Basic radio toggle button group">
                      <input
                        type="radio"
                        checked={s.etudiant[j].premiere_seance?.presence }
                        
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
                        checked={s.etudiant[j].premiere_seance.presence=== false}
                        
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
                :<td><div  className="btn-group flex  justify-center" role="group" aria-label="Basic radio toggle button group">
                <input
                  type="radio"
                  
                  className="btn-check"
                  name={`btnradio_${i}_${j}`}
                  id={`btnradio_${i}_${j}_p`}
                  autoComplete="off"
                  checked={false}
           
                />
                <label className="btn btn-outline-success" htmlFor={`btnradio_${i}_${j}_p`}>
                 P
                </label>
          
                <input
                  type="radio"
                  checked={false}
                  className="btn-check"
                  name={`btnradio_${i}_${j}`}
                  id={`btnradio_${i}_${j}_t`}
                  autoComplete="off"
                />
                <label class="btn btn-outline-danger" htmlFor={`btnradio_${i}_${j}_t`}>
                  T
                </label>
              </div></td>))}
                
              </tr>
            ))}
          </tbody>
        </table>
       
      <div className="mx-3  w-52 flex  justify-around" >
      <button style={{ marginLeft:"90%",backgroundColor:"yellowgreen",height:"40px"
      }}  className=" text-2xl h-[30px] group relative flex  justify-center  px-4 border   border-transparent text-sm font-medium rounded-md items-center text-white ">
      Valide
      </button>
    
      </div>
      </div>
    </>
  );
}

export default L_Module;
