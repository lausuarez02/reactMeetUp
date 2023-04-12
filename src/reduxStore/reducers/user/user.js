import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'userFavorites',
    initialState: {
        data: [],
    },
    reducers: {
        addToFavorites : (state, action) => {
            state.data.push(action.payload)
        },
        removeFromFavorites: (state, action) => {
            state.data.splice(action.payload.id, 1)
          }
    }
})


export const userFavorites = dataSlice.reducer;
export const {
    addToFavorites,
    removeFromFavorites
} = dataSlice.actions