import React from 'react';
import MealList from '../components/MealList/MealList';
import { MEALS } from '../data/dummyData';
import { useSelector } from 'react-redux';

const FavoritesScreen = () => {
    const favoritesData = useSelector(state => state.favorites)
    const data = MEALS.filter(meal => favoritesData.ids.includes(meal.id))
    return <MealList items={data} />
};



export default FavoritesScreen;