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

export default function HomeScreen() {
  const { redeemed, handleRedeemIt } = useCouponsContext();

  console.log({ redeemed, handleRedeemIt });

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Coupons</Text>
      <SearchInput />

      <FlatList
        style={styles.list}
        data={coupons}
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
