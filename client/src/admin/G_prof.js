import React, { useState, useEffect } from "react";
import "./style_prof.css";
import "./style-form.css";
import axios from "axios";
import { FaUserEdit, FaUserPlus, FaTrash } from "react-icons/fa";
import Add_prof from "./add";
import { RxAvatar } from "react-icons/rx";

const G_prof = () => {
  const [profs, setprofs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [prof, setprf] = useState({
    Cni: "",
    Name: "",
    last_Name: "",
    email: "",
    Password1: "",
    // Password2: "",
  });
  useEffect(() => {
    getpof();
  }, []);
  const getpof = async () => {
    try {
      const res = await axios.get("/professuer");
      setprofs(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const supprimer = async (e, id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`/professuer/${id}`);
      const x = [...profs];
      const evenNumbers = x.filter((obje) => {
        return obje._id !== id;
      });
      setprofs(evenNumbers);
    } catch (e) {
      console.log(e);
    }
  };
  const ajouter = (data) => {
    const x = [...profs];
    x.push(data);
    setprofs((pref) => x);
    console.log(data);
  };

  const modifier = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put("/professuer/" + prof._id, prof);
      const x = profs.findIndex((item) => {
        return item._id === prof._id;
      });
      const y = [...profs];
      y.splice(x, 1, prof);
      setprofs(y);
      setprf({
        Cni: "",
        Name: "",
        last_Name: "",
        email: "",
        Password1: "",
      });
      setShowModal(false);
    } catch (e) {
      console.log(e);
    }
  };
  onchange = (e) => {
    setprf((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  // const all = () => {
  //   // is ? dddd : faG;
  // };
const search = async(nom)=>{
  
      try {
        
        const res = await axios.get(`/professuer/:${nom}`);
        setprofs(res.data);
        console.log(res.data)
      } catch (e) {
        console.log(e);
      }
    };
  return (
    <>
      <br />
      <div class="table_responsive">
        <Add_prof onClick={ajouter} />
        <br />
        <div style={{ display:"flex",}}>
      <label style={{ fontSize: '16px',margin:"auto",paddingLeft:"15%",marginLeft:"40%",marginTop:"1%", width:"35%",}}>
      choisir un professeur:</label>
        <input
      type="text"
      onChange={(e) => {
        search(e.target.value);
      }}
      placeholder="Search..."
      style={{
        width: '23%',
        height: '40px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        padding: '0 12px',
      //  marginLeft: '54px'
      }}
    />
          
          </div>
          <br></br>
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>last name</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {profs ? (
              profs.map((x) => (
                <tr>
                  <td>01</td>
                  <td>
                    <img src={"upload/" + x.image} alt="" />
                  </td>
                  <td>{x.Name}</td>
                  <td>{x.last_Name}</td>
                  <td>{x.email}</td>

                  <td>
                    <span class="action_btn">
                      <a
                        href="#"
                        style={{ with: "80px" }}
                        onClick={() => {
                          setShowModal(true);
                          setprf(x);
                        }}
                      >
                        <FaUserEdit />
                      </a>
                      {/* <Add_prof /> */}
                      <a href="#" onClick={(e) => supprimer(e, x._id)}>
                        <FaTrash />
                      </a>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
        {showModal && (
          <div className="modal-container">
            <input id="modal-toggle" type="checkbox" checked={showModal} />
            <div className="modal-backdrop">
              <div className="modal-content">
                <label
                  onClick={() => setShowModal(false)}
                  className="modal-close"
                  htmlFor="modal-toggle"
                >
                  x
                </label>
                <div class="containerr container">
                  <div class="title">modifier compte admin</div>
                  <div class="content">
                    <form action="" method="post">
                      <div class="user-details">
                        <div class="input-box">
                          <span class="details">CNI</span>
                          <input
                            type="text"
                            name="Cni"
                            placeholder="Enter your CNI"
                            onChange={onchange}
                            value={prof.Cni}
                          />
                        </div>
                        <div class="input-box">
                          <span class="details">Name</span>
                          <input
                            type="text"
                            name="Name"
                            placeholder="Enter your name"
                            onChange={onchange}
                            value={prof.Name}
                          />
                        </div>
                        <div class="input-box">
                          <span class="details">last Name</span>
                          <input
                            type="text"
                            name="last_Name"
                            placeholder="Enter your username"
                            onChange={onchange}
                            value={prof.last_Name}
                          />
                        </div>
                        <div class="input-box">
                          <span class="details">Email</span>
                          <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            onChange={onchange}
                            value={prof.email}
                          />
                        </div>

                        <div class="input-box">
                          <span class="details">Password</span>
                          <input
                            type="text"
                            name="Password1"
                            placeholder="Enter your password"
                            onChange={onchange}
                            value={prof.Password1}
                          />
                        </div>
                      </div>

                      <div class="button">
                        <input
                          type="submit"
                          name="valider"
                          class="btn btn-success"
                          value="modifie"
                          onClick={modifier}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <label
                  style={{
                    marginRight: "20px",
                    paddingBottom: "20px",
                    background: "#6c757d",
                    width: "60px",
                  }}
                  class="modal-close button"
                  for="modal-toggle"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default G_prof;
