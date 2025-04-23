import { StyleSheet, Text, View } from "react-native";

function List({ children }) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listItem}>{children}</Text>
    </View>
  );
}

export default List;


const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 12,
        borderRadius: 6,
        paddingVertical: 4,
        marginHorizontal: 12,
        marginVertical: 4,
        backgroundColor: "#e2b497"
    },
    listItem: {
        color: "#351401",
        textAlign: "center"
    }
})