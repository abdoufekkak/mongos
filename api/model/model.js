import mongoose from "mongoose";

<<<<<<< HEAD:api/model/model.js
const PersonnneShema = mongoose.Schema({
=======
const personne = mongoose.Schema({
>>>>>>> 94b28bc2d7ed7711862a27d95b12b4b410ae1086:api/model.js
  Cni: {
    type: String,
  },
  Name: {
    type: String,
    required: true,
  },
  last_Name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  niveau: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  Password1: {
    type: String,
  },
  cne: {
    type: String,
  },
});

<<<<<<< HEAD:api/model/model.js
export const product = mongoose.model("Personnne", PersonnneShema);
=======
export const product = mongoose.model("Product", personne);
>>>>>>> 94b28bc2d7ed7711862a27d95b12b4b410ae1086:api/model.js
