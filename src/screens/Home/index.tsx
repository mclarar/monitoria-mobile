import { Text, View } from "react-native";
import { styles } from "./style";
import { SearchBar } from "../../components/SearchBar";

export const Home = () => {

  const handleSearch = (query: string) => {
      console.log(query);
      
  }

  return (
    <View style={styles.container}>
      <Text style={styles.estiloTexto}>
      </Text>
        <SearchBar placeholder="Busque aqui..." onSearch={handleSearch}/>
    </View>
  )
}