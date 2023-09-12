import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
    maxWidth: "100%"
    
  },
  contenido: {
    marginHorizontal: "2.5%",
    flex: 1,
  },

  boton: {
    backgroundColor: "#FFDA00",
    alignItems: "center",
  },
  botonTexto: {
    textTransform: "uppercase",
    fontWeight: "bold",
    alignItems: "center",
    color: "#000",
  },
});
