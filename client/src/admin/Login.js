import React, { useState, useEffect } from "react";
import "./style_login.css";
const Login = () => {
  useEffect(() => {}, []);
  return (
    <div class="form_bg ">
      <div class="container">
        <div class=" col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
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
                  class="form-control"
                  type="text"
                  name="username"
                  placeholder="username"
                />
              </div>
              <div class="form-group">
                <span class="input-icon">
                  <i class="fa fa-lock"> </i>
                </span>
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  placeholder=" password "
                />
              </div>
              <br />
              <button name="login" class="btn signin">
                <a href="acceuil.html">login</a>{" "}
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
