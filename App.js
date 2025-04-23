import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import MealsListing from "./screens/MealsListing";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./screens/CategoryScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MealSinglePage from "./screens/MealSinglePage";
export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    "open-sans": require("./fonts/OpenSans-Regular.ttf"),
    "open-sans-medium": require("./fonts/OpenSans-Medium.ttf"),
    "open-sans-bold": require("./fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategories" screenOptions={{
          headerStyle: {backgroundColor: "#351401"}, 
          headerTintColor: "white",
          contentStyle : {backgroundColor: "#3f2f25"}
        }}>
          <Stack.Screen name="MealsCategories" component={CategoryScreen} options={{
            title: "All Categories"
          }} />
          <Stack.Screen name="MealsListing" component={MealsListing} options={{
             title: "Meals Listing"
          }} />
          <Stack.Screen name="MealSinglePage" component={MealSinglePage} options={{
            title: "Meal Single Page"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
