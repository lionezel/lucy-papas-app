import React from "react";
import { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { useEffect } from "react";

import { globalStyles } from "../styles/global";
import { Container, Divider, Image, List, Text } from "native-base";
import { Fragment } from "react";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { useNavigation } from "@react-navigation/native";

export default function Menu() {
  //Context de firebase
  const { obtenerProductos, menu } = useContext(FirebaseContext);

  //Context de pedido
  const { seleccionarProducto } = useContext(PedidoContext);

  //Hook para redireccionar
  const navigation = useNavigation();

  useEffect(() => {
    obtenerProductos();
  }, []);

  const mostrarHeading = (categoria, i) => {
    if (i > 0) {
      const categoriaAnterior = menu[i - 1].categoria;
      if (categoriaAnterior !== categoria) {
        return <Text>{categoria}</Text>;
      }
    } else {
      return <Text>{categoria}</Text>;
    }
  };

  return (
    <Container style={globalStyles.contenedor}>
      {menu.map((producto, i) => {
        const { imagen, nombre, descripcion, categoria, id, precio } = producto;

        return (
          <Fragment key={id}>
            {mostrarHeading(categoria, i)}
            <Pressable
              onPress={() => {
                seleccionarProducto(producto);
                navigation.navigate('DetalleProducto')
              }}
            >
              <Image
                size={100}
                borderRadius={100}
                source={{
                  uri: imagen,
                }}
              />
              <Text style={{ fontWeight: "bold" }}>{nombre}</Text>
              <Text>{descripcion}</Text>
              <Text> $ {precio}</Text>
            </Pressable>
            <Divider />
          </Fragment>
        );
      })}
    </Container>
  );
}
