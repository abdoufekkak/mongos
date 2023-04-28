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
  url_image: {
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

export const product = mongoose.model("Personnne", PersonnneShema);
