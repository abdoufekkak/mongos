import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

export const AuthContext = createContext();
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

    default:
      return state;
  }
};
export const AuthContexProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
