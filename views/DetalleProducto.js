import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Center,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
  View,
} from "native-base";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function DetalleProducto() {
  //Context de producto
  const { producto } = useContext(PedidoContext);
  const { nombre, imagen, descripcion, precio } = producto;

  //Redireccionar
  const navigation = useNavigation();

  return (
    <>
      <Container style={[globalStyles.contenedor, globalStyles.contenido, estilosProducto.contenedor]}>
        <VStack space={1} alignItems="center">
          <Text style={estilosProducto.titulo}>{nombre}</Text>
          <Card style={estilosProducto.card}>
            <Image size={300} source={{ uri: imagen }} alt={nombre} />

            <Text style={estilosProducto.textos}>{descripcion}</Text>
            <Text style={[estilosProducto.textos, estilosProducto.precio]}>Precio: ${precio}</Text>
          </Card>
        </VStack>
        <Button
          style={[globalStyles.boton, estilosProducto.boton_ordenar]}
          onPress={() => navigation.navigate("FormularioProducto")}
        >
          <Text style={globalStyles.botonTexto}>Ordenar producto</Text>
        </Button>
      </Container>
    </>
  );
}

const estilosProducto = StyleSheet.create({
  contenedor: {
    alignItems: "center"
  },

  titulo: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20
  },

  textos: {
    marginTop: 20,
    fontSize: 20
  },

  precio: {
    fontWeight: "bold"
  },
  boton_ordenar: {
    marginTop: "30%",
    width: "100%",
    height: "7%",
  },
});
