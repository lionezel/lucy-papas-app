import "react-native-gesture-handler";
import React from "react";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NuevoProducto from "./views/NuevoProducto";
import Menu from "./views/Menu";
import DetalleProducto from "./views/DetalleProducto";
import FormularioProducto from "./views/FormularioProducto";
import ResumenPedido from "./views/ResumenPedido";
import { ProgresoPedido } from "./views/ProgresoPedido";

//Importar el state de context
import { FirebaseState } from "./context/firebase/firebaseState";
import { PedidosState } from "./context/pedidos/pedidosState";
import { BotonResumen } from "./components/shared/BotonResumen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <FirebaseState>
          <PedidosState>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: "#FFDA00",
                  },
                  headerTitleStyle: {
                    fontWeight: "bold",
                    marginLeft: "25%"
                  },
                  headerTintColor: '#000'
                }}
              >
                <Stack.Screen
                  name="Nueva Orden"
                  component={NuevoProducto}
                  options={{
                    title: "Nueva Orden",
                  }}
                />
                <Stack.Screen
                  name="Menu"
                  component={Menu}
                  options={{
                    title: "Nuestro menu",
                    headerRight: props => <BotonResumen />
                  }}
                />
                <Stack.Screen
                  name="DetalleProducto"
                  component={DetalleProducto}
                  options={{
                    title: "Detalle producto",
                  }}
                />
                <Stack.Screen
                  name="FormularioProducto"
                  component={FormularioProducto}
                  options={{
                    title: "Ordenar producto",
                  }}
                />
                <Stack.Screen
                  name="ResumenPedido"
                  component={ResumenPedido}
                  options={{
                    title: "Resumen pedido",
                  }}
                />
                <Stack.Screen
                  name="ProgresoPedido"
                  component={ProgresoPedido}
                  options={{
                    title: "Progreso del pedido",
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </PedidosState>
        </FirebaseState>
      </NativeBaseProvider>
    </>
  );
}
