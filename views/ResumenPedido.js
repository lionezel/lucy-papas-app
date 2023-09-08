import React, { useContext, useEffect } from "react";
import { Alert, Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { Button, Container, Image, List } from "native-base";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import {firebase }from "../firebase/firebase";

export default function ResumenPedido() {
  //Redireccionar
  const navigation = useNavigation();

  //Context de pedido
  const { pedido, total, mostrarResumen, eliminarPorducto } =
    useContext(PedidoContext);

  useEffect(() => {
    calcularTotal();
  }, [pedido]);

  const calcularTotal = () => {
    let nuevoTotal = 1;
    nuevoTotal = pedido.reduce(
      (nuevoTotal, articulo) => nuevoTotal + articulo.total,
      0
    );

    mostrarResumen(nuevoTotal);
  };

  //Redirecciona al pregreso pedido
  const progresoPedido = () => {
    Alert.alert(
      "Revisa tu pedido",
      "Una vez que realizas tu pedido, no podras cambiarlo",
      [
        {
          text: "Confirmar",
          onPress: async () => {
            //Crear un objeto
            const pedidoObj = {
              tiempoentrega: 0,
              completado: false,
              total: Number(total),
              orden: pedido, //Arrray
              creado: Date.now(),
            };
            try {
              const pedido = await firebase.db
                .collection('ordenes')
                .add(pedidoObj);
              console.log(pedido);
            } catch (error) {
              console.log(error);
            }

            //Escribir el pedido en firebase

            navigation.navigate("ProgresoPedido");
          },
        },
        {
          text: "Revisar",
          style: "cancel",
        },
      ]
    );
  };

  //Elimina un producto del arreglo de pedido
  const confirmarEliminacion = (id) => {
    Alert.alert(
      "¿Deseas eliminar este articulo",
      "Una vez eliminado no podras recuperar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            //Eliminar del state
            eliminarPorducto(id);
            console.log(id);

            //Calcular
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

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

            <Button onPress={() => confirmarEliminacion(id)}>
              <Text>Eliminar</Text>
            </Button>
          </List>
        );
      })}

      <Text> Total a pagar: $ {total} </Text>
      <Button
        style={globalStyles.boton}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={globalStyles.botonTexto}>Seguir pidiendo</Text>
      </Button>

      <Button style={globalStyles.boton} onPress={() => progresoPedido()}>
        <Text style={globalStyles.botonTexto}>Ordenar pidiendo</Text>
      </Button>
    </Container>
  );
}
