import React, { useReducer } from "react";

import { PedidoContext } from "./pedidosContext";
import PedidosReducer from "./pedidosReducer";
import {
  CONFIRMAR_ORDENAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  MOSTRAR_REUSMEN,
  PEDIDO_ORDENADO,
  SELECCIONAR_PRODUCTO,
} from "../../types";

export const PedidosState = (props) => {
  //Crear state inicial
  const initialState = {
    pedido: [],
    producto: null,
    total: 0,
    idpedido: '',
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
      type: CONFIRMAR_ORDENAR_PRODUCTO,
      payload: pedido,
    });
  };

  //Muestra el total a pagar en el resumen
  const mostrarResumen = (total) => {
    dispatch({
      type: MOSTRAR_REUSMEN,
      payload: total,
    });
  };

  //Elimina un articulo del carrito
  const eliminarPorducto = (id) => {
    dispatch({
      type: ELIMINAR_PRODUCTO,
      payload: id,
    });
  };

  //PEDIDO ORDEBADO
  const pedidoOrdenado = (id) => {
    dispatch({
      type: PEDIDO_ORDENADO,
      payload: id,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        pedido: state.pedido,
        producto: state.producto,
        total: state.total,
        idpedido: state.idpedido,
        seleccionarProducto,
        guardarProducto,
        mostrarResumen,
        eliminarPorducto,
        pedidoOrdenado,
      }}
    >
      {props.children}
    </PedidoContext.Provider>
  );
};
