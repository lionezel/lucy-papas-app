import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { Container, Image, List } from "native-base";
import { globalStyles } from "../styles/global";

export default function ResumenPedido() {
  //Context de pedido
  const { pedido, total, mostrarResumen } = useContext(PedidoContext);

  useEffect(() => {
    calcularTotal()
  }, [pedido])

  const calcularTotal = () => {
    let nuevoTotal = 1
    nuevoTotal = pedido.reduce((nuevoTotal, articulo) => nuevoTotal + articulo.total, 0)

    mostrarResumen(nuevoTotal)
  }

  return (
    <Container style={globalStyles.contenedor}>
      <Text>Resumen pedido</Text>
      {pedido.map((producto, i) => {
        const { cantidad, nombre, imagen, id, precio } = producto;
        return (
          <List key={id + i}>
            <Image size={20} source={{ uri: imagen }} />
            <Text>{nombre}</Text>
            <Text>Cantidad: {cantidad}</Text>
            <Text>Precio: $ {precio}</Text>
          </List>
        );
      })}  

      <Text> Total a pagar: $ {total} </Text>
    </Container>
  );
}
