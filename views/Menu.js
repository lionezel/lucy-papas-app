import React from "react";
import { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { useEffect } from "react";

import { globalStyles } from "../styles/global";
import { Container, Divider, Image, List, Text, View } from "native-base";
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
            <View style={estilosMenu.cotenido_categoria}>
              <Text style={estilosMenu.categoria}>
                {mostrarHeading(categoria, i)}
              </Text>
            </View>
            <Pressable
              onPress={() => {
                seleccionarProducto(producto);
                navigation.navigate("DetalleProducto");
              }}
            >
              <View style={estilosMenu.card}>
                <Image
                  size={100}
                  borderRadius={2}
                  source={{
                    uri: imagen,
                  }}
                  alt={nombre}
                />
                <View style={estilosMenu.text}>
                  <Text style={{ fontWeight: "bold", fontSize: 18 }}>{nombre}</Text>
                  <Text>{descripcion}</Text>
                  <Text style={{ fontWeight: "bold" }}>Precio: $ {precio}</Text>
                </View>
              </View>
            </Pressable>
            <Divider />
          </Fragment>
        );
      })}
    </Container>
  );
}

const estilosMenu = StyleSheet.create({

  card: {
    flexDirection: "row",
    margin: "5%",
   
  },

  text: {
    marginHorizontal: "5%",
    fontSize: 200
  },

  categoria: {
    marginLeft: "5%",
    fontWeight: "bold",
    fontSize: 15
  },
  cotenido_categoria: {},
});
