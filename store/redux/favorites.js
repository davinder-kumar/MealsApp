import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ids : []
}

const FavoritesSlice = createSlice({
    name : "favorites",
    initialState: initialState,
    reducers: {
        addFavorite : (state, action) => {
            state.ids.push(action.payload)
        },
        removeFavorite : (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload) , 1)
        }
    }
})
export const addFavorite = FavoritesSlice.actions.addFavorite
export const removeFavorite = FavoritesSlice.actions.removeFavorite
export default FavoritesSlice.reducer