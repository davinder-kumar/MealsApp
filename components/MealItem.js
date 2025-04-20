import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

function MealItem({ title, imageURL, duration, complexity, affordability }) {
  console.log(title, imageURL, duration, complexity, affordability);
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: imageURL }} />
          <Text style={styles.title}>{title}</Text>
          <View style={styles.details}>
            <Text style={styles.itemDetail}>{duration}</Text>
            <Text style={styles.itemDetail}>{complexity}</Text>
            <Text style={styles.itemDetail}>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  pressed: {
    opacity: 0.75,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden"
  },
  mealItem: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: Platform.OS === "ios" ? "hidden" : "hidden",
    elevation: 4,
    shadowOpacity: "0.25",
    shadowOffset: { width: 0, height: 20 },
    shadowColor: "black",
  },
  title: {
    margin: 8,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  itemDetail: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
