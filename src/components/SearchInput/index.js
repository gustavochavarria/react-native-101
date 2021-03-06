import { View, StyleSheet, TextInput } from "react-native";

export default function SearchInput(props) {
  const { search, setSearch } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search coupon"
        value={search}
        onChangeText={(value) => {
          setSearch(String(value).trim().toLowerCase());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "white",
    height: 44,
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 24,
  },
});
