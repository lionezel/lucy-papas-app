import React, { useReducer } from "react";

import { PedidoContext } from "./pedidosContext";
import PedidosReducer from "./pedidosReducer";
import { SELECCIONAR_PRODUCTO } from "../../types";

export const PedidosState = (props) => {
  //Crear state inicial
  const initialState = {
    pedido: [],
    producto: null
  };

  //useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  //Selecciona el producto que el usuario desea ordenar
  const seleccionarProducto = (producto) => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: producto
    })
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        producto: state.producto,
        seleccionarProducto,
      }}
    >
      {props.children}
    </PedidoContext.Provider>
  );
};
