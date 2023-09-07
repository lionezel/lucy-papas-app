import React from "react";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { useEffect } from "react";

import { globalStyles } from "../styles/global";
import { Container, Divider, Image, Text } from "native-base";
import { Fragment } from "react";

export default function Menu() {
  //Context de firebase
  const { obtenerProductos, menu } = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <Container style={globalStyles.contenedor}>
      {menu.map((producto) => {
        const { imagen, nombre, descripcion, categoria, id, precio } = producto;

        return (
          <Fragment key={id}>
            <Image size={100} borderRadius={100} source={{
              uri: imagen
            }} />
            <Text style={{ fontWeight: 'bold' }}>{nombre}</Text>
            <Text>{descripcion}</Text>
            <Text> $ {precio}</Text>
            <Divider />
          </Fragment>
        );
      })}
    </Container>
  );
}
