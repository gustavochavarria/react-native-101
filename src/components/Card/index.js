import { View, Text, StyleSheet, Image } from "react-native";

const defaultImage =
  "https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/gray-background-7131-96d780fd18d4eaf58a7331d45573204e@1x.jpg";

export default function Card({ item, selection }) {
  const source = item.source || defaultImage;

  const isSelected = selection.includes(item);

  return (
    <View style={[style.container, isSelected && style.selected]}>
      <View style={style.imageContainer}>
        <Image source={{ uri: source }} style={style.image} />
      </View>
      <View style={style.body}>
        <View>
          <Text style={style.name}>{item.name}</Text>
          <Text style={style.price}>{item.price} C$</Text>
        </View>

        <View style={style.discount}>
          <Text style={style.discountText}>{item.discount}%</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    minHeight: 200,
    backgroundColor: "white",
    borderRadius: 4,
    marginBottom: 24,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "rgba(0,0,0,0.3)",
  },

  selected: {
    backgroundColor: "rgba(235,87,86,0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#eb5756",
  },
  imageContainer: {
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  body: {
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  discount: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 56,
    backgroundColor: "#eb5756",
    borderRadius: 88,
  },
  discountText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
