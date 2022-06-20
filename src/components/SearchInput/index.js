import { View, StyleSheet, TextInput } from "react-native";
import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";

export default function SearchInput() {
  return (
    <View>
      {/* <FontAwesome5 name="search" size={6} color="gray" /> */}
      <TextInput style={style.input} placeholder="Search coupon" />
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "white",
    height: 44,
    borderRadius: 4,
    paddingLeft: 8,
  },
});
