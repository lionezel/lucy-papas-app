import React, { useContext } from "react";
import { Text } from 'react-native'
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { Container, Image } from "native-base";
import { globalStyles } from "../styles/global";

export default function DetalleProducto() {

  //Context de producto
  const { producto } = useContext(PedidoContext)
  const { nombre, imagen, descripcion, precio } = producto

  return( 
    <Container style={globalStyles.contenedor}>
      <Text>{nombre}</Text>
      <Image  size={600} source={{ uri: imagen }}/>
    </Container>
    
  )
}
