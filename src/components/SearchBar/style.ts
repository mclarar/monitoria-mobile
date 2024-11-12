import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: '100%',
    flex: 1,
    gap: 10
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
});
