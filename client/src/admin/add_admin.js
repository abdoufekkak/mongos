import React, { useState, useEffect } from "react";
import "./style_navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaUserEdit, FaUserPlus, FaTrash } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

const Add_admin = (props) => {
  const [is, seis] = useState(false);
  const [admin, setadmin] = useState({
    Cni: "",
    Name: "",
    last_Name: "",
    email: "",
    Password1: "",
  });
  const [avataro, setavataro] = useState(null);
  const handleFileInput = (e) => {
    const file = e.target.files[0]; //files[0] dans cas use multiple file /e.target(all attrubue value src ...)
    console.log(file, "sed");
    setavataro(file);
  };

  const ajouter = async (e) => {
    e.preventDefault();
    try {
      await upload();
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
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", avataro);
      const res = await axios.post("/upload", formData);
      admin.image = res.data;
      // alert(res.data);
    } catch (e) {
      alert(e);
    }

    // total.url_img = res.data;
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
                    <label
                      htmlFor="avatar"
                      className="block text-sm font-medium text-gray-700"
                    ></label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                        {/*overflow la visibilité d'un contenu qui dépasse les dimensions de son conteneur.*/}
                        {avataro ? (
                          <img
                            src={URL.createObjectURL(avataro)} // La méthode crée simplement une URL temporaire pour un objet spécifié. L'URL temporaire est valide tant que la page est chargée et l'objet n'est pas libéré de la mémoire.
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
                          onChange={handleFileInput}
                          className="sr-only"
                        ></input>
                      </label>
                    </div>
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
