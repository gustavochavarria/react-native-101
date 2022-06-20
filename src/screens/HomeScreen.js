import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SearchInput from "../components/SearchInput";

import { coupons } from "../data/coupons";
import Card from "../components/Card";

export default function HomeScreen() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Coupons</Text>
      <SearchInput />
      <Text style={styles.offers}>Offers</Text>

      <FlatList
        data={coupons}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Card item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    margin: 12,
  },
  title: {
    color: "#eb5756",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
  offers: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 16,
    color: "#0c0c0c",
  },
});
