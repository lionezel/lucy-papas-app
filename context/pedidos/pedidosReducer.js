import {
  CONFIRMAR_ORDENAR_PRODUCTO,
  ELIMINAR_PRODUCTO,
  MOSTRAR_REUSMEN,
  PEDIDO_ORDENADO,
  SELECCIONAR_PRODUCTO,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        producto: action.payload,
      };
    case CONFIRMAR_ORDENAR_PRODUCTO:
      return {
        ...state,
        pedido: [...state.pedido, action.payload],
      };
    case MOSTRAR_REUSMEN:
      return {
        ...state,
        total: action.payload,
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        pedido: state.pedido.filter(
          (articulo) => articulo.id !== action.payload
        ),
      };
    case PEDIDO_ORDENADO:
      return {
        ...state,
        pedido: [],
        total: 0,
        idpedido: action.payload,
      };
    default:
      return state;
  }
};
