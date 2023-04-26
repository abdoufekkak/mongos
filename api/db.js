// import mysql from "mysql";
import mongoose from "mongoose";

export const connec = mongoose
  .connect(
    "mongodb+srv://abdoufekkak:SRO5Br1UUI0wtiz6@cluster0.nw9fxbh.mongodb.net/test",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connection");
  })
  .catch((e) => console.log(e), "ook");
