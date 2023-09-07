import React, { useReducer } from "react";

import { firebase } from "../../firebase/firebase";
import { FirebaseContext } from "./firebaseContext";
import firebaseReducer from "./firebaseReducer";
import { OBTENER_PRODUCTOS } from "../../types";

export const FirebaseState = (props) => {
  //Crear state inicial
  const initialState = {
    menu: [],
  };

  //useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  //Funcion que se ejecuta para traer los productos
  const obtenerProductos = () => {
    //Consultar firebase
    firebase.db
      .collection("productos")
      .where("existencia", "==", true) //Traer solo los que esten en existencia
      .onSnapshot(manejarSnaphot);

    function manejarSnaphot(snapshot) {
      let productos = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      //Tenemos resultado de la base de datos
      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: productos
      });
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        menu: state.menu,
        firebase,
        obtenerProductos,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
