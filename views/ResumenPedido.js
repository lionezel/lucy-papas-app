import React, { useContext } from "react";
import { Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { Container, Image, List } from "native-base";
import { globalStyles } from "../styles/global";

export default function ResumenPedido() {
  //Context de pedido
  const { pedido } = useContext(PedidoContext);

  return (
    <Container style={globalStyles.contenedor}>
      <Text>Resumen pedido</Text>
      {pedido.map((producto) => {
        const { cantidad, nombre, imagen, id, precio } = producto;
        return (
          <List key={id}>
            <Image size={20} source={{ uri: imagen }} />
            <Text>{nombre}</Text>
            <Text>Cantidad: {cantidad}</Text>
            <Text>Precio: $ {precio}</Text>
          </List>
        );
      })}  

      <Text> Total a pagar: $ </Text>
    </Container>
  );
}
