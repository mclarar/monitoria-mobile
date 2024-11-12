import React, { useState } from "react";
import { SearchBarProps } from "./type";
import { TextInput, View,  } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/FontAwesome";



export const SearchBar = ({ placeholder, onSearch, children }: SearchBarProps) => {
const [query, setQuery] = useState<string>("");
const seacrhIcon =  <Icon name="search" size={26} color="black" />

  const handleSearchChange = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      {seacrhIcon}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={handleSearchChange}
        >
      </TextInput>
    </View>
  );
};
