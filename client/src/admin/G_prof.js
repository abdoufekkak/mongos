import React, { useState, useEffect } from "react";
import "./style_prof.css";
import "./style-form.css";
import axios from "axios";
import { FaUserEdit, FaUserPlus, FaTrash } from "react-icons/fa";
import Add_prof from "./add";

const G_prof = () => {
  const [profs, setprofs] = useState([]);

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
        <Add_prof onClick={ajouter} />
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
                      <a href="#">
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
      </div>
    </>
  );
};

export default G_prof;
