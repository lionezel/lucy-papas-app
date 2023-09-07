import React, { useReducer } from "react";

import firebase from "../../firebase";
import { FirebaseContext } from "./firebaseContext";
import firebaseReducer from "./firebaseReducer";

export const FirebaseState = (props) => {

    console.log(firebase)

    //Crear state inicial
    const initialState = {
        menu: []
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

  return <FirebaseContext.Provider
    value={{
        menu: state.menu
    }}
  >{props.children}</FirebaseContext.Provider>;
};
