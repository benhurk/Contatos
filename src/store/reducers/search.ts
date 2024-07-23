import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        term: ''
    },
    reducers: {
        searchFor: (state, action: PayloadAction<string>) => {
            state.term = action.payload;
        }
    }
})

export const { searchFor } = searchSlice.actions;
export default searchSlice.reducer;