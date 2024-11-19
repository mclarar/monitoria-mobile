import {  Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { SearchBar } from "../../components/SearchBar";
import { Modal } from "react-native";
import { useState } from "react";
import { ListaDePokemon } from "../../components/ListaDePokemon";

export const Home = () => {
  const [modalVisivel, setModalVisivel] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    console.log(query);
  };
  
  return (
    <View style={styles.container}>
      {/* <Text style={styles.estiloTexto}></Text>
      <SearchBar placeholder="Busque aqui..." onSearch={handleSearch} />

      <TouchableOpacity
        style={styles.botao}
        onPress={() =>{setModalVisivel(true);  console.log(modalVisivel); }}
      >
        <Text style={styles.texto}>Abrir modal</Text>
      </TouchableOpacity>

      <Modal
       
        animationType="slide"
        transparent={false}
        visible={modalVisivel}
        onRequestClose={() => {
          setModalVisivel(!modalVisivel)                 
        }}
      >
        <Text> modal aberto :)</Text> 
     
      </Modal> */}

      <ListaDePokemon/>
    </View>
  );
};
