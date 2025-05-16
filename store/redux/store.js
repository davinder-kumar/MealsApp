import { configureStore } from '@reduxjs/toolkit';
import FavoritesSlice from './favorites';

const store = configureStore({
    reducer: {
      favorites : FavoritesSlice  
    }
});

export default store;