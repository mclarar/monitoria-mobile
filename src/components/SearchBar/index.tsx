import React, { useState } from "react";
import { SearchBarProps } from "./type";
import { TextInput, View,  } from "react-native";
import { styles } from "./style";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleSearchChange = (text: string) => {
    setQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
    <FaBeer  size={26}/>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={query}
        onChangeText={handleSearchChange}
      ></TextInput>
    </View>
  );
};
