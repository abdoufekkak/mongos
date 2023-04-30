import mongoose from "mongoose";

const PersonnneShema = mongoose.Schema({
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
  image: {
    type: String,
  },
});

export const product = mongoose.model("Personnne", PersonnneShema);
