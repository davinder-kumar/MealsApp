import React, { useContext } from 'react';
import { FavoriteContext } from '../store/context/context-favs';
import MealList from '../components/MealList/MealList';
import { MEALS } from '../data/dummyData';

const FavoritesScreen = () => {
    const favContextData = useContext(FavoriteContext)
    const data = MEALS.filter(meal => favContextData.ids.includes(meal.id))
    return <MealList items={data} />
};



export default FavoritesScreen;