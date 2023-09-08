import React, { useReducer } from "react";

import { PedidoContext } from "./pedidosContext";
import PedidosReducer from "./pedidosReducer";
import { CONFIRMAR_ORDENAR_PRODUCTO, SELECCIONAR_PRODUCTO } from "../../types";

export const PedidosState = (props) => {
  //Crear state inicial
  const initialState = {
    pedido: [],
    producto: null,
  };

  //useReducer con dispatch para ejecutar las funciones
  const [state, dispatch] = useReducer(PedidosReducer, initialState);

  //Selecciona el producto que el usuario desea ordenar
  const seleccionarProducto = (producto) => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: producto,
    });
  };

  //Cuando el usuario confirma un producto
  const guardarProducto = (pedido) => {
    dispatch({
      payload: pedido,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        producto: state.producto,
        seleccionarProducto,
        guardarProducto,
      }}
    >
      {props.children}
    </PedidoContext.Provider>
  );
};
