import { SafeAreaView, FlatList, Text, StyleSheet } from "react-native";

import Card from "../components/Card";
import { useCouponsContext } from "../providers/CouponsProvider";

export default function HistoryScreen() {
  const { redeemed } = useCouponsContext();

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>History</Text>

      <FlatList
        style={styles.list}
        data={redeemed}
        renderItem={({ item }) => {
          return <Card item={item} selection={redeemed} />;
        }}
      />
    </SafeAreaView>
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
