import React, { useState, useEffect, useContext } from "react";
import "./style_login.css";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    Password1: "",
  });
  const { login } = useContext(AuthContext);
  const Navigate = useNavigate();
  useEffect(() => {}, []);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(inputs);
      if (res.role === "professeur") {
        Navigate("/user/PLANING", { state: { id: res._id } });
      } else {
        Navigate("/g_prof", { state: { id: res._id } });
      }
      console.log(res.role === "professeur");
    } catch (err) {
      console.log(err);
      // toast.error("erreur autontification", { position: "top-center" }); // new line
    }
  };
  return (

    <div style={{ marginTop: "-100px" }} class="form_bg  ">
      <div class="container" style={{}}>
        <div
          style={{ margin: "auto" }}
          class=" col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6"
        >

          <div className="ok">
            <form class="form_horizontal" action="acceuil.html">
              <input type="hidden" name="add_supp" value="1" />
              <div class="form_icon">
                <i class="fa fa-user-circle"></i>
              </div>
              <h3 class="title"> login form </h3>
              <div class="form-group">
                <span class="input-icon">
                  <i class=" fa fa-user "> </i>
                </span>
                <input
                  value={inputs.email}
                  name="email"
                  class="form-control"
                  type="text"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <span class="input-icon">
                  <i class="fa fa-lock"> </i>
                </span>
                <input
                  onChange={handleChange}
                  value={inputs.Password1}
                  name="Password1"
                  class="form-control"
                  type="password"
                  placeholder=" password "
                />
              </div>
              <br />
              <button
                name="login"
                style={{ width: "30%" }}
                onClick={handleSubmit}
                class="btn signin"
              >
                login
              </button>
              <ul class="form-options">
                <li>
                  <a href="#"> se souvenir mot de passe</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
