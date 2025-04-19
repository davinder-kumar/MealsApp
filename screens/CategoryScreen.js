import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummyData.js";
import CategoryGridTile from "../components/CategoryGridTile.js";



function CategoryScreen({navigation}) {
  function renderCategoryItem(item) {
    return <CategoryGridTile title={item.item.title} color={item.item.color} onPressHandler={onPressHandler} />
  }
  function onPressHandler(){
    navigation.navigate("MealsOverView")
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(item) => renderCategoryItem(item)}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
