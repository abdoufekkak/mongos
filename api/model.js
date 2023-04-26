import mongoose from "mongoose";

const prod = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
});

export const product = mongoose.model("Product", prod);
