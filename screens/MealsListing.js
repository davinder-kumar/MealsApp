import { CATEGORIES, MEALS } from "../data/dummyData";
import { useLayoutEffect } from "react";
import MealList from "../components/MealList/MealList";

function MealsListing(props) {
  const catId = props.route.params.categoryId;
  const filteredItems = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  useLayoutEffect(()=>{
    const title = CATEGORIES.filter(cat => cat.id == catId )[0].title
    props.navigation.setOptions({title: title})
   
  },[catId])
  

  return <MealList items={filteredItems}/>;
}

export default MealsListing;


