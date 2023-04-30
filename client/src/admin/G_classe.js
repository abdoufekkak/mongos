import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaUserEdit, FaUserPlus, FaUpload, FaTrash } from "react-icons/fa";
import * as XLSX from "xlsx";
const G_classe = () => {
  const [admins, setadmins] = useState([1]);
  const [niveau, setnivea] = useState([]);
  const [sheetData, setSheetData] = useState([]);
  const [select, setselect] = useState("");
  const [file, setfile] = useState(null);

  const readExcel = async () => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);
        const c = [];
        for (let i = 0; i < data.length; i++) {
          c.push({
            Name: data[i].name,
            last_Name: data[i].lastname,
            cne: data[i].cne,
            niveau: select,
            role: "etudiant",
          });
        }
        resolve(c);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setSheetData(d);
      axios.post("/etd", sheetData).then(() => {
        alert("ok");
      });
    });
  };

  useEffect(() => {
    getniveau();
  }, []);

  const getniveau = async () => {
    const res = await axios.get("/niveau");
    setselect(res.data[0].niveau);
    setnivea(res.data);
  };
  return (
    <>
      <br />
      <div class="table_responsive">
        <div class="row">
          <div class="col-md-3">
            <input
              type="file"
              name="file"
              id="file"
              class="inputfile"
              onChange={(e) => setfile(e.target.files[0])}
            />
            <label for="file">
              <h1 className="cc"> import ........</h1>
              <FaUpload />
            </label>
          </div>
          <div class="col-md-5">
            <div class="bloc">
              <div class="select">
                <select
                  name="select"
                  value={select}
                  onChange={(e) => {
                    setselect(e.target.value);
                  }}
                >
                  {niveau ? (
                    niveau.map((x) => <option>{x.niveau}</option>)
                  ) : (
                    <option></option>
                  )}
                </select>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <button className="btn btn-danger" onClick={readExcel}>
              valider
            </button>
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
