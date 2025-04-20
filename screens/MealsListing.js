import { Alert, FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummyData";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

function MealsListing(props) {
  const catId = props.route.params.categoryId;
  const filteredItems = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  useLayoutEffect(()=>{
    const title = CATEGORIES.filter(cat => cat.id == catId )[0].title
    props.navigation.setOptions({title: title})
   
  },[catId])

  function renderMealItem(item) {
    const itemData = item.item;
    const propsData = {
      title: itemData.title,
      imageURL: itemData.imageUrl,
      duration: itemData.duration,
      complexity: itemData.complexity,
      affordability: itemData.affordability,
    };
    return <MealItem {...propsData} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredItems}
        key={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsListing;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
