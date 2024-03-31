import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import rootReducer from "./rootReducer";
import { fetchApi } from '../services/http';
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApi.middleware),
});
setupListeners(store.dispatch)
export default store;