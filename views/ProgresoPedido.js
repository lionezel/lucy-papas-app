import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { firebase } from "../firebase/firebase";
import { Button, Container, View } from "native-base";
import Countdown from "react-countdown";

export const ProgresoPedido = () => {
  const { idpedido } = useContext(PedidoContext);

  const [tiempo, setTiempo] = useState(0);
  const [completado, setCompletado] = useState(false);

  useEffect(() => {
    const obtenerProducto = () => {
      firebase.db
        .collection("ordenes")
        .doc(idpedido)
        .onSnapshot(function (doc) {
          setTiempo(doc.data().tiempoentrega);
          setCompletado(doc.data().completado);
        });
    };
    obtenerProducto();
  }, []);

  //Muestra el countdown en la pantalla
  const renderer = ({ minutes, seconds }) => {
    return (
      <Text>
        {minutes}:{seconds}
      </Text>
    );
  };

  return (
    <Container>
      <View>
        {tiempo === 0 && (
          <>
            <Text>Hemos recibido tu orden...</Text>
            <Text>Estamos calculando el tiempo de entrega </Text>
          </>
        )}

        {!completado && tiempo > 0 && (
          <>
            <Text>Su orden esta lista en: </Text>
            <Text>
              <Countdown
                date={Date.now() + tiempo * 60000}
                renderer={renderer}
              />
            </Text>
          </>
        )}

        {completado && (
          <>
            <Text>Orden lista</Text>
            <Text>Por favor, pase a recoger su pedido</Text>

            <Button>
              <Text>Comenzar una orden nueva</Text>
            </Button>
          </>
        )}
      </View>
    </Container>
  );
};
