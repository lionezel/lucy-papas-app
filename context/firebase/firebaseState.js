import React, { useReducer } from "react";

import firebase from "../../firebase";
import { FirebaseContext } from "./firebaseContext";
import firebaseReducer from "./firebaseReducer";
import { OBTENER_PRODUCTOS } from "../../types";

export const FirebaseState = (props) => {


    //Crear state inicial
    const initialState = {
        menu: []
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    //Funcion que se ejecuta para traer los productos
    const obtenerProductos = () => {
      dispatch({
        type: OBTENER_PRODUCTOS,
        
      })
    }

  return <FirebaseContext.Provider
    value={{
        menu: state.menu,
        firebase,
        obtenerProductos
    }}
  >{props.children}</FirebaseContext.Provider>;
};
