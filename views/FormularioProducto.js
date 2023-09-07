import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Input,
  Stack,
} from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";

export default function FormularioProducto() {
  //State para cantidades
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);

  //Context de pedido
  const { producto } = useContext(PedidoContext);
  const { precio } = producto;

  //En cuanto el componente carga, calcular la cantidad  a pagar
  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  //Calcular el total del producto por su cantidad
  const calcularTotal = () => {
    const totalPagar = precio * cantidad;
    setTotal(totalPagar);
  };

  //Incrementa en uno la antidad
  const incrementarUno = () => {
    const nuevaCantidad = parseInt(cantidad) + 1;
    setCantidad(nuevaCantidad);
  };

  //Decrementar en uno la cantidad
  const decrementarUno = () => {
    if (cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1;
      setCantidad(nuevaCantidad);
    }
  };

  return (
    <Container>
      <Text>Cantidad</Text>

      <Button onPress={() => decrementarUno()}>
        <Icon name="remove" />
      </Button>

      <Input
        value={cantidad.toString()}
        keyboardType="numeric"
        onChangeText={(cantidad) => setCantidad(cantidad)}
      />

      <Button onPress={() => incrementarUno()}>
        <Icon name="remove" />
      </Button>

      <Text>Total: $ {total}</Text>
    </Container>
  );
}
