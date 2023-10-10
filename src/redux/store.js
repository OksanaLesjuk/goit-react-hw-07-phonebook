import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

//якщо треба локалсторадж

export const reducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store)



//якщо без локалсторадж і персіст
// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     },
// });
