import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Card from "../components/Card";
import { coupons } from "../data/coupons";
import { useCouponsContext } from "../providers/CouponsProviders";

export default function HistoryScreen() {
  const { redeemed, handleRedeemIt } = useCouponsContext();

  console.log({ redeemed });

  return (
    <View style={styles.main}>
      <Text style={styles.title}>History</Text>

      <FlatList
        style={styles.list}
        data={redeemed}
        renderItem={({ item }) => {
          return <Card item={item} selection={redeemed} />;
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
