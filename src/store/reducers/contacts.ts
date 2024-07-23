import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../models/contacts";

type ContactState = {
    items: Contact[];
}

const initialState: ContactState = {
    items: []
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Contact>) => {
            state.items.push(action.payload);
        },

        remove: (state, action: PayloadAction<string>) => {
            const removedItemIndex = state.items.findIndex(item => item.name === action.payload);
            state.items = state.items.filter((item) => item.name !== action.payload);

            state.items.forEach(item => {
                if (item.id > removedItemIndex) { item.id -= 1; }
            })
        },

        edit: (state, action: PayloadAction<Contact>) => {
            state.items[action.payload.id] = action.payload;
        }
    }
})

export const { add, remove, edit} = contactsSlice.actions;
export default contactsSlice.reducer;