import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { getPokemons, Pokemon } from "../../service/pokemon";
import { Card } from "../Card";



export const ListaDePokemon = () => {
  const [limite, setLimite] = useState<number>(20);
  const [pagina, setPagina] = useState<number>(0);
  const [listaDePokemons, setListaDePokemons] = useState<Pokemon[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const offset = pagina * limite;

  // Função para obter os Pokémons
  const obterPokemons = () => {
    if (loading || !hasMore) return; // Evitar múltiplas chamadas
    setLoading(true);

    getPokemons(limite, offset)
      .then((res) => {
        const novosPokemons = res.data.results; // Ajuste conforme o retorno da API
        setListaDePokemons((prev) => [...prev, ...novosPokemons]);
        if (novosPokemons.length < limite) {
          setHasMore(false); // Se menos dados forem retornados, não há mais para carregar
        }
        setPagina((prev) => prev + 1);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Carregar a primeira página
  useEffect(() => {
    obterPokemons();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={listaDePokemons}
        keyExtractor={(item, index) => `${item.name}-${index}`} // Chave única para cada item
        renderItem={({ item }) => (
          <Card
            title={item.name}
            alturaPokemon={item.height}
            pesoPokemon={item.weight}
            imagem={item.imagem} 
          />
        )}
        onEndReached={obterPokemons} // Chama quando chega ao final
        onEndReachedThreshold={0.5} // Carrega quando estiver a 50% do final
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        } // Loader no final da lista
      />
    </View>
  );
};
