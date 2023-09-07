import React, { useReducer } from "react";

import {PedidoContext} from "./pedidosContext"
import PedidosReducer from "./pedidosReducer";

export const PedidosState = (props) => {


    //Crear state inicial
    const initialState = {
        pedido: []
    }

    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(PedidosReducer, initialState)

  return (
    <PedidoContext.Provider
    value={{
        pedido: state.pedido
    }}
  >{props.children}</PedidoContext.Provider>
  ) 
};
