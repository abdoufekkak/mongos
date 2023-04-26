import React, { useState, useEffect } from "react";
import "./style_prof.css";
import "./style-form.css";
const G_prof = () => {
  useEffect(() => {}, []);
  return (
    <>
      <br />
      <div class="table_responsive">
        <div class="modal-container">
          <input id="modal-toggle" type="checkbox" />
          <button>Click me</button>
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
                          name="CNI"
                          placeholder="Enter your CNI"
                          required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Name</span>
                        <input
                          type="text"
                          name="Name"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">last Name</span>
                        <input
                          type="text"
                          name="last_Name"
                          placeholder="Enter your username"
                          required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Email</span>
                        <input
                          type="text"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div class="input-box">
                        <span class="details">Password</span>
                        <input
                          type="text"
                          name="1Password"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Confirm Password</span>
                        <input
                          type="text"
                          name="2Password"
                          placeholder="Confirm your password"
                          required
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
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
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
                  {/* <FontAwesomeIcon icon={["fas", "coffee"]} /> */}

                  <button type="button" class="btn btn-danger">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </span>
              </td>
            </tr>

            <tr>
              <td>02</td>
              <td>
                <img
                  src="https://freetoolssite.com/wp-content/uploads/2022/02/webp-to-png.png.webp"
                  alt=""
                />
              </td>
              <td>Moshior Rahman Arif</td>
              <td>+880 017xx-xxxxxx</td>
              <td>Mymensingh Sadar</td>
              <td>
                <span class="action_btn">
                  <a href="#">Edit</a>
                  <a href="#">Remove</a>
                </span>
              </td>
            </tr>

            <tr>
              <td>03</td>
              <td>
                <img
                  src="https://freetoolssite.com/wp-content/uploads/2022/02/youtube.png.webp"
                  alt=""
                />
              </td>
              <td>Suibe</td>
              <td>+880 017xx-xxxxxx</td>
              <td>Mymensingh Sadar</td>
              <td>
                <span class="action_btn">
                  <a href="#">Edit</a>
                  <a href="#">Remove</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default G_prof;
