import { CONFIRMAR_ORDENAR_PRODUCTO, SELECCIONAR_PRODUCTO } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SELECCIONAR_PRODUCTO:
      return {
        ...state.SELECCIONAR_PRODUCTO,
        producto: action.payload,
      };
    case CONFIRMAR_ORDENAR_PRODUCTO:
      return {
        ...state.CONFIRMAR_ORDENAR_PRODUCTO,
        pedido: [...state.pedido, action.payload],
      };
    default:
      return state;
  }
};
