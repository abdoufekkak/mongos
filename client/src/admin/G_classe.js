import React, { useState, useEffect } from "react";
import { FaUserEdit, FaUserPlus, FaUpload, FaTrash } from "react-icons/fa";
const G_classe = () => {
  const [admins, setadmins] = useState([1]);

  useEffect(() => {}, []);
  return (
    <>
      <br />
      <div class="table_responsive">
        <div class="row">
          <div class="col-md-3">
            <input type="file" name="file" id="file" class="inputfile" />
            <label for="file">
              <h1 className="cc"> import ........</h1>
              <FaUpload />
            </label>
          </div>
          <div class="col-md-5">
            <div class="bloc">
              <div class="select">
                <select>
                  <option>Vous êtes plutôt ?</option>
                  <option value="1">PlayStation</option>
                  <option value="2">Xbox</option>
                  <option value="3">Nintendo</option>
                  <option value="4">PC Master Race</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <button className="btn btn-danger">valider</button>
          </div>
        </div>
        <br />
        <table>
          <thead>
            <tr>
              <th>class</th>
              <th>niveau</th>
              <th> description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {admins ? (
              admins.map(() => (
                <tr>
                  <td>
                    <img
                      src="https://freetoolssite.com/wp-content/uploads/2022/02/846799.png.webp"
                      alt=""
                    />
                  </td>
                  <td>+880 017xx-xxxxxx</td>
                  <td>Mymensingh sadar</td>

                  <td>
                    <span class="action_btn">
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

export default G_classe;
