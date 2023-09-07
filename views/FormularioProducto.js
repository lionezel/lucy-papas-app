import {
  Box,
  Button,
  Container,
  HStack,
  Icon,
  Input,
  Stack,
} from "native-base";
import React, { useState } from "react";
import { Text } from "react-native";

export default function FormularioProducto() {
  //State para cantidades
  const [cantidad, setCantidad] = useState(1);

  //Incrementa en uno la antidad
  const incrementarUno = () => {
    const nuevaCantidad = parseInt(cantidad) + 1
    setCantidad(nuevaCantidad)
  }

  //Decrementar en uno la cantidad 
  const decrementarUno = () => {
    if(cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1
      setCantidad(nuevaCantidad)
    }
  }

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
    </Container>
  );
}
