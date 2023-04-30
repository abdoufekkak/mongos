import mongoose from "mongoose";

const niveau = mongoose.Schema({
  niveau: {
    type: String,
  },
  affecter: {
    type: Boolean,
  },
});

export const niv = mongoose.model("constant", niveau);
