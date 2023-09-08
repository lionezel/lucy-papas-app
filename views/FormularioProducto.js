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
import { Alert, Text } from "react-native";
import { PedidoContext } from "../context/pedidos/pedidosContext";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function FormularioProducto() {
  //State para cantidades
  const [cantidad, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);

  //Context de pedido
  const { producto, guardarProducto } = useContext(PedidoContext);
  const { precio } = producto;

  //Redireccionar
  const navigation = useNavigation();

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

  //Confirma si la orden es correcta
  const confirmarOrden = () => {
    Alert.alert(
      "¿Deseas confirmar tu pedido?",
      "Un pedido confirmado ya no se podra modificar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            //Alamcenar el pedido al pedido principal
            const pedido = {
              ...producto,
              cantidad,
              total,
            };
            guardarProducto(pedido);
            //Navegar hacia el resumen
            navigation.navigate("ResumenPedido");
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

      <Button style={globalStyles.boton} onPress={() => confirmarOrden()}>
        <Text style={globalStyles.botonTexto}>Agregar al producto</Text>
      </Button>
    </Container>
  );
}
