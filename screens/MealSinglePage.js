import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummyData";
import List from "../components/MealSingleItem/List";
import { useContext, useEffect } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { FavoriteContext } from "../store/context/context-favs";
import Subtitle from '../components/MealSingleItem/Subtitle'

function MealSinglePage({ route, navigation }) {
  const params = route.params;
  const mealId = params.mealId;
  const Meal = MEALS.find((meal) => meal.id === mealId);
  const favDataContext = useContext(FavoriteContext)
  const isFavMeal = favDataContext.ids.includes(mealId)
  
  function favHandler(){
    if(isFavMeal){
      favDataContext.removeFav(mealId)
      return;
    }
    favDataContext.addFav(mealId)
  }
  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => {
        return <ButtonIcon onPress={favHandler} icon={isFavMeal ? "star" : "star-outline"} color={"white"}/>
      }
    })
  },[isFavMeal,favHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: Meal.imageUrl }} style={styles.image} />
      <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{Meal.title}</Text>
        <MealDetails
          affordability={Meal.affordability}
          duration={Meal.duration}
          complexity={Meal.complexity}
          style={styles.mealDetails}
        />

        <Subtitle>Ingrediants</Subtitle>
        {Meal.ingredients.map(item => <List key={item}>{item}</List>)}
        
        <Subtitle>Steps</Subtitle>
        {Meal.steps.map(item => <List key={item}>{item}</List>)}
      </View>
      </View>
    </ScrollView>
  );
}
export default MealSinglePage;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  outerContainer: {
    alignItems: "center"
  },
  innerContainer: {
    width: "80%"
    // alignItems: "center",
    // justifyContent: "center",
    // flex : 1
  },
  title: {
    textAlign: "center",
    margin: 4,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "auto",
    height: 350,
    margin: 12,
  },
  mealDetails: {
    color: "white",
  },
});
