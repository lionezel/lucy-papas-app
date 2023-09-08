import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { firebase } from "../firebase/firebase";

export const ProgresoPedido = () => {
  const { idpedido } = useContext(PedidoContext);

  const [tiempo, setTiempo] = useState(0);

  useEffect(() => {
    const obtenerProducto = () => {
      firebase.db
        .collection('ordenes')
        .doc(idpedido)
        .onSnapshot(function (doc) {
          setTiempo(doc.data().timpoentrega);
        });
    };
    obtenerProducto();
  }, []);

  return <Text>{tiempo}</Text>;
};
