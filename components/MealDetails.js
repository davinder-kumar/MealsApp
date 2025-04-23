import { StyleSheet, Text, View } from "react-native";

function MealDetails({duration,complexity,affordability, style}) {
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.itemDetail,style]}>{duration}</Text>
      <Text style={[styles.itemDetail,style]}>{complexity}</Text>
      <Text style={[styles.itemDetail,style]}>{affordability}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
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
