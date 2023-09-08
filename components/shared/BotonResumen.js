import { Button, Text } from "native-base";
import { globalStyles } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { PedidoContext } from "../../context/pedidos/pedidosContext";

export const BotonResumen = () => {
  //Redireccionar
  const navigation = useNavigation();

  //Leer el objeoto de pedido
  const { pedido } = useContext(PedidoContext);

  if (pedido.length === 0) return null;

  return (
    <Button
      style={globalStyles.boton}
      onPress={() => navigation.navigate("ResumenPedido")}
    >
      <Text style={globalStyles.botonTexto}>Ir a pedido</Text>
    </Button>
  );
};
