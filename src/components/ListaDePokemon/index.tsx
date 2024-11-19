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

  // função para obter os Pokémons
  const obterPokemons = () => {
    if (loading || !hasMore) return; // verifica o carregamento dos dados para evitar chamadas desnecessárias a api
    setLoading(true);

    getPokemons(limite, offset)
      .then((res) => {
        const novosPokemons = res.data.results;
        setListaDePokemons((prev) => [...prev, ...novosPokemons]);
        if (novosPokemons.length < limite) {
          setHasMore(false); // se menos dados forem retornados, não há mais para carregar
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

  // useEffect com dependencia vazia para carregar uma vez ao iniciar a página
  useEffect(() => {
    obterPokemons();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={listaDePokemons}
        keyExtractor={(item, index) => `${item.name}-${index}`} // chave única para cada item
        renderItem={({ item }) => (
          <Card
            title={item.name}
            alturaPokemon={item.height}
            pesoPokemon={item.weight}
            imagem={item.imagem} 
          />
        )}
        onEndReached={obterPokemons} // chama a requisição novamnete quando chega ao final
        onEndReachedThreshold={0.5} // carrega a lista quando estiver 50% do final
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        } // componente loader no final da lista

      />
    </View>
  );
};
