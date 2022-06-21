import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import SearchInput from "../components/SearchInput";
import Card from "../components/Card";
import { coupons } from "../data/coupons";
import { useCouponsContext } from "../providers/CouponsProviders";
import { useState } from "react";

export default function HomeScreen() {
  const { redeemed, handleRedeemIt } = useCouponsContext();
  const [search, setSearch] = useState("");

  const filteredCoupons = coupons.filter((coupon) => {
    const seek = String(coupon.name).toLowerCase();

    return seek.includes(search);
  });

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Coupons</Text>
      <SearchInput search={search} setSearch={setSearch} />

      <FlatList
        style={styles.list}
        data={filteredCoupons}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleRedeemIt(item)}>
              <Card item={item} selection={redeemed} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    padding: 12,
    color: "#eb5756",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },
  list: {
    padding: 12,
  },
});
