import React, { useState, useEffect } from "react";
import "./style_prof.css";
import "./style-form.css";
import axios from "axios";
import { FaUserEdit, FaUserPlus, FaTrash } from "react-icons/fa";
import Add_admin from "./add_admin";
import { RxAvatar } from "react-icons/rx";
const G_admin = () => {
  const [admins, setadmins] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [avatar, setavatar] = useState(null);
  const handleFileInputChange = (e) => {
    const file = e.target.files[0]; //files[0] dans cas use multiple file /e.target(all attrubue value src ...)
    setavatar(file);
  };
  const [admin, setadmin] = useState({
    Cni: "",
    Name: "",
    last_Name: "",
    email: "",
    Password1: "",
  });
  useEffect(() => {
    if (avatar) {
      console.log(avatar);
    }
  }, [avatar]);
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
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", avatar);
      const res = await axios.post("/upload", formData);
      admin.image = res.data;
      alert(res.data);
    } catch (e) {
      alert(e);
    }

    // total.url_img = res.data;
  };
  const supprimer = async (e, id) => {
    e.preventDefault();
    // await upload();
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
  const modifier = async (e) => {
    e.preventDefault();
    await upload();
    try {
      const res = await axios.put("/admin/" + admin._id, admin);
      const x = admins.findIndex((item) => {
        return item._id === admin._id;
      });
      const y = [...admins];
      y.splice(x, 1, admin);
      setadmins(y);
      setadmin({
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
    setadmin((pre) => ({ ...pre, [e.target.name]: e.target.value }));
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
                          setadmin(x);
                        }}
                      >
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
                          <div className="mt-2 flex items-center">
                            <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                              {/*overflow la visibilité d'un contenu qui dépasse les dimensions de son conteneur.*/}
                              {avatar ? (
                                <img
                                  src={URL.createObjectURL(avatar)} // La méthode crée simplement une URL temporaire pour un objet spécifié. L'URL temporaire est valide tant que la page est chargée et l'objet n'est pas libéré de la mémoire.
                                  alt="avatar"
                                  className="h-full w-full object-cover rounded-full"
                                  style={{
                                    width: "80px",
                                    height: "80px",
                                    borderRadius: "9999px",
                                    objectFit: "cover",
                                  }}
                                />
                              ) : (
                                <RxAvatar className="w-8 h-8" />
                              )}
                            </span>
                            <label
                              htmlFor="file-input"
                              className="ml-5 flex items-center justify-center px-4 py-4 border border-gray-300 rounded-md shadow-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                            >
                              <span>Upload a file</span>
                              <input
                                type="file"
                                name="avatar"
                                id="file-input"
                                accept=".jpg,.jpeg,.png"
                                onChange={handleFileInputChange}
                                className="sr-only"
                              ></input>
                            </label>
                          </div>
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

export default G_admin;
