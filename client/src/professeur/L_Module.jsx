import React from "react";

function L_Module() {
  return (
    <div>
      <div class="container">
        <br />
        <br />

       
        <table class="table table-bordered border-primary">
          <thead>
            <tr>
              <th scope="col">CNE</th>
              <th scope="col">NOM</th>
              <th scope="col">PRENOM</th>
              <th scope="col">presence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>23456787654</td>
              <td>ABDOU</td>
              <td>FEKKAK</td>
              <th>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradioo"
                    id="btnradio1"
                    autocomplete="off"
                    checked=""
                  />
                  <label class="btn btn-outline-success" for="btnradio1">
                    P
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradioo"
                    id="btnradio3"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-danger" for="btnradio3">
                    A
                  </label>
                </div>
              </th>
            </tr>
            <tr>
              <td>7654</td>
              <td>SALMA</td>
              <td>RAFIk</td>
              <th>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autocomplete="off"
                    checked=""
                  />
                  <label class="btn btn-outline-success" for="btnradio2">
                    P
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio4"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-danger" for="btnradio4">
                    A
                  </label>
                </div>
              </th>
            </tr>
            <tr>
              <td>3456</td>
              <td>ZINEB</td>
              <td>LAHIB</td>
              <th>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradiooo"
                    id="btnradio22"
                    autocomplete="off"
                    checked=""
                  />
                  <label class="btn btn-outline-success" for="btnradio22">
                    P
                  </label>

                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradiooo"
                    id="btnradio44"
                    autocomplete="off"
                  />
                  <label class="btn btn-outline-danger" for="btnradio44">
                    A
                  </label>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
        <div class="d-grid gap-2 d-md-block" align="center">
          <button class="btn btn-primary" type="button">
            valider
          </button>
          <button class="btn btn-primary" type="button">
            exporter
          </button>
        </div>
      </div>
    </div>
  );
}

export default L_Module;
