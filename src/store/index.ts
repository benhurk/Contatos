import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import contactsReducer from "./reducers/contacts";
import searchReducer from "./reducers/search";

const reducer = combineReducers({
    contacts: contactsReducer,
});

const persistedReducer = persistReducer({ key: 'root', storage }, reducer);

const store = configureStore({
    reducer: {
        persistedReducer,
        search: searchReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export type RootReducer = ReturnType<typeof store.getState>;

export default store;