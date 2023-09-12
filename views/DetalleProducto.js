import React, { useContext } from "react";
import { Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { Button, Container, Image } from "native-base";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function DetalleProducto() {
  //Context de producto
  const { producto } = useContext(PedidoContext);
  const { nombre, imagen, descripcion, precio } = producto;

  //Redireccionar
  const navigation = useNavigation();

  return (
    <Container style={globalStyles.contenedor}>
      <Text>{nombre}</Text>
      <Image size={200} source={{ uri: imagen }} alt={nombre} />
      <Button
        style={globalStyles.boton}
        onPress={() => navigation.navigate("FormularioProducto")}
      >
        <Text style={globalStyles.botonTexto}>Ordenar producto</Text>
      </Button>
    </Container>
  );
}
