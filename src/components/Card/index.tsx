import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";

interface CardProps {
  title: string;
  alturaPokemon: number;
  pesoPokemon: number;
  imagem: string
}

export const Card = ({ title, alturaPokemon, pesoPokemon, imagem }: CardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>Altura: {alturaPokemon}m</Text>
      <Text style={styles.info}>Peso: {pesoPokemon}kg</Text>
    </View>
  );
};
