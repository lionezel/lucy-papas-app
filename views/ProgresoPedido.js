import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { firebase } from "../firebase/firebase";
import { Container, View } from "native-base";
import Countdown from "react-countdown";

export const ProgresoPedido = () => {
  const { idpedido } = useContext(PedidoContext);

  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const obtenerProducto = () => {
      firebase.db
        .collection('ordenes')
        .doc(idpedido)
        .onSnapshot(function (doc) {
          setTiempo(doc.data().tiempoentrega);
        });
    };
    obtenerProducto()
  }, []);

  //Muestra el countdown en la pantalla 
  const renderer = ({ minutes, seconds }) => {
    return (
      <Text>{minutes}:{seconds}</Text>
    )
  }

  return (
    <Container>
      <View>
        {tiempo === 0 && (
          <>
            <Text>Hemos recibido tu orden...</Text>
            <Text>Estamos calculando el tiempo de entrega </Text>
          </>
        )}

          {
            tiempo > 0 && (
              <>
              <Text>Su orden esta lista en: </Text>
              <Text>
                <Countdown 
                  date={Date.now() + tiempo * 60000}
                  renderer={renderer}
                />
              </Text>
              </>
            )
          }

      </View>
    </Container>
  );
};
