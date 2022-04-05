import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter-slice';


/**
 * Central Data Store is declared and configured here.
 * We pass to <reducer> an object that maps different state slices
 * corresponding to specific app functionalities
 * Example: state related to the authentification; calculator; UI; etc.
 */
const store = configureStore({
    reducer: {counter: counterReducer},
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch