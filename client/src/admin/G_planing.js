import React from "react";

const G_planing = () => {
  return (
    <>
      <br />
      <div class="table_responsive">
        <div className="flex-col  flex mx-40 justify-center" class="container">
          <br />
          <br />

          <nav className="" class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <h1 className="text-5xl">Planning des séances</h1>
            </div>
          </nav>
          <br />

          <main>
            <div class="planning">
              <br />
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>8h - 10h</th>
                    <th>10h - 12h</th>
                    <th>14h - 16h</th>
                    <th>16h - 18h</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="time">Lundi</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="time">Mardi</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="time">Mercredi</td>
                    <td></td>
                    <td></td>
                    <td></td>

                    <td></td>
                  </tr>
                  <tr>
                    <td class="time">Jeudi</td>
                    <td></td>
                    <td></td>

                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="time">Vendredi</td>
                    <td></td>

                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="time">Samedi</td>
                    <td></td>

                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default G_planing;
