import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { product } from "../model/model.js";

export const login = (req, res) => {
  console.log(req.body.email);
  product
    .find({ email: req.body.email, Password1: req.body.Password1 })
    .then((e) => {
      if (e == null) return res.status(404).json("User not found!");
      return res.status(200).json(e);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
