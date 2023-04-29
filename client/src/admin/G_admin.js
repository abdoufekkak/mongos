import React, { useState, useEffect } from "react";
import "./style_prof.css";
import "./style-form.css";
import axios from "axios";
import { FaUserEdit, FaUserPlus, FaTrash } from "react-icons/fa";
import Add_admin from "./add_admin";

const G_admin = () => {
  const [admins, setadmins] = useState([]);

  useEffect(() => {
    getdmin();
  }, []);
  const getdmin = async () => {
    try {
      const res = await axios.get("/admin");
      setadmins(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const supprimer = async (e, id) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`/admin/${id}`);
      const x = [...admins];
      const evenNumbers = x.filter((obje) => {
        return obje._id !== id;
      });
      setadmins(evenNumbers);
    } catch (e) {
      console.log(e);
    }
  };
  const ajouter = (data) => {
    const x = [...admins];
    x.push(data);
    setadmins((admins) => x);
    console.log(data);
  };
  const modifier = async (id) => {
    try {
      const res = await axios.put("/admin/" + id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <br />
      <div class="table_responsive">
        <Add_admin onClick={ajouter} />
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
            {admins ? (
              admins.map((x) => (
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
                      <a href="#">
                        <FaUserEdit />
                      </a>
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
      </div>
    </>
  );
};

export default G_admin;
