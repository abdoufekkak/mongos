import React, { useState, useEffect } from "react";
import "./style_prof.css";
import "./style-form.css";
import axios from "axios";
import { FaUserEdit, FaUserPlus, FaTrash } from "react-icons/fa";

const G_prof = () => {
  const [profs, setprofs] = useState([]);
  const [prof, setprf] = useState({
    Cni: "",
    Name: "",
    last_Name: "",
    email: "",
    Password1: "",
    Password2: "",
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
  const supprimer = async (id) => {
    try {
      const res = await axios.delete("");
    } catch (e) {
      console.log(e);
    }
  };
  const ajouter = async () => {
    try {
      const res = await axios.post("", prof);
    } catch (e) {
      console.log(e);
    }
  };
  const modifier = async () => {
    try {
      const res = await axios.put("", prof);
    } catch (e) {
      console.log(e);
    }
  };

  onchange = (e) => {
    setprf((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <br />
      <div class="table_responsive">
        <div class="modal-container">
          <input id="modal-toggle" type="checkbox" />
          <button>
            <FaUserPlus />
          </button>
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
        </div>
        <br />
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
              profs.map(() => (
                <tr>
                  <td>01</td>
                  <td>
                    <img
                      src="https://freetoolssite.com/wp-content/uploads/2022/02/846799.png.webp"
                      alt=""
                    />
                  </td>
                  <td>Muhibbullah Ansary</td>
                  <td>+880 017xx-xxxxxx</td>
                  <td>Mymensingh sadar</td>

                  <td>
                    <span class="action_btn">
                      <a href="#">
                        <FaUserEdit />
                      </a>
                      <a href="#">
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
      </div>
    </>
  );
};

export default G_prof;
