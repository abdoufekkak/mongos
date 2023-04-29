import React, { useState, useEffect } from "react";
import "./style_prof.css";
import "./style-form.css";
import axios from "axios";
import { FaUserEdit, FaUserPlus, FaTrash } from "react-icons/fa";
import Add_prof from "./add";

const G_prof = () => {
  const [profs, setprofs] = useState([]);
  const [is, seis] = useState(false);

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
      const res = await axios.post("");
    } catch (e) {
      console.log(e);
    }
  };
  const modifier = async () => {
    // seis(true);
    try {
      const res = await axios.put("");
    } catch (e) {
      console.log(e);
    }
  };
  const all = () => {
    // is ? dddd : faG;
  };

  return (
    <>
      <br />
      <div class="table_responsive">
        <div class="modal-container">
          <input id="modal-toggle" type="checkbox" />
          <button onClick={() => seis(true)}>
            <FaUserPlus />
          </button>
          <Add_prof />
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
              profs.map((x) => (
                <tr>
                  <td>01</td>
                  <td>
                    <img
                      src="https://freetoolssite.com/wp-content/uploads/2022/02/846799.png.webp"
                      alt=""
                    />
                  </td>
                  <td>{x.Name}</td>
                  <td>{x.last_Name}</td>
                  <td>{x.email}</td>

                  <td>
                    <span class="action_btn">
                      <div class="modal-container">
                        <input id="modal-toggle" type="checkbox" />
                        <button onClick={() => seis(true)}>
                          <FaUserPlus />
                        </button>
                        <Add_prof />
                      </div>
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
