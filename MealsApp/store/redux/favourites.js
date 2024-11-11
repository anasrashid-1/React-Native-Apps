import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name : 'favourites',
    initialState : {
        ids : []    
    },
    reducers : {
        addfavourite: (state, action) => {
            state.ids.push(action.payload.id);
        },

        removeFavourite: (state, action) => {
            const index = state.ids.indexOf(action.payload.id);
            if(index > -1){
                state.ids.splice(index, 1);
            } 
        }
    }
})


export const { addfavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;