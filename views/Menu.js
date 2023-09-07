import React from "react";
import { useContext } from "react";
import { Text } from "react-native";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { useEffect } from "react";

export default function Menu() {
  //Context de firebase
  const { obtenerProductos } = useContext(FirebaseContext);

  useEffect(() => {
    obtenerProductos();
  }, []);

  return <Text>Menu</Text>;
}
