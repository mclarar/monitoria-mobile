import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 4, // Para sombra em Android
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#333",
    },
    info: {
      fontSize: 14,
      color: "#666",
    },

    imagem: {
      width: 100,
      height: 100,
      marginBottom: 8,
    },
  });