import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext();

const login = async (user) => {
  console.log(user);
  try {
    const res = await axios.post("auto", user);
    localStorage.setItem("id", JSON.stringify(res.data[0]._id));

    return res.data[0];
  } catch (e) {
    console.log(e);
  }
};
let initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "modife":
      const obj = action.item;
      const x = state.findIndex((f) => {
        return f.id_seance === obj.id_seance;
      });
      const d = [...state];
      if (x == -1) {
        d.push(obj);
      } else {
        d.splice(x, 1, obj);
      }
      console.log(d, "a");
      return d;

    case "supprimer":
      const obj1 = action.item;
      const f = state.findIndex((g) => {
        return g.id_seance === obj1.id_seance;
      });
      const d1 = [...state];
      if (f == -1) {
        d1.push(obj);
      } else {
        d1[f].disactive = true;
      }
      console.log(d1, "aboo");
      return d1;
    case "returne":
      console.log("ok");
      return [];

    default:
      return state;
  }
};
let initialState1 = 0;
const reducer1 = (state, action) => {
  switch (action.type) {
    case "setabsence":
      console.log(action.abs);
      return action.abs;
    case "addabsence":
      console.log(state + 1, "abno");
      return state + 1;
    default:
      return state;
  }
};
let initialState2 = 0;
const reducer2 = (state, action) => {
  switch (action.type) {
    case "initalise":
      console.log(action.abs);
      return action.semaine;
    case "increment":
      console.log(state + 1, "boo");

      return state + 1;
    case "decriment":
      return state - 1;
    default:
      return state;
  }
};
export const AuthContexProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count1, dispatch1] = useReducer(reducer1, initialState1);
  const [count2, dispatch2] = useReducer(reducer2, initialState2);

  return (
    <AuthContext.Provider
      value={{
        countState: count,
        countDispatch: dispatch,
        login,
        countState1: count1,
        countDispatch1: dispatch1,
        countState2: count2,
        countDispatch2: dispatch2,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
