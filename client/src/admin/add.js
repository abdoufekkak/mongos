import React, { useState } from "react";
import "./style_navbar.css";
import { Link } from "react-router-dom";
const Add_prof = () => {
  const [prof, setprf] = useState({
    Cni: "",
    Name: "",
    last_Name: "",
    email: "",
    Password1: "",
    Password2: "",
  });
  onchange = (e) => {
    setprf((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <div class="modal-backdrop">
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
                <div class="input-box">
                  <span class="details">Confirm Password</span>
                  <input
                    type="text"
                    name="Password2"
                    placeholder="Confirm your password"
                    onChange={onchange}
                    value={prof.Password2}
                  />
                </div>
              </div>

              <div class="button">
                <input
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
  );
};

export default Add_prof;
