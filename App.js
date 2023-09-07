import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import NuevoProducto from './views/NuevoProducto';



const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Nueva Orden'
            component={NuevoProducto}
            options={{
              title: "Nueva Orden"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

