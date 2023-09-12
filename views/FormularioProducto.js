import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  Stack,
  View,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, Text } from "react-native";
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
            console.log(pedido);
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
    <Container
      style={[
        globalStyles.contenedor,
        globalStyles.contenido,
        estilosForm.contenedor,
      ]}
    >
      <Text style={estilosForm.titulo}>Cantidad</Text>

      <View style={estilosForm.contenido}>
        <Button style={estilosForm.botones} onPress={() => decrementarUno()}>
          <Icon name="minus" size={20} color="white" />
        </Button>

        <Input
          style={estilosForm.input}
          value={cantidad.toString()}
          keyboardType="numeric"
          onChangeText={(cantidad) => setCantidad(cantidad)}
          />

        <Button style={estilosForm.botones} onPress={() => incrementarUno()}>
          <Icon name="plus" size={20} color="white" />
        </Button>
      
          </View>

      <Text style={estilosForm.precio} >Total: $ {total}</Text>

      <Button
        style={[globalStyles.boton, estilosForm.boton_agregar]}
        onPress={() => confirmarOrden()}
      >
        <Text style={globalStyles.botonTexto}>Agregar al producto</Text>
      </Button>
    </Container>
  );
}

const estilosForm = StyleSheet.create({
  titulo: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
  },

  contenedor: {
    alignItems: "center",
  },

  boton_agregar: {
    marginTop: "100%",
    width: "100%",
    height: 50,
  },
  contenido: {
    flexDirection: "row",
  },

  botones: {
    width: "25%",
    backgroundColor: "black",
  },

  input: {
    height: 50,
    marginLeft: "47%",
  },

  precio: {
    marginTop: 40,
    fontWeight: "bold",
    fontSize: 30
  }
});
