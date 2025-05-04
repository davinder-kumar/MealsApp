import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

function MealList({items, onPress}) {
const navigation = useNavigation()
  function renderMealItem(item) {
    const itemData = item.item;
    const propsData = {
      title: itemData.title,
      imageURL: itemData.imageUrl,
      duration: itemData.duration,
      complexity: itemData.complexity,
      affordability: itemData.affordability,
      onPressHandler: onPressHandler.bind(this, itemData.title, itemData.id),
    };
    return <MealItem {...propsData} />;
  }

  function onPressHandler(title, id){
    navigation.navigate("MealSinglePage" ,{
      mealId : id, 
      mealTitle: title
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        key={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})