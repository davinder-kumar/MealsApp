import { Text, View } from "react-native";

function MealSinglePage({route}){
    const params = route.params
    console.log(params) 
    return(
        <View>
            <Text>Meal Item single page , {params.mealTitle}</Text>
        </View>
    )
}
export default MealSinglePage;