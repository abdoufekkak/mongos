import mongoose from "mongoose";
const seance_shema = mongoose.Schema({
  prof: { type: String, required: true },
  element: { type: String, required: true },
  class: {
    niveau: { type: String, required: true },
    etudiants: [
      {
        id: { type: String, required: true },
        list_seance: [
          {
            presence: {
              type: Boolean,
            },
            disactive: {
              type: Boolean,
            },
            justifie: {
              type: Boolean,
            },
            jour: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  date: {
    houredebut: {
      type: Number,
      required: true,
    },
    hourefin: {
      type: Number,
      required: true,
    },
    jour: {
      type: String,
      required: true,
    },
    ordre: {
      type: Number,
      required: true,
    },
  },
});

export const seance = mongoose.model("seance", seance_shema);
