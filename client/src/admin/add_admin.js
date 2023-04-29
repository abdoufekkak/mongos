import React, { useState, useEffect } from "react";
import "./style_navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaUserEdit, FaUserPlus, FaTrash } from "react-icons/fa";

const Add_admin = (props) => {
  const [is, seis] = useState(false);
  const [admin, setadmin] = useState({
    Cni: "",
    Name: "",
    last_Name: "",
    email: "",
    Password1: "",
    Password2: "",
  });
  useEffect(() => {}, []);

  const ajouter = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/admin", {
        ...admin,
        role: "admin",
      });
      props.onClick(res.data);
      setadmin({
        Cni: "",
        Name: "",
        last_Name: "",
        email: "",
        Password1: "",
        // Password2: "",
      });
      document.getElementById("ok").style.display = `none`;
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  onchange = (e) => {
    setadmin((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div class="modal-container">
      <input
        id="modal-toggle"
        type="checkbox"
        onClick={() => {
          document.getElementById("ok").style.display = `block`;
        }}
      />
      <button>
        <FaUserPlus />
      </button>
      <div class="modal-backdrop" id="ok">
        <div class="modal-content">
          <label class="modal-close" for="modal-toggle">
            x
          </label>
          <div class="containerr container">
            <div class="title">creer compte admin</div>
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
                      value={admin.Cni}
                    />
                  </div>
                  <div class="input-box">
                    <span class="details">Name</span>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Enter your name"
                      onChange={onchange}
                      value={admin.Name}
                    />
                  </div>
                  <div class="input-box">
                    <span class="details">last Name</span>
                    <input
                      type="text"
                      name="last_Name"
                      placeholder="Enter your username"
                      onChange={onchange}
                      value={admin.last_Name}
                    />
                  </div>
                  <div class="input-box">
                    <span class="details">Email</span>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      onChange={onchange}
                      value={admin.email}
                    />
                  </div>

                  <div class="input-box">
                    <span class="details">Password</span>
                    <input
                      type="text"
                      name="Password1"
                      placeholder="Enter your password"
                      onChange={onchange}
                      value={admin.Password1}
                    />
                  </div>
                  <div class="input-box">
                    <span class="details">Confirm Password</span>
                    {/* <input
                    type="text"
                    name="Password2"
                    placeholder="Confirm your password"
                    onChange={onchange}
                    value={prof.Password2}
                  /> */}
                  </div>
                </div>

                <div class="button">
                  <input
                    onClick={ajouter}
                    type="submit"
                    name="valider"
                    class="btn btn-success"
                    value="valider"
                  />
                </div>
              </form>
            </div>
          </div>
          <label class="modal-close button" for="modal-toggle">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default Add_admin;
